// MBTI 测试应用主逻辑
class MBTITest {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.scores = {
            EI: 0, // E高分，I低分
            SN: 0, // S高分，N低分
            TF: 0, // T高分，F低分
            JP: 0 // J高分，P低分
        };

        this.initElements();
        this.bindEvents();
        this.shuffleQuestions();
    }

    initElements() {
        // 页面
        this.startPage = document.getElementById('start-page');
        this.testPage = document.getElementById('test-page');
        this.resultPage = document.getElementById('result-page');
        this.questionsPage = document.getElementById('questions-page');

        // 按钮
        this.startBtn = document.getElementById('start-btn');
        this.prevBtn = document.getElementById('prev-btn');
        this.restartBtn = document.getElementById('restart-btn');
        this.shareBtn = document.getElementById('share-btn');
        this.viewQuestionsBtn = document.getElementById('view-questions-btn');
        this.closeQuestionsBtn = document.getElementById('close-questions-btn');

        // 测试页面元素
        this.progressFill = document.getElementById('progress-fill');
        this.questionNumber = document.getElementById('question-number');
        this.totalQuestions = document.getElementById('total-questions');
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.querySelector('.options-container');

        // 题库页面元素
        this.questionsList = document.getElementById('questions-list');
        this.dimensionFilter = document.getElementById('dimension-filter');

        // 结果页面元素
        this.typeBadge = document.querySelector('.type-badge .type-code');
        this.typeName = document.getElementById('type-name');
        this.typeDescription = document.getElementById('type-description');

        // 设置总题数
        this.totalQuestions.textContent = questions.length;
    }

    bindEvents() {
        this.startBtn.addEventListener('click', () => this.startTest());
        this.prevBtn.addEventListener('click', () => this.prevQuestion());
        this.restartBtn.addEventListener('click', () => this.restartTest());
        this.shareBtn.addEventListener('click', () => this.shareResult());
        this.viewQuestionsBtn.addEventListener('click', () => this.showQuestionsPage());
        this.closeQuestionsBtn.addEventListener('click', () => this.closeQuestionsPage());
        this.dimensionFilter.addEventListener('change', () => this.filterQuestions());

        // 选项按钮事件
        this.optionsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('option-btn') || e.target.closest('.option-btn')) {
                const btn = e.target.classList.contains('option-btn') ? e.target : e.target.closest('.option-btn');
                this.selectOption(btn.dataset.value);
            }
        });

        // 键盘快捷键
        document.addEventListener('keydown', (e) => {
            if (this.testPage.classList.contains('active')) {
                if (e.key === '1' || e.key === 'a' || e.key === 'A') {
                    this.selectOption('A');
                } else if (e.key === '2' || e.key === 'b' || e.key === 'B') {
                    this.selectOption('B');
                } else if (e.key === 'ArrowLeft' && !this.prevBtn.disabled) {
                    this.prevQuestion();
                }
            }
        });
    }

    shuffleQuestions() {
        // 打乱题目顺序但保持维度平衡
        const shuffled = [];
        const dimensions = ['EI', 'SN', 'TF', 'JP'];

        dimensions.forEach(dim => {
            const dimQuestions = questions.filter(q => q.dimension === dim);
            this.shuffleArray(dimQuestions);
            shuffled.push(...dimQuestions);
        });

        this.shuffledQuestions = shuffled;
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    startTest() {
        this.startPage.classList.remove('active');
        this.testPage.classList.add('active');
        this.showQuestion();
    }

    showQuestion() {
        const question = this.shuffledQuestions[this.currentQuestion];

        // 更新进度
        const progress = ((this.currentQuestion) / questions.length) * 100;
        this.progressFill.style.width = `${progress}%`;
        this.questionNumber.textContent = this.currentQuestion + 1;

        // 更新题目
        this.questionText.textContent = question.text;

        // 更新选项 - 只显示两个选项（A或B）
        const options = this.optionsContainer.querySelectorAll('.option-btn');
        options.forEach((opt, index) => {
            opt.classList.remove('selected');
            const label = opt.querySelector('.option-label');

            if (index === 0) {
                // 第一个按钮显示选项A
                opt.style.display = 'block';
                opt.dataset.value = 'A';
                label.textContent = question.optionA;
            } else if (index === 1) {
                // 第二个按钮显示选项B
                opt.style.display = 'block';
                opt.dataset.value = 'B';
                label.textContent = question.optionB;
            } else {
                // 隐藏其他按钮
                opt.style.display = 'none';
            }
        });

        // 如果已有答案，显示选中状态
        if (this.answers[this.currentQuestion] !== undefined) {
            const selectedAnswer = this.answers[this.currentQuestion];
            const selectedIndex = selectedAnswer === 'A' ? 0 : 1;
            options[selectedIndex].classList.add('selected');
        }

        // 更新上一题按钮
        this.prevBtn.disabled = this.currentQuestion === 0;
    }

    selectOption(value) {
        // value现在是'A'或'B'
        // 记录答案
        this.answers[this.currentQuestion] = value;

        // 更新选中状态
        const options = this.optionsContainer.querySelectorAll('.option-btn');
        options.forEach(opt => opt.classList.remove('selected'));
        const selectedIndex = value === 'A' ? 0 : 1;
        options[selectedIndex].classList.add('selected');

        // 延迟后进入下一题
        setTimeout(() => {
            if (this.currentQuestion < questions.length - 1) {
                this.currentQuestion++;
                this.showQuestion();
            } else {
                this.showResult();
            }
        }, 300);
    }

    prevQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.showQuestion();
        }
    }

    calculateScores() {
        // 重置分数
        this.scores = { EI: 0, SN: 0, TF: 0, JP: 0 };

        // 计算每个维度的分数
        // 每个维度18题，选择A计+1分，选择B计-1分（如果reverse为false）
        // 如果reverse为true，则选择A计-1分，选择B计+1分
        this.shuffledQuestions.forEach((question, index) => {
            if (this.answers[index] === undefined) return;

            const answer = this.answers[index];
            const dimension = question.dimension;
            const score = (answer === 'A') ? 1 : -1;

            if (question.reverse) {
                this.scores[dimension] -= score;
            } else {
                this.scores[dimension] += score;
            }
        });
    }

    determineType() {
        let type = '';

        // E-I: 正分倾向E，负分倾向I
        type += this.scores.EI >= 0 ? 'E' : 'I';

        // S-N: 正分倾向S，负分倾向N
        type += this.scores.SN >= 0 ? 'S' : 'N';

        // T-F: 正分倾向T，负分倾向F
        type += this.scores.TF >= 0 ? 'T' : 'F';

        // J-P: 正分倾向J，负分倾向P
        type += this.scores.JP >= 0 ? 'J' : 'P';

        return type;
    }

    showResult() {
        this.testPage.classList.remove('active');
        this.resultPage.classList.add('active');

        this.calculateScores();
        const type = this.determineType();
        const typeInfo = personalityTypes[type];

        // 显示类型
        this.typeBadge.textContent = type;
        this.typeName.textContent = `${typeInfo.name} - ${typeInfo.nickname}`;
        this.typeDescription.textContent = typeInfo.description;

        // 显示维度条
        this.updateDimensionBars();
    }

    updateDimensionBars() {
        // 计算百分比
        // 每个维度18题，每题+1或-1分，所以总分范围是-18到+18
        const maxScore = 18;

        const ePercent = Math.round(50 + (this.scores.EI / maxScore) * 50);
        const iPercent = 100 - ePercent;

        const sPercent = Math.round(50 + (this.scores.SN / maxScore) * 50);
        const nPercent = 100 - sPercent;

        const tPercent = Math.round(50 + (this.scores.TF / maxScore) * 50);
        const fPercent = 100 - tPercent;

        const jPercent = Math.round(50 + (this.scores.JP / maxScore) * 50);
        const pPercent = 100 - jPercent;

        // 更新条形图
        document.getElementById('e-bar').style.width = `${ePercent}%`;
        document.getElementById('i-bar').style.width = `${iPercent}%`;
        document.getElementById('s-bar').style.width = `${sPercent}%`;
        document.getElementById('n-bar').style.width = `${nPercent}%`;
        document.getElementById('t-bar').style.width = `${tPercent}%`;
        document.getElementById('f-bar').style.width = `${fPercent}%`;
        document.getElementById('j-bar').style.width = `${jPercent}%`;
        document.getElementById('p-bar').style.width = `${pPercent}%`;

        // 更新百分比文字
        document.getElementById('e-percent').textContent = `${ePercent}%`;
        document.getElementById('i-percent').textContent = `${iPercent}%`;
        document.getElementById('s-percent').textContent = `${sPercent}%`;
        document.getElementById('n-percent').textContent = `${nPercent}%`;
        document.getElementById('t-percent').textContent = `${tPercent}%`;
        document.getElementById('f-percent').textContent = `${fPercent}%`;
        document.getElementById('j-percent').textContent = `${jPercent}%`;
        document.getElementById('p-percent').textContent = `${pPercent}%`;
    }

    restartTest() {
        this.currentQuestion = 0;
        this.answers = [];
        this.scores = { EI: 0, SN: 0, TF: 0, JP: 0 };

        this.shuffleQuestions();
        this.resultPage.classList.remove('active');
        this.startPage.classList.add('active');
    }

    shareResult() {
        const type = this.determineType();
        const typeInfo = personalityTypes[type];
        const text = `我的MBTI人格类型是 ${type} - ${typeInfo.name}（${typeInfo.nickname}）！快来测测你的人格类型吧！`;

        if (navigator.share) {
            navigator.share({
                title: 'MBTI人格测试结果',
                text: text,
                url: window.location.href
            });
        } else {
            // 复制到剪贴板
            navigator.clipboard.writeText(text).then(() => {
                this.showToast('结果已复制到剪贴板！');
            }).catch(() => {
                this.showToast('分享失败，请手动复制');
            });
        }
    }

    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    showQuestionsPage() {
        this.startPage.classList.remove('active');
        this.questionsPage.classList.add('active');
        this.displayQuestions('all');
    }

    closeQuestionsPage() {
        this.questionsPage.classList.remove('active');
        this.startPage.classList.add('active');
    }

    filterQuestions() {
        const dimension = this.dimensionFilter.value;
        this.displayQuestions(dimension);
    }

    displayQuestions(dimension) {
        let filteredQuestions = questions;

        if (dimension !== 'all') {
            filteredQuestions = questions.filter(q => q.dimension === dimension);
        }

        this.questionsList.innerHTML = filteredQuestions.map((q, index) => {
            const dimLabels = {
                'EI': 'E-I (外向-内向)',
                'SN': 'S-N (实感-直觉)',
                'TF': 'T-F (思考-情感)',
                'JP': 'J-P (判断-感知)'
            };

            return `
                <div class="question-item">
                    <div class="question-number-badge">#${index + 1}</div>
                    <div class="question-dimension">${dimLabels[q.dimension]}</div>
                    <div class="question-text-preview">${q.text}</div>
                    <div class="question-options-preview">
                        <div class="option-preview">
                            <span class="option-letter">A:</span>
                            <span class="option-text">${q.optionA}</span>
                            <span class="option-indicator">(${q.reverse ? '倾向第二字母' : '倾向第一字母'})</span>
                        </div>
                        <div class="option-preview">
                            <span class="option-letter">B:</span>
                            <span class="option-text">${q.optionB}</span>
                            <span class="option-indicator">(${q.reverse ? '倾向第一字母' : '倾向第二字母'})</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    new MBTITest();
});
