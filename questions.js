// MBTI 测试题库
// 每个问题对应一个维度: E-I, S-N, T-F, J-P
// 正向题目: 高分倾向于第一个选项
// 反向题目: 高分倾向于第二个选项

const questions = [
    // E-I 维度 (外向-内向)
    {
        text: "在社交聚会中，你通常会主动结识新朋友。",
        dimension: "EI",
        reverse: false
    },
    {
        text: "独处时，你通常感到精力充沛而非消耗。",
        dimension: "EI",
        reverse: true
    },
    {
        text: "你更喜欢与一大群朋友相处，而不是几个亲密的朋友。",
        dimension: "EI",
        reverse: false
    },
    {
        text: "你倾向于三思而后行，而不是立即行动。",
        dimension: "EI",
        reverse: true
    },
    {
        text: "在人群中，你经常成为注意的焦点。",
        dimension: "EI",
        reverse: false
    },
    {
        text: "你更喜欢独自工作，而不是在团队中工作。",
        dimension: "EI",
        reverse: true
    },
    {
        text: "你是个很健谈的人。",
        dimension: "EI",
        reverse: false
    },
    {
        text: "你认为花时间独自思考比与人交流更有价值。",
        dimension: "EI",
        reverse: true
    },
    {
        text: "你喜欢参加大型社交活动。",
        dimension: "EI",
        reverse: false
    },
    {
        text: "你更喜欢安静的环境而不是热闹的场合。",
        dimension: "EI",
        reverse: true
    },
    {
        text: "你很容易与陌生人交谈。",
        dimension: "EI",
        reverse: false
    },
    {
        text: "社交活动后，你通常需要独处时间来恢复精力。",
        dimension: "EI",
        reverse: true
    },
    {
        text: "你喜欢成为团队活动的组织者。",
        dimension: "EI",
        reverse: false
    },
    {
        text: "你更喜欢深度的一对一对话而非群体讨论。",
        dimension: "EI",
        reverse: true
    },
    {
        text: "你倾向于把想法说出来，而不是在心里默默思考。",
        dimension: "EI",
        reverse: false
    },

    // S-N 维度 (实感-直觉)
    {
        text: "你更关注当前的现实，而不是未来的可能性。",
        dimension: "SN",
        reverse: false
    },
    {
        text: "你经常思考抽象的概念和理论。",
        dimension: "SN",
        reverse: true
    },
    {
        text: "你更注重事实和细节，而不是整体印象。",
        dimension: "SN",
        reverse: false
    },
    {
        text: "你喜欢探索新的想法和可能性。",
        dimension: "SN",
        reverse: true
    },
    {
        text: "你更信任经验而非直觉。",
        dimension: "SN",
        reverse: false
    },
    {
        text: "你对新奇的概念和想法很感兴趣。",
        dimension: "SN",
        reverse: true
    },
    {
        text: "你更关注具体细节而非整体图案。",
        dimension: "SN",
        reverse: false
    },
    {
        text: "你经常想象事情可能会怎样发展，而不是实际怎样。",
        dimension: "SN",
        reverse: true
    },
    {
        text: "你更喜欢处理实际、具体的问题。",
        dimension: "SN",
        reverse: false
    },
    {
        text: "你总是能看到事物之间的隐藏联系。",
        dimension: "SN",
        reverse: true
    },
    {
        text: "你更关心眼前能触摸到的事物。",
        dimension: "SN",
        reverse: false
    },
    {
        text: "你经常思考事物的深层含义和象征。",
        dimension: "SN",
        reverse: true
    },
    {
        text: "你更相信可以测量和证明的事物。",
        dimension: "SN",
        reverse: false
    },
    {
        text: "你喜欢讨论抽象的理念和理论。",
        dimension: "SN",
        reverse: true
    },
    {
        text: "你习惯通过具体实例来理解事物。",
        dimension: "SN",
        reverse: false
    },

    // T-F 维度 (思考-情感)
    {
        text: "做决定时，你更依赖逻辑分析而非个人感受。",
        dimension: "TF",
        reverse: false
    },
    {
        text: "你认为对他人的同情比公正更重要。",
        dimension: "TF",
        reverse: true
    },
    {
        text: "你认为公正比仁慈更重要。",
        dimension: "TF",
        reverse: false
    },
    {
        text: "你很容易感受到他人的情绪。",
        dimension: "TF",
        reverse: true
    },
    {
        text: "在做重要决定时，你会优先考虑客观标准。",
        dimension: "TF",
        reverse: false
    },
    {
        text: "你更看重人际关系和谐而非客观事实。",
        dimension: "TF",
        reverse: true
    },
    {
        text: "你更看重公平而非和谐。",
        dimension: "TF",
        reverse: false
    },
    {
        text: "你认为理解他人的感受比逻辑正确更重要。",
        dimension: "TF",
        reverse: true
    },
    {
        text: "即使伤害他人感情，你也会说出真相。",
        dimension: "TF",
        reverse: false
    },
    {
        text: "你倾向于让步以维护人际关系。",
        dimension: "TF",
        reverse: true
    },
    {
        text: "批评时，你更注重事实而非对方感受。",
        dimension: "TF",
        reverse: false
    },
    {
        text: "你很容易理解为什么有人会做出不理性的决定。",
        dimension: "TF",
        reverse: true
    },
    {
        text: "你认为逻辑一致性比人情更重要。",
        dimension: "TF",
        reverse: false
    },
    {
        text: "你做决定时会考虑对他人的影响。",
        dimension: "TF",
        reverse: true
    },
    {
        text: "你更看重客观事实而非主观感受。",
        dimension: "TF",
        reverse: false
    },

    // J-P 维度 (判断-感知)
    {
        text: "你更喜欢有计划的生活方式，而不是随遇而安。",
        dimension: "JP",
        reverse: false
    },
    {
        text: "你喜欢灵活安排时间，而不是严格按照计划行事。",
        dimension: "JP",
        reverse: true
    },
    {
        text: "你习惯提前完成任务，而不是等到最后期限。",
        dimension: "JP",
        reverse: false
    },
    {
        text: "你喜欢保持选项开放，而不是过早做决定。",
        dimension: "JP",
        reverse: true
    },
    {
        text: "你喜欢把事情安排妥当，而不是即兴发挥。",
        dimension: "JP",
        reverse: false
    },
    {
        text: "你更喜欢探索多种可能性，而不是做出明确选择。",
        dimension: "JP",
        reverse: true
    },
    {
        text: "你不喜欢计划被打乱。",
        dimension: "JP",
        reverse: false
    },
    {
        text: "你很容易适应新情况和变化。",
        dimension: "JP",
        reverse: true
    },
    {
        text: "你更喜欢有明确目标的项目，而不是开放式的项目。",
        dimension: "JP",
        reverse: false
    },
    {
        text: "你倾向于在最后时刻完成工作。",
        dimension: "JP",
        reverse: true
    },
    {
        text: "你会制定详细的日程安排。",
        dimension: "JP",
        reverse: false
    },
    {
        text: "你享受即兴和意外的经历。",
        dimension: "JP",
        reverse: true
    },
    {
        text: "完成任务后你才能放松。",
        dimension: "JP",
        reverse: false
    },
    {
        text: "你更享受过程而非结果。",
        dimension: "JP",
        reverse: true
    },
    {
        text: "你喜欢将物品放在固定位置。",
        dimension: "JP",
        reverse: false
    }
];

