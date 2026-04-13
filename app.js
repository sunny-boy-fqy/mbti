// MBTI 测试应用主逻辑
class MBTITest {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.scores = { EI: 0, SN: 0, TF: 0, JP: 0 };
        this.currentType = null;
        this.questionOrder = [];
        this.language = this.getInitialLanguage();

        this.initElements();
        this.bindEvents();
        this.applyLanguage();
        this.shuffleQuestions();
    }

    initElements() {
        // 页面
        this.startPage = document.getElementById("start-page");
        this.testPage = document.getElementById("test-page");
        this.resultPage = document.getElementById("result-page");
        this.questionsPage = document.getElementById("questions-page");

        // 工具栏
        this.langLabel = document.getElementById("lang-label");
        this.langSelect = document.getElementById("lang-select");

        // 开始页文案
        this.appTitle = document.getElementById("app-title");
        this.appSubtitle = document.getElementById("app-subtitle");
        this.cardTimeText = document.getElementById("card-time-text");
        this.cardQuestionsText = document.getElementById("card-questions-text");
        this.cardTypesText = document.getElementById("card-types-text");
        this.appDisclaimer = document.getElementById("app-disclaimer");

        // 按钮
        this.startBtn = document.getElementById("start-btn");
        this.prevBtn = document.getElementById("prev-btn");
        this.restartBtn = document.getElementById("restart-btn");
        this.shareBtn = document.getElementById("share-btn");
        this.viewQuestionsBtn = document.getElementById("view-questions-btn");
        this.closeQuestionsBtn = document.getElementById("close-questions-btn");

        // 测试页面元素
        this.progressFill = document.getElementById("progress-fill");
        this.questionNumber = document.getElementById("question-number");
        this.totalQuestions = document.getElementById("total-questions");
        this.questionText = document.getElementById("question-text");
        this.optionsContainer = document.querySelector(".options-container");

        // 题库页面元素
        this.questionsTitle = document.getElementById("questions-title");
        this.filterLabel = document.getElementById("filter-label-text");
        this.questionsList = document.getElementById("questions-list");
        this.dimensionFilter = document.getElementById("dimension-filter");
        this.filterOptionAll = document.getElementById("filter-option-all");
        this.filterOptionEI = document.getElementById("filter-option-ei");
        this.filterOptionSN = document.getElementById("filter-option-sn");
        this.filterOptionTF = document.getElementById("filter-option-tf");
        this.filterOptionJP = document.getElementById("filter-option-jp");

        // 结果页面元素
        this.resultTitle = document.getElementById("result-title");
        this.resultSubtitle = document.getElementById("result-subtitle");
        this.typeBadge = document.querySelector(".type-badge .type-code");
        this.typeName = document.getElementById("type-name");
        this.typeDescription = document.getElementById("type-description");

        // 结果维度标签
        this.labelELeft = document.getElementById("label-e-left");
        this.labelERight = document.getElementById("label-e-right");
        this.labelSLeft = document.getElementById("label-s-left");
        this.labelSRight = document.getElementById("label-s-right");
        this.labelTLeft = document.getElementById("label-t-left");
        this.labelTRight = document.getElementById("label-t-right");
        this.labelJLeft = document.getElementById("label-j-left");
        this.labelJRight = document.getElementById("label-j-right");
    }

    bindEvents() {
        this.langSelect.addEventListener("change", (e) => this.setLanguage(e.target.value));
        this.startBtn.addEventListener("click", () => this.startTest());
        this.prevBtn.addEventListener("click", () => this.prevQuestion());
        this.restartBtn.addEventListener("click", () => this.restartTest());
        this.shareBtn.addEventListener("click", () => this.shareResult());
        this.viewQuestionsBtn.addEventListener("click", () => this.showQuestionsPage());
        this.closeQuestionsBtn.addEventListener("click", () => this.closeQuestionsPage());
        this.dimensionFilter.addEventListener("change", () => this.filterQuestions());

        // 选项按钮事件
        this.optionsContainer.addEventListener("click", (e) => {
            if (e.target.classList.contains("option-btn") || e.target.closest(".option-btn")) {
                const btn = e.target.classList.contains("option-btn") ? e.target : e.target.closest(".option-btn");
                this.selectOption(btn.dataset.value);
            }
        });

        // 键盘快捷键
        document.addEventListener("keydown", (e) => {
            if (this.testPage.classList.contains("active")) {
                if (e.key === "1" || e.key === "a" || e.key === "A") {
                    this.selectOption("A");
                } else if (e.key === "2" || e.key === "b" || e.key === "B") {
                    this.selectOption("B");
                } else if (e.key === "ArrowLeft" && !this.prevBtn.disabled) {
                    this.prevQuestion();
                }
            }
        });
    }

    getInitialLanguage() {
        const saved = localStorage.getItem("mbti-language");
        if (saved === "zh" || saved === "en") {
            return saved;
        }
        return (navigator.language || "").toLowerCase().startsWith("zh") ? "zh" : "en";
    }

    setLanguage(language) {
        if (!uiTexts[language]) {
            return;
        }
        this.language = language;
        localStorage.setItem("mbti-language", language);
        this.applyLanguage();

        if (this.testPage.classList.contains("active")) {
            this.showQuestion();
        } else if (this.questionsPage.classList.contains("active")) {
            this.displayQuestions(this.dimensionFilter.value);
        } else if (this.resultPage.classList.contains("active")) {
            this.renderResult();
        }
    }

    applyLanguage() {
        const t = uiTexts[this.language];

        document.documentElement.lang = this.language === "zh" ? "zh-CN" : "en";
        document.title = t.pageTitle;
        this.langLabel.textContent = t.languageLabel;
        this.langSelect.value = this.language;

        this.appTitle.textContent = t.appTitle;
        this.appSubtitle.textContent = t.subtitle;
        this.cardTimeText.textContent = t.infoTime;
        this.cardQuestionsText.textContent = t.questionCount(questions.length);
        this.cardTypesText.textContent = t.infoTypes;
        this.appDisclaimer.textContent = t.disclaimer;

        this.startBtn.textContent = t.startTest;
        this.viewQuestionsBtn.textContent = t.viewQuestionBank;
        this.prevBtn.textContent = t.prev;
        this.questionsTitle.textContent = t.questionBankTitle;
        this.closeQuestionsBtn.textContent = t.back;
        this.filterLabel.textContent = t.filterLabel;
        this.filterOptionAll.textContent = t.filterAll;
        this.filterOptionEI.textContent = t.dimensions.EI;
        this.filterOptionSN.textContent = t.dimensions.SN;
        this.filterOptionTF.textContent = t.dimensions.TF;
        this.filterOptionJP.textContent = t.dimensions.JP;

        this.resultTitle.textContent = t.resultTitle;
        this.resultSubtitle.textContent = t.resultSubtitle;
        this.labelELeft.textContent = t.resultLabels.eLeft;
        this.labelERight.textContent = t.resultLabels.eRight;
        this.labelSLeft.textContent = t.resultLabels.sLeft;
        this.labelSRight.textContent = t.resultLabels.sRight;
        this.labelTLeft.textContent = t.resultLabels.tLeft;
        this.labelTRight.textContent = t.resultLabels.tRight;
        this.labelJLeft.textContent = t.resultLabels.jLeft;
        this.labelJRight.textContent = t.resultLabels.jRight;

        this.shareBtn.textContent = t.shareResult;
        this.restartBtn.textContent = t.restartTest;
        this.totalQuestions.textContent = questions.length;
    }

    getQuestionSet() {
        return this.language === "en" ? questionsEn : questions;
    }

    getTypeSet() {
        return this.language === "en" ? personalityTypesEn : personalityTypes;
    }

    shuffleQuestions() {
        // 使用题目索引进行混排，保持四维度尽量交替出现
        const dimensions = ["EI", "SN", "TF", "JP"];
        const indexesByDim = {};

        dimensions.forEach((dim) => {
            indexesByDim[dim] = questions
                .map((q, i) => ({ q, i }))
                .filter(({ q }) => q.dimension === dim)
                .map(({ i }) => i);
            this.shuffleArray(indexesByDim[dim]);
        });

        const order = [];
        while (dimensions.some((dim) => indexesByDim[dim].length > 0)) {
            const available = dimensions.filter((dim) => indexesByDim[dim].length > 0);
            this.shuffleArray(available);
            available.forEach((dim) => {
                order.push(indexesByDim[dim].pop());
            });
        }

        this.questionOrder = order;
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    getQuestionByPosition(position) {
        const questionSet = this.getQuestionSet();
        const questionIndex = this.questionOrder[position];
        return questionSet[questionIndex];
    }

    getQuestionMetaByPosition(position) {
        const questionIndex = this.questionOrder[position];
        return questions[questionIndex];
    }

    startTest() {
        this.startPage.classList.remove("active");
        this.testPage.classList.add("active");
        this.showQuestion();
    }

    showQuestion() {
        const question = this.getQuestionByPosition(this.currentQuestion);

        // 更新进度
        const progress = (this.currentQuestion / questions.length) * 100;
        this.progressFill.style.width = `${progress}%`;
        this.questionNumber.textContent = this.currentQuestion + 1;

        // 更新题目
        this.questionText.textContent = question.text;

        // 更新选项
        const options = this.optionsContainer.querySelectorAll(".option-btn");
        options.forEach((opt, index) => {
            opt.classList.remove("selected");
            const label = opt.querySelector(".option-label");

            if (index === 0) {
                opt.style.display = "block";
                opt.dataset.value = "A";
                label.textContent = question.optionA;
            } else if (index === 1) {
                opt.style.display = "block";
                opt.dataset.value = "B";
                label.textContent = question.optionB;
            } else {
                opt.style.display = "none";
            }
        });

        // 如果已有答案，显示选中状态
        if (this.answers[this.currentQuestion] !== undefined) {
            const selectedAnswer = this.answers[this.currentQuestion];
            const selectedIndex = selectedAnswer === "A" ? 0 : 1;
            options[selectedIndex].classList.add("selected");
        }

        this.prevBtn.disabled = this.currentQuestion === 0;
    }

    selectOption(value) {
        this.answers[this.currentQuestion] = value;

        const options = this.optionsContainer.querySelectorAll(".option-btn");
        options.forEach((opt) => opt.classList.remove("selected"));
        const selectedIndex = value === "A" ? 0 : 1;
        options[selectedIndex].classList.add("selected");

        setTimeout(() => {
            if (this.currentQuestion < questions.length - 1) {
                this.currentQuestion += 1;
                this.showQuestion();
            } else {
                this.showResult();
            }
        }, 300);
    }

    prevQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion -= 1;
            this.showQuestion();
        }
    }

    calculateScores() {
        this.scores = { EI: 0, SN: 0, TF: 0, JP: 0 };

        this.questionOrder.forEach((questionIndex, index) => {
            if (this.answers[index] === undefined) {
                return;
            }

            const answer = this.answers[index];
            const meta = questions[questionIndex];
            const score = answer === "A" ? 1 : -1;

            if (meta.reverse) {
                this.scores[meta.dimension] -= score;
            } else {
                this.scores[meta.dimension] += score;
            }
        });
    }

    determineType() {
        let type = "";
        type += this.scores.EI >= 0 ? "E" : "I";
        type += this.scores.SN >= 0 ? "S" : "N";
        type += this.scores.TF >= 0 ? "T" : "F";
        type += this.scores.JP >= 0 ? "J" : "P";
        return type;
    }

    showResult() {
        this.testPage.classList.remove("active");
        this.resultPage.classList.add("active");

        this.calculateScores();
        this.currentType = this.determineType();
        this.renderResult();
    }

    renderResult() {
        const types = this.getTypeSet();
        const type = this.currentType || this.determineType();
        const typeInfo = types[type] || personalityTypes[type];

        this.typeBadge.textContent = type;
        this.typeName.textContent = `${typeInfo.name} - ${typeInfo.nickname}`;
        this.typeDescription.textContent = typeInfo.description;

        this.updateDimensionBars();
    }

    toPercent(score, maxScore) {
        const value = Math.round(50 + (score / maxScore) * 50);
        return Math.max(0, Math.min(100, value));
    }

    updateDimensionBars() {
        // 每个维度 26 题，每题 +1 或 -1，总分范围 -26 到 +26
        const maxScore = questions.length / 4;

        const ePercent = this.toPercent(this.scores.EI, maxScore);
        const iPercent = 100 - ePercent;

        const sPercent = this.toPercent(this.scores.SN, maxScore);
        const nPercent = 100 - sPercent;

        const tPercent = this.toPercent(this.scores.TF, maxScore);
        const fPercent = 100 - tPercent;

        const jPercent = this.toPercent(this.scores.JP, maxScore);
        const pPercent = 100 - jPercent;

        document.getElementById("e-bar").style.width = `${ePercent}%`;
        document.getElementById("i-bar").style.width = `${iPercent}%`;
        document.getElementById("s-bar").style.width = `${sPercent}%`;
        document.getElementById("n-bar").style.width = `${nPercent}%`;
        document.getElementById("t-bar").style.width = `${tPercent}%`;
        document.getElementById("f-bar").style.width = `${fPercent}%`;
        document.getElementById("j-bar").style.width = `${jPercent}%`;
        document.getElementById("p-bar").style.width = `${pPercent}%`;

        document.getElementById("e-percent").textContent = `${ePercent}%`;
        document.getElementById("i-percent").textContent = `${iPercent}%`;
        document.getElementById("s-percent").textContent = `${sPercent}%`;
        document.getElementById("n-percent").textContent = `${nPercent}%`;
        document.getElementById("t-percent").textContent = `${tPercent}%`;
        document.getElementById("f-percent").textContent = `${fPercent}%`;
        document.getElementById("j-percent").textContent = `${jPercent}%`;
        document.getElementById("p-percent").textContent = `${pPercent}%`;
    }

    restartTest() {
        this.currentQuestion = 0;
        this.answers = [];
        this.scores = { EI: 0, SN: 0, TF: 0, JP: 0 };
        this.currentType = null;

        this.shuffleQuestions();
        this.resultPage.classList.remove("active");
        this.startPage.classList.add("active");
    }

    shareResult() {
        const type = this.currentType || this.determineType();
        const typeSet = this.getTypeSet();
        const typeInfo = typeSet[type] || personalityTypes[type];
        const t = uiTexts[this.language];
        const text = t.shareText(type, typeInfo);

        if (navigator.share) {
            navigator.share({
                title: t.shareTitle,
                text,
                url: window.location.href
            }).catch(() => {
                this.copyResultText(text);
            });
        } else {
            this.copyResultText(text);
        }
    }

    copyResultText(text) {
        const t = uiTexts[this.language];
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(() => {
                this.showToast(t.toastCopied);
            }).catch(() => {
                this.showToast(t.toastShareFailed);
            });
            return;
        }

        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();

        try {
            document.execCommand("copy");
            this.showToast(t.toastCopied);
        } catch (e) {
            this.showToast(t.toastShareFailed);
        }

        document.body.removeChild(textarea);
    }

    showToast(message) {
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    showQuestionsPage() {
        this.startPage.classList.remove("active");
        this.questionsPage.classList.add("active");
        this.displayQuestions("all");
    }

    closeQuestionsPage() {
        this.questionsPage.classList.remove("active");
        this.startPage.classList.add("active");
    }

    filterQuestions() {
        this.displayQuestions(this.dimensionFilter.value);
    }

    escapeHtml(text) {
        return text
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll("\"", "&quot;")
            .replaceAll("'", "&#39;");
    }

    displayQuestions(dimension) {
        const t = uiTexts[this.language];
        const questionSet = this.getQuestionSet();
        const allIndexes = questions.map((_, i) => i);
        const filteredIndexes = dimension === "all"
            ? allIndexes
            : allIndexes.filter((index) => questions[index].dimension === dimension);

        this.questionsList.innerHTML = filteredIndexes.map((questionIndex) => {
            const q = questionSet[questionIndex];
            const meta = questions[questionIndex];
            const aIndicator = meta.reverse ? t.optionIndicatorSecond : t.optionIndicatorFirst;
            const bIndicator = meta.reverse ? t.optionIndicatorFirst : t.optionIndicatorSecond;

            return `
                <div class="question-item">
                    <div class="question-number-badge">#${questionIndex + 1}</div>
                    <div class="question-dimension">${this.escapeHtml(t.dimensions[meta.dimension])}</div>
                    <div class="question-text-preview">${this.escapeHtml(q.text)}</div>
                    <div class="question-options-preview">
                        <div class="option-preview">
                            <span class="option-letter">A:</span>
                            <span class="option-text">${this.escapeHtml(q.optionA)}</span>
                            <span class="option-indicator">(${this.escapeHtml(aIndicator)})</span>
                        </div>
                        <div class="option-preview">
                            <span class="option-letter">B:</span>
                            <span class="option-text">${this.escapeHtml(q.optionB)}</span>
                            <span class="option-indicator">(${this.escapeHtml(bIndicator)})</span>
                        </div>
                    </div>
                </div>
            `;
        }).join("");
    }
}

// 初始化应用
document.addEventListener("DOMContentLoaded", () => {
    new MBTITest();
});
