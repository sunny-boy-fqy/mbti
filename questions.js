// MBTI 测试题库
// 每个问题对应一个维度: E-I, S-N, T-F, J-P
// 格式: { text, dimension, optionA, optionB, reverse }
// reverse: false表示选A倾向第一个字母，true表示选A倾向第二个字母

const questions = [
    // E-I 维度 (外向-内向) - 共18题
    {
        text: "我倾向从何处得到力量?",
        dimension: "EI",
        optionA: "别人",
        optionB: "我自己的想法",
        reverse: false
    },
    {
        text: "当我参加一个社交聚会时，我倾向有更多的力气：",
        dimension: "EI",
        optionA: "在夜色很深时，一旦我开始投入，也许就是最晚离开的那一个",
        optionB: "在夜晚开始的时候，我就疲倦了并且想回家",
        reverse: false
    },
    {
        text: "下列哪一种听起来比较吸引你？",
        dimension: "EI",
        optionA: "与情人到有很多人且社交活动频繁的地方",
        optionB: "待在家中与情人做一些特别的事情，例如观赏一部有趣的录像带并享用最爱的外带食物",
        reverse: false
    },
    {
        text: "在约会中，我通常：",
        dimension: "EI",
        optionA: "整体来说蛮健谈的",
        optionB: "较安静并保留，直到我觉得舒服",
        reverse: false
    },
    {
        text: "我倾向拥有：",
        dimension: "EI",
        optionA: "很多认识的人和很亲密的朋友",
        optionB: "一些很亲密的朋友和一些认识的人",
        reverse: false
    },
    {
        text: "过去，我爱过的人倾向对我说：",
        dimension: "EI",
        optionA: "你难道不可以安静一点吗？",
        optionB: "可以请你从你的世界中出来一下吗？",
        reverse: false
    },
    {
        text: "你通常：",
        dimension: "EI",
        optionA: "与人容易混熟",
        optionB: "比较沉静或矜持",
        reverse: false
    },
    {
        text: "你是否：",
        dimension: "EI",
        optionA: "容易让人了解",
        optionB: "难于让人了解",
        reverse: false
    },
    {
        text: "在大群人当中，通常是：",
        dimension: "EI",
        optionA: "你介绍大家认识",
        optionB: "别人介绍你",
        reverse: false
    },
    {
        text: "你社交聚会中：",
        dimension: "EI",
        optionA: "有时感到郁闷",
        optionB: "常常乐在其中",
        reverse: true
    },
    {
        text: "你通常：",
        dimension: "EI",
        optionA: "和别人容易混熟",
        optionB: "趋向自处一隅",
        reverse: false
    },
    {
        text: "你认为别人一般：",
        dimension: "EI",
        optionA: "要花很长时间才认识你",
        optionB: "用很短的时间便认识你",
        reverse: true
    },
    {
        text: "在社交场合中，你经常会感到：",
        dimension: "EI",
        optionA: "与某些人很难打开话匣儿和保持对话",
        optionB: "与多数人都能从容地长谈",
        reverse: true
    },
    {
        text: "你刚认识的朋友能否说出你的兴趣：",
        dimension: "EI",
        optionA: "马上可以",
        optionB: "要待他们真正了解你之后才可以",
        reverse: false
    },
    {
        text: "你能否滔滔不绝地与人聊天：",
        dimension: "EI",
        optionA: "只限于跟你有共同兴趣的人",
        optionB: "几乎跟任何人都可以",
        reverse: true
    },
    {
        text: "你是否可以和任何人按需求从容地交谈：",
        dimension: "EI",
        optionA: "可以和任何人按需求从容地交谈",
        optionB: "只是对某些人或在某种情况下才可以畅所欲言",
        reverse: false
    },
    {
        text: "和一群人在一起，你通常会选：",
        dimension: "EI",
        optionA: "跟你很熟悉的个别人谈话",
        optionB: "参与大伙的谈话",
        reverse: true
    },
    {
        text: "在社交聚会上，你会：",
        dimension: "EI",
        optionA: "是说话很多的一个",
        optionB: "让别人多说话",
        reverse: false
    },

    // S-N 维度 (实感-直觉) - 共18题
    {
        text: "我倾向透过以下方式收集信息：",
        dimension: "SN",
        optionA: "我对有可能发生之事的想象和期望",
        optionB: "我对目前状况实际认知",
        reverse: false
    },
    {
        text: "我倾向相信：",
        dimension: "SN",
        optionA: "我的直觉",
        optionB: "我直接的观察和现成的经验",
        reverse: false
    },
    {
        text: "当我置身于一段关系中时，我倾向相信：",
        dimension: "SN",
        optionA: "永远有进步的空间",
        optionB: "若它没有被破坏，别修补它",
        reverse: false
    },
    {
        text: "当我对一个约会觉得放心时，我倾向谈论：",
        dimension: "SN",
        optionA: "未来，关于改进或发明事物，和生活的种种可能性",
        optionB: "实际的，具体的，关于「此时此地」的事物",
        reverse: false
    },
    {
        text: "我是这种人：",
        dimension: "SN",
        optionA: "喜欢先看整个大局面",
        optionB: "喜欢先掌握细节",
        reverse: false
    },
    {
        text: "我是这种型的人：",
        dimension: "SN",
        optionA: "与其活在现实中，我选择活在我的想象里",
        optionB: "与其活在我的想象里，我选择活在现实中",
        reverse: false
    },
    {
        text: "假如你是一位老师，你会选教：",
        dimension: "SN",
        optionA: "以事实为主的课程",
        optionB: "涉及理论的课程",
        reverse: true
    },
    {
        text: "一般来说，你和哪些人比较合得来：",
        dimension: "SN",
        optionA: "富于想象力的人",
        optionB: "现实的人",
        reverse: false
    },
    {
        text: "你宁愿被人认为是一个：",
        dimension: "SN",
        optionA: "实事求是的人",
        optionB: "机灵的人",
        reverse: true
    },
    {
        text: "你会跟哪些人做朋友：",
        dimension: "SN",
        optionA: "常提出新主意的",
        optionB: "脚踏实地的",
        reverse: false
    },
    {
        text: "要做许多人也做的事，你比较喜欢：",
        dimension: "SN",
        optionA: "按照一般认可的方法去做",
        optionB: "构想一个自己的想法",
        reverse: true
    },
    {
        text: "你通常较喜欢的科目是：",
        dimension: "SN",
        optionA: "讲授概念和原则的",
        optionB: "讲授事实和数据的",
        reverse: false
    },
    {
        text: "为乐趣而阅读时，你会：",
        dimension: "SN",
        optionA: "喜欢奇特或创新的表达方式",
        optionB: "喜欢作者直话直说",
        reverse: false
    },
    {
        text: "你宁愿替哪一类上司（或者老师）工作：",
        dimension: "SN",
        optionA: "天性淳良，但常常前后不一的",
        optionB: "言词尖锐但永远合乎逻辑的",
        reverse: true
    },
    {
        text: "你会：",
        dimension: "SN",
        optionA: "跟随一些证明有效的方法",
        optionB: "分析还有什么毛病，及针对尚未解决的难题",
        reverse: true
    },
    {
        text: "哪些人会更吸引你：",
        dimension: "SN",
        optionA: "一个思想敏捷及非常聪颖的人",
        optionB: "实事求是，具丰富常识的人",
        reverse: false
    },
    {
        text: "哪些是较高的赞誉：",
        dimension: "SN",
        optionA: "一贯感性的人",
        optionB: "一贯理性的人",
        reverse: false
    },
    {
        text: "你比较喜欢：",
        dimension: "SN",
        optionA: "能干的",
        optionB: "富有同情心",
        reverse: false
    },

    // T-F 维度 (思考-情感) - 共18题
    {
        text: "我倾向如此做决定：",
        dimension: "TF",
        optionA: "首先依我的心意，然后依我的逻辑",
        optionB: "首先依我的逻辑，然后依我的心意",
        reverse: false
    },
    {
        text: "我倾向比较能够察觉到：",
        dimension: "TF",
        optionA: "当人们需要情感上的支持时",
        optionB: "当人们不合逻辑时",
        reverse: false
    },
    {
        text: "当和某人分手时：",
        dimension: "TF",
        optionA: "我通常让自己的情绪深陷其中，很难才能抽身而出",
        optionB: "虽然我觉得受伤，但一旦下定决心，我会直截了当地将过去恋人的影子甩开",
        reverse: false
    },
    {
        text: "当与一个人交往时，我倾向评量：",
        dimension: "TF",
        optionA: "情感上的兼容性，表达爱意和对另一半的需求很敏感",
        optionB: "智能上的兼容性，沟通重要的想法，客观地讨论和辩论事情",
        reverse: false
    },
    {
        text: "当我不同意我情人的想法时：",
        dimension: "TF",
        optionA: "我尽可能地避免伤害对方的感受",
        optionB: "我通常毫无保留地说话，并且对我的情人直言直语，因为对的就是对的",
        reverse: false
    },
    {
        text: "认识我的人倾向形容我为：",
        dimension: "TF",
        optionA: "热情和敏感",
        optionB: "逻辑和明确",
        reverse: false
    },
    {
        text: "我把大部分和别人的相遇视为：",
        dimension: "TF",
        optionA: "友善及重要的",
        optionB: "另有目的",
        reverse: false
    },
    {
        text: "你是否经常让：",
        dimension: "TF",
        optionA: "你的情感支配你的理智",
        optionB: "你的理智主宰你的情感",
        reverse: false
    },
    {
        text: "你倾向：",
        dimension: "TF",
        optionA: "重视感情多于逻辑",
        optionB: "重视逻辑多于感情",
        reverse: false
    },
    {
        text: "你比较喜欢：",
        dimension: "TF",
        optionA: "坐观事情发展才作计划",
        optionB: "很早便把约会、社交聚集等事情安排妥当",
        reverse: false
    },
    {
        text: "哪个是较高的赞誉：",
        dimension: "TF",
        optionA: "能干的",
        optionB: "富有同情心",
        reverse: true
    },
    {
        text: "你倾向：",
        dimension: "TF",
        optionA: "重视感情多于逻辑",
        optionB: "重视逻辑多于感情",
        reverse: false
    },
    {
        text: "要作决定时，你认为比较重要的是：",
        dimension: "TF",
        optionA: "据事实衡量",
        optionB: "考虑他人的感受和意见",
        reverse: true
    },
    {
        text: "你认为自己处理事情时较为：",
        dimension: "TF",
        optionA: "坚定",
        optionB: "有同情心",
        reverse: false
    },
    {
        text: "你认为哪个是较高的赞誉：",
        dimension: "TF",
        optionA: "一贯感性的人",
        optionB: "一贯理性的人",
        reverse: false
    },
    {
        text: "你倾向比较能够察觉到：",
        dimension: "TF",
        optionA: "当人们需要情感上的支持时",
        optionB: "当人们不合逻辑时",
        reverse: false
    },
    {
        text: "你认为以下哪种更重要：",
        dimension: "TF",
        optionA: "能够逻辑性地思考",
        optionB: "能够同情地感受",
        reverse: false
    },
    {
        text: "当朋友面对困难时，你会：",
        dimension: "TF",
        optionA: "给予情感上的支持",
        optionB: "给出实际的建议和解决方案",
        reverse: false
    },

    // J-P 维度 (判断-感知) - 共18题
    {
        text: "若我有时间和金钱，我的朋友邀请我到国外度假，并且在一天前才通知，我会：",
        dimension: "JP",
        optionA: "必须先检查我的时间表",
        optionB: "立即收拾行装",
        reverse: false
    },
    {
        text: "在第一次约会中，我：",
        dimension: "JP",
        optionA: "若我所约的人来迟了，我会很不高兴",
        optionB: "一点都不在乎，因为我自己已常常迟到",
        reverse: false
    },
    {
        text: "我偏好：",
        dimension: "JP",
        optionA: "事先知道约会的行程：要去哪里、有谁参加、该如何打扮",
        optionB: "让约会自然地发生，不做先前太多的计划",
        reverse: false
    },
    {
        text: "我选择的生活循环着：",
        dimension: "JP",
        optionA: "日程表和组织",
        optionB: "自然发生和弹性",
        reverse: false
    },
    {
        text: "哪一项较为常见：",
        dimension: "JP",
        optionA: "我准时出席而其它人迟到",
        optionB: "其它人都准则出席而我迟到",
        reverse: false
    },
    {
        text: "我是这样喜欢……的人：",
        dimension: "JP",
        optionA: "下定决心并且做出最后肯定的结论",
        optionB: "开放我的选择并且持续收集信息",
        reverse: false
    },
    {
        text: "我是这类型的人：",
        dimension: "JP",
        optionA: "喜欢在一个时间里专心于一件事情直到完成",
        optionB: "享受同时进行好几件事情",
        reverse: false
    },
    {
        text: "当你要外出一整天，你会：",
        dimension: "JP",
        optionA: "计划你要做什么和在什么时候做",
        optionB: "说去就去",
        reverse: false
    },
    {
        text: "你认为自己是一个：",
        dimension: "JP",
        optionA: "较为随兴所至的人",
        optionB: "较为有条理的人",
        reverse: true
    },
    {
        text: "处理许多事情上，你会喜欢：",
        dimension: "JP",
        optionA: "凭兴所至行事",
        optionB: "按照计划行事",
        reverse: true
    },
    {
        text: "按照程序表做事：",
        dimension: "JP",
        optionA: "合你心意",
        optionB: "令你感到束缚",
        reverse: false
    },
    {
        text: "当你有一份特别的任务，你会喜欢：",
        dimension: "JP",
        optionA: "开始前小心组织计划",
        optionB: "边做边找须做什么",
        reverse: false
    },
    {
        text: "在大多数情况下，你会选择：",
        dimension: "JP",
        optionA: "顺其自然",
        optionB: "按程序表做事",
        reverse: true
    },
    {
        text: "你比较喜欢：",
        dimension: "JP",
        optionA: "很早便把约会、社交聚集等事情安排妥当",
        optionB: "无拘无束，看当时有什么好玩就做什么",
        reverse: false
    },
    {
        text: "计划一个旅程时，你较喜欢：",
        dimension: "JP",
        optionA: "大部分的时间都是跟当天的感觉行事",
        optionB: "事先知道大部分的日子会做什么",
        reverse: true
    },
    {
        text: "在日常工作中，你会：",
        dimension: "JP",
        optionA: "颇为喜欢处理迫使你分秒必争的突发",
        optionB: "通常预先计划，以免要在压力下工作",
        reverse: true
    },
    {
        text: "当你要在一个星期内完成一个大项目，你在开始的时候会：",
        dimension: "JP",
        optionA: "把要做的不同工作依次列出",
        optionB: "马上动工",
        reverse: false
    },
    {
        text: "你认为按照程序表做事：",
        dimension: "JP",
        optionA: "有时是需要的，但一般来说你不大喜欢这样做",
        optionB: "大多数情况下是有帮助而且是你喜欢做的",
        reverse: true
    }
];