// 16种人格类型描述
const personalityTypes = {
    "INTJ": {
        name: "建筑师",
        nickname: "战略家",
        description: "INTJ是天生的战略家，拥有独特的视角和强烈的内在驱动力。他们善于规划未来，追求高效和完美。他们思维独立，富有创造力，喜欢深入研究复杂问题。虽然外表冷静理性，但内心有着坚定的信念和目标。"
    },
    "INTP": {
        name: "逻辑学家",
        nickname: "思考者",
        description: "INTP是天生的思考者，对分析和理解复杂系统充满热情。他们拥有丰富的内心世界，喜欢探索抽象概念和理论。他们追求知识和真理，经常质疑既定观念。虽然有时显得疏离，但他们的思维独特而深刻。"
    },
    "ENTJ": {
        name: "指挥官",
        nickname: "领导者",
        description: "ENTJ是天生的领导者，具有强烈的意志和清晰的战略眼光。他们善于组织资源，推动计划实施，追求效率和成就。他们自信果断，能够激励团队达成目标。虽然有时显得强势，但他们的决策往往经过深思熟虑。"
    },
    "ENTP": {
        name: "辩论家",
        nickname: "创新者",
        description: "ENTP是天生的创新者，喜欢挑战传统和探索新可能。他们思维敏捷，善于发现问题的不同角度。他们享受智力辩论，追求新奇和变化。虽然有时显得叛逆，但他们的创意和热情能够带来突破性的解决方案。"
    },
    "INFJ": {
        name: "提倡者",
        nickname: "理想主义者",
        description: "INFJ是坚定的理想主义者，追求有意义的人际关系和事业。他们洞察力强，能够理解他人的深层需求和动机。他们富有同情心，致力于帮助他人成长。虽然外表安静，但内心有着强烈的价值观和使命感。"
    },
    "INFP": {
        name: "调停者",
        nickname: "治愈者",
        description: "INFP是敏感的理想主义者，追求真实和美好。他们内心世界丰富，有着强烈的价值观和创造力。他们善于理解他人的感受，追求和谐的人际关系。虽然有时显得梦幻，但他们的真诚和深度能够触动人心。"
    },
    "ENFJ": {
        name: "主人公",
        nickname: "教育者",
        description: "ENFJ是富有魅力的领导者，善于激励和引导他人。他们真诚关心他人的成长，具有强烈的责任感和同理心。他们善于沟通，能够建立和谐的人际关系。虽然有时过于在意他人看法，但他们的热情和奉献精神令人敬佩。"
    },
    "ENFP": {
        name: "竞选者",
        nickname: "激励者",
        description: "ENFP是充满热情的创意者，追求有意义的人生体验。他们思维开放，善于发现新的可能性。他们感染力强，能够激励他人追求梦想。虽然有时难以专注，但他们的热情和创造力能够带来积极的变化。"
    },
    "ISTJ": {
        name: "物流师",
        nickname: "检查员",
        description: "ISTJ是可靠务实的执行者，重视责任和承诺。他们注重事实和细节，工作认真负责。他们遵循传统和规则，追求稳定和秩序。虽然有时显得保守，但他们的可靠和诚信是团队的重要支柱。"
    },
    "ISFJ": {
        name: "守卫者",
        nickname: "保护者",
        description: "ISFJ是温暖可靠的守护者，善于照顾他人的需要。他们注重细节，工作勤奋负责。他们重视传统和谐，致力于维护稳定的环境。虽然有时过于牺牲自己，但他们的善良和奉献值得珍惜。"
    },
    "ESTJ": {
        name: "总经理",
        nickname: "监督者",
        description: "ESTJ是高效的管理者，善于组织和管理资源。他们重视秩序和效率，追求明确的目标。他们责任心强，能够带领团队达成成果。虽然有时显得严格，但他们的执行力和组织能力是成功的关键。"
    },
    "ESFJ": {
        name: "执政官",
        nickname: "帮助者",
        description: "ESFJ是热心肠的社交者，善于建立和谐的人际关系。他们关心他人需求，乐于提供帮助。他们重视社会规范和传统，追求群体和谐。虽然有时过于在意他人评价，但他们的温暖和奉献精神令人感动。"
    },
    "ISTP": {
        name: "鉴赏家",
        nickname: "工匠",
        description: "ISTP是冷静的实干家，善于分析和解决技术问题。他们动手能力强，喜欢探索事物的运作方式。他们适应性强，能够在危机中保持冷静。虽然有时显得独立疏离，但他们的实用技能和冷静分析非常有价值。"
    },
    "ISFP": {
        name: "探险家",
        nickname: "艺术家",
        description: "ISFP是温和的艺术家，追求美和个性化的表达。他们内心敏感，善于体验和创造美。他们重视个人自由，喜欢按自己的方式生活。虽然有时显得安静，但他们的创意和真诚令人印象深刻。"
    },
    "ESTP": {
        name: "企业家",
        nickname: "说服者",
        description: "ESTP是充满活力的行动派，享受当下和冒险。他们观察力强，善于把握机会。他们适应性好，能够在动态环境中快速反应。虽然有时显得冲动，但他们的勇气和活力能够带来意想不到的成果。"
    },
    "ESFP": {
        name: "表演者",
        nickname: "娱乐者",
        description: "ESFP是热情的娱乐者，善于为生活带来欢乐。他们喜欢与人交往，享受当下的快乐。他们观察力强，能够注意到他人的需求。虽然有时过于追求即时满足，但他们的热情和活力感染着身边的每个人。"
    }
};