// 16种人格类型详细描述
const personalityTypes = {
    "INTJ": {
        name: "建筑师",
        nickname: "战略家",
        description: "INTJ具有强大动力与本意来达成目的与创意。有宏大的愿景且能快速在众多外界事件中找出有意义的模范。对所承负职务，具良好能力于策划工作并完成。具怀疑心、挑剔性、独立性、果决，对专业水准及绩效要求高。他们是天生的战略家，善于规划未来，追求高效和完美。虽然外表冷静理性，但内心有着坚定的信念和目标。"
    },
    "INTP": {
        name: "逻辑学家",
        nickname: "思考者",
        description: "INTP安静、自持、弹性及具适应力。特别喜爱追求理论与科学事理。习于以逻辑及分析来解决问题，是最好的问题解决者。最有兴趣于创意事务及特定工作，对聚会与闲聊无大兴趣。追求可发挥个人强烈兴趣的生涯。追求发展对有兴趣事务之逻辑解释。他们拥有丰富的内心世界，思维独特而深刻。"
    },
    "ENTJ": {
        name: "指挥官",
        nickname: "领导者",
        description: "ENTJ坦诚、具决策力的活动领导者。长于发展与实施广泛的系统以解决组织的问题。专精于具内涵与智能的谈话如对公众演讲。乐于经常吸收新知且能广开信息管道。易生过度自信，会强于表达自已创见。喜于长程策划及目标设定。他们是天生的领导者，具有强烈的意志和清晰的战略眼光。"
    },
    "ENTP": {
        name: "辩论家",
        nickname: "创新者",
        description: "ENTP反应快、聪明、长于多样事务。具激励伙伴、敏捷及直言讳专长。会为了有趣对问题的两面加予争辩。对解决新及挑战性的问题富有策略，但会轻忽或厌烦经常的任务与细节。兴趣多元，易倾向于转移至新生的兴趣。对所想要的会有技巧地找出逻辑的理由。长于看清他人，有智能去解决新或有挑战的问题。"
    },
    "INFJ": {
        name: "提倡者",
        nickname: "理想主义者",
        description: "INFJ因为坚忍、创意及必须达成的意图而能成功。会在工作中投注最大的努力。默默强力的、诚挚的及用心的关切他人。因坚守原则而受敬重。提出造福大众利益的明确远景而为人所尊敬与追随。追求创见、关系及物质财物的意义及关联。想了解什么能激励别人及对他人具洞察力。光明正大且坚信其价值观。有组织且果断地履行其愿景。"
    },
    "INFP": {
        name: "调停者",
        nickname: "治愈者",
        description: "INFP安静观察者，具理想性与对其价值观及重要之人具忠诚心。希望外在生活形态与内在价值观相吻合。具好奇心且很快能看出机会所在。常担负开发创意的触媒者。除非价值观受侵犯，行事会具弹性、适应力高且承受力强。具想了解及发展他人潜能的企图。想作太多且作事全神贯注。对所处境遇及拥有不太在意。具适应力、有弹性除非价值观受到威胁。"
    },
    "ENFJ": {
        name: "主人公",
        nickname: "教育者",
        description: "ENFJ热忱、易感应及负责任的，具能鼓励他人的领导风格。对别人所想或希求会表达真正关切且切实用心去处理。能怡然且技巧性地带领团体讨论或演示文稿提案。爱交际、受欢迎及富同情心。对称许及批评很在意。喜欢带引别人且能使别人或团体发挥潜能。"
    },
    "ENFP": {
        name: "竞选者",
        nickname: "激励者",
        description: "ENFP充满热忱、活力充沛、聪明的、富想象力的，视生命充满机会但期能得自他人肯定与支持。几乎能达成所有有兴趣的事。对难题很快就有对策并能对有困难的人施予援手。依赖能改善的能力而无须预作规划准备。为达目的常能找出强制自己为之的理由。即兴执行者。"
    },
    "ISTJ": {
        name: "物流师",
        nickname: "检查员",
        description: "ISTJ严肃、安静、藉由集中心志与全力投入、及可被信赖获致成功。行事务实、有序、实际、逻辑、真实及可信赖十分留意且乐于任何事。工作、居家、生活均有良好组织及有序。负责任。照设定成效来作出决策且不畏阻挠与闲言会坚定为之。重视传统与忠诚。传统性的思考者或经理。"
    },
    "ISFJ": {
        name: "守卫者",
        nickname: "保护者",
        description: "ISFJ安静、和善、负责任且有良心。行事尽责投入。安定性高，常居项目工作或团体之安定力量。愿投入、吃苦及力求精确。兴趣通常不在于科技方面。对细节事务有耐心。忠诚、考虑周到、知性且会关切他人感受。致力于创构有序及和谐的工作与家庭环境。"
    },
    "ESTJ": {
        name: "总经理",
        nickname: "监督者",
        description: "ESTJ务实、真实、事实倾向，具企业或技术天份。不喜欢抽象理论；最喜欢学习可立即运用事理。喜好组织与管理活动且专注以最有效率方式行事以达致成效。具决断力、关注细节且很快作出决策，是优秀行政者。会忽略他人感受。喜作领导者或企业主管。"
    },
    "ESFJ": {
        name: "执政官",
        nickname: "帮助者",
        description: "ESFJ诚挚、爱说话、合作性高、受欢迎、光明正大的，是天生的合作者及活跃的组织成员。重和谐且长于创造和谐。常作对他人有益事务。给予鼓励及称许会有更佳工作成效。最有兴趣于会直接及有形影响人们生活的事务。喜欢与他人共事去精确且准时地完成工作。"
    },
    "ISTP": {
        name: "鉴赏家",
        nickname: "工匠",
        description: "ISTP冷静旁观者，安静、预留余地、弹性及会以无偏见的好奇心与未预期原始的幽默观察与分析。有兴趣于探索原因及效果，技术事件是为何及如何运作且使用逻辑的原理组构事实、重视效能。擅长于掌握问题核心及找出解决方式。分析成事的缘由且能实时由大量资料中找出实际问题的核心。"
    },
    "ISFP": {
        name: "探险家",
        nickname: "艺术家",
        description: "ISFP羞怯的、安宁和善地、敏感的、亲切的、且行事谦虚。喜于避开争论，不对他人强加已见或价值观。无意于领导却常是忠诚的追随者。办事不急躁，安于现状无意于以过度的急切或努力破坏现况，且非成果导向。喜欢有自有的空间及照自订的时程办事。"
    },
    "ESTP": {
        name: "企业家",
        nickname: "说服者",
        description: "ESTP擅长现场实时解决问题，是优秀的解决问题者。喜欢办事并乐于其中及过程。倾向于喜好技术事务及运动，交结同好友人。具适应性、容忍度、务实性；投注心力于会很快具成效工作。不喜欢冗长概念的解释及理论。最专精于可操作、处理、分解或组合的真实事务。"
    },
    "ESFP": {
        name: "表演者",
        nickname: "娱乐者",
        description: "ESFP外向、和善、接受性、乐于分享喜乐予他人。喜欢与他人一起行动且促成事件发生，在学习时亦然。知晓事件未来的发展并会热列参与。最擅长于人际相处能力及具备完备常识，很有弹性能立即适应他人与环境。对生命、人、物质享受的热爱者。"
    }
};
