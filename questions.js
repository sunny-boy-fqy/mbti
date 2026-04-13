// MBTI 测试题库 - 改进版
// 每个问题对应一个维度: E-I, S-N, T-F, J-P
// 格式: { text, dimension, optionA, optionB, reverse }
// reverse: false表示选A倾向第一个字母，true表示选A倾向第二个字母

const questions = [
  // ==================== E-I 维度 (外向-内向) - 共26题 ====================
  {
    text: "当你需要恢复精力时，你更倾向于：",
    dimension: "EI",
    optionA: "与朋友聚会或参加社交活动",
    optionB: "独自待在家中休息或做自己喜欢的事",
    reverse: false
  },
  {
    text: "在大型社交聚会中，你通常会：",
    dimension: "EI",
    optionA: "活跃到很晚，常常是最后离开的人",
    optionB: "感到疲惫，希望早点回家休息",
    reverse: false
  },
  {
    text: "以下哪种活动更吸引你？",
    dimension: "EI",
    optionA: "参加热闹的派对或社交活动",
    optionB: "在家与亲密的朋友看电影或聊天",
    reverse: false
  },
  {
    text: "在与新认识的人交往时，你通常：",
    dimension: "EI",
    optionA: "很快就能打开话匣子，建立联系",
    optionB: "比较沉默，需要时间才能放松",
    reverse: false
  },
  {
    text: "你的朋友圈通常是：",
    dimension: "EI",
    optionA: "范围很广，有很多认识的人",
    optionB: "小而紧密，只有几个知心朋友",
    reverse: false
  },
  {
    text: "身边的人通常如何评价你？",
    dimension: "EI",
    optionA: "很健谈，充满活力",
    optionB: "安静，但很有想法",
    reverse: false
  },
  {
    text: "在社交场合，你更倾向于：",
    dimension: "EI",
    optionA: "主动与很多人交谈",
    optionB: "与少数熟悉的人深入交流",
    reverse: false
  },
  {
    text: "你更容易：",
    dimension: "EI",
    optionA: "向他人敞开心扉",
    optionB: "将想法保留在心里",
    reverse: false
  },
  {
    text: "在一群人当中，通常：",
    dimension: "EI",
    optionA: "你主动介绍大家认识",
    optionB: "等待别人介绍你",
    reverse: false
  },
  {
    text: "参加社交聚会时，你经常会：",
    dimension: "EI",
    optionA: "有时感到疲惫",
    optionB: "常常乐在其中",
    reverse: true
  },
  {
    text: "你通常：",
    dimension: "EI",
    optionA: "容易与新认识的人建立联系",
    optionB: "倾向于独自一人或待在角落",
    reverse: false
  },
  {
    text: "你认为别人通常：",
    dimension: "EI",
    optionA: "需要很长时间才能真正了解你",
    optionB: "很快就能认识你",
    reverse: true
  },
  {
    text: "在社交场合，你经常会：",
    dimension: "EI",
    optionA: "与某些人很难打开话匣子",
    optionB: "与多数人都能从容地交谈",
    reverse: true
  },
  {
    text: "刚认识的朋友能否说出你的兴趣爱好：",
    dimension: "EI",
    optionA: "很快就能",
    optionB: "需要一段时间了解后才能",
    reverse: false
  },
  {
    text: "你能否与不同的人轻松聊天：",
    dimension: "EI",
    optionA: "只能与有共同兴趣的人畅聊",
    optionB: "几乎能与任何人交谈",
    reverse: true
  },
  {
    text: "你是否可以和任何人从容地交谈：",
    dimension: "EI",
    optionA: "可以，能够适应不同的社交场合",
    optionB: "只在特定情况下或与某些人才能畅所欲言",
    reverse: false
  },
  {
    text: "和一群人在一起，你通常会：",
    dimension: "EI",
    optionA: "与你熟悉的个别人深入谈话",
    optionB: "参与大家的集体讨论",
    reverse: true
  },
  {
    text: "在社交聚会上，你会：",
    dimension: "EI",
    optionA: "是说话很多的一个",
    optionB: "更多倾听他人",
    reverse: false
  },
  {
    text: "你更喜欢的工作环境是：",
    dimension: "EI",
    optionA: "开放式办公，经常与同事互动",
    optionB: "独立办公室，可以专注工作",
    reverse: false
  },
  {
    text: "周末时，你更倾向于：",
    dimension: "EI",
    optionA: "安排社交活动或外出",
    optionB: "在家休息或独自进行活动",
    reverse: false
  },
  {
    text: "接到突然的电话或信息，你通常会：",
    dimension: "EI",
    optionA: "很高兴有人联系你",
    optionB: "有些被打扰的感觉",
    reverse: false
  },
  {
    text: "在团队合作中，你更倾向于：",
    dimension: "EI",
    optionA: "积极发言，推动讨论",
    optionB: "先倾听，再发表意见",
    reverse: false
  },
  {
    text: "你更喜欢哪种形式的沟通：",
    dimension: "EI",
    optionA: "面对面或电话交谈",
    optionB: "邮件或信息等书面形式",
    reverse: false
  },
  {
    text: "参加培训或会议时，你更喜欢：",
    dimension: "EI",
    optionA: "主动提问和参与讨论",
    optionB: "认真听讲和做笔记",
    reverse: false
  },
  {
    text: "面对陌生人，你通常：",
    dimension: "EI",
    optionA: "主动打招呼并开启对话",
    optionB: "等待对方先开口或保持礼貌距离",
    reverse: false
  },
  {
    text: "处理问题时，你更倾向于：",
    dimension: "EI",
    optionA: "与他人讨论，听取意见",
    optionB: "独自思考，形成自己的判断",
    reverse: false
  },

  // ==================== S-N 维度 (实感-直觉) - 共26题 ====================
  {
    text: "你更倾向于关注：",
    dimension: "SN",
    optionA: "当前的具体情况和现实",
    optionB: "未来的可能性和想象",
    reverse: false
  },
  {
    text: "你更倾向于相信：",
    dimension: "SN",
    optionA: "可靠的经验和事实",
    optionB: "直觉和灵感",
    reverse: false
  },
  {
    text: "对于已经运作良好的事情，你的态度是：",
    dimension: "SN",
    optionA: "保持现状，不必改变",
    optionB: "总有改进和创新的空间",
    reverse: false
  },
  {
    text: "当你和熟悉的人深入交流时，你更倾向谈论：",
    dimension: "SN",
    optionA: "未来、创新和生活的种种可能性",
    optionB: "实际的、具体的、「此时此地」的事物",
    reverse: true
  },
  {
    text: "在处理问题时，你更喜欢：",
    dimension: "SN",
    optionA: "先了解整体情况和大局",
    optionB: "先掌握具体细节",
    reverse: true
  },
  {
    text: "你更愿意：",
    dimension: "SN",
    optionA: "关注现实世界",
    optionB: "探索想象和可能性",
    reverse: false
  },
  {
    text: "学习新主题时，你更容易被哪类内容吸引：",
    dimension: "SN",
    optionA: "具体案例和事实数据",
    optionB: "抽象理论和概念模型",
    reverse: false
  },
  {
    text: "你更容易和哪类同伴高效协作：",
    dimension: "SN",
    optionA: "富有想象力、经常提出新思路的人",
    optionB: "务实稳健、重视执行的人",
    reverse: true
  },
  {
    text: "你宁愿被人认为是一个：",
    dimension: "SN",
    optionA: "实事求是的人",
    optionB: "有创意和洞察力的人",
    reverse: false
  },
  {
    text: "你会选择哪类人做朋友：",
    dimension: "SN",
    optionA: "经常提出新想法的人",
    optionB: "脚踏实地的人",
    reverse: true
  },
  {
    text: "做大家都做的事，你比较喜欢：",
    dimension: "SN",
    optionA: "按照既定的方法",
    optionB: "尝试新的方法",
    reverse: false
  },
  {
    text: "你通常较喜欢的科目是：",
    dimension: "SN",
    optionA: "讲授概念和原理的",
    optionB: "讲授事实和数据的",
    reverse: true
  },
  {
    text: "为乐趣而阅读时，你会：",
    dimension: "SN",
    optionA: "喜欢新奇或创新的表达方式",
    optionB: "喜欢直接明了的叙述",
    reverse: true
  },
  {
    text: "面对新项目时，你更信任哪种指导方式：",
    dimension: "SN",
    optionA: "给出清晰步骤和可执行细节",
    optionB: "鼓励探索方向并自主创新",
    reverse: false
  },
  {
    text: "面对问题，你会：",
    dimension: "SN",
    optionA: "采用已验证的方法",
    optionB: "分析问题，寻找新的解决方案",
    reverse: false
  },
  {
    text: "哪类同伴更吸引你：",
    dimension: "SN",
    optionA: "善于联想、提出新观点的人",
    optionB: "重视经验、注重落地的人",
    reverse: true
  },
  {
    text: "你更看重：",
    dimension: "SN",
    optionA: "实际能力",
    optionB: "创新想法",
    reverse: false
  },
  {
    text: "在做决定时，你更注重：",
    dimension: "SN",
    optionA: "现有的事实和数据",
    optionB: "对未来的预测和可能性",
    reverse: false
  },
  {
    text: "阅读说明书时，你更关注：",
    dimension: "SN",
    optionA: "具体的操作步骤",
    optionB: "整体的工作原理",
    reverse: false
  },
  {
    text: "学习新技能时，你更喜欢：",
    dimension: "SN",
    optionA: "通过实践和具体例子",
    optionB: "理解背后的理论和原理",
    reverse: false
  },
  {
    text: "描述一个项目时，你会：",
    dimension: "SN",
    optionA: "详细说明具体细节",
    optionB: "概述整体框架和愿景",
    reverse: false
  },
  {
    text: "你更喜欢：",
    dimension: "SN",
    optionA: "按部就班地完成任务",
    optionB: "探索新的方法和可能性",
    reverse: false
  },
  {
    text: "解决问题时，你首先会：",
    dimension: "SN",
    optionA: "回顾过去的类似经验",
    optionB: "思考全新的解决方案",
    reverse: false
  },
  {
    text: "你更欣赏：",
    dimension: "SN",
    optionA: "经验和常识",
    optionB: "洞察力和创新",
    reverse: false
  },
  {
    text: "写作时，你更倾向于：",
    dimension: "SN",
    optionA: "描述具体的事实和细节",
    optionB: "表达抽象的想法和概念",
    reverse: false
  },
  {
    text: "你更关注：",
    dimension: "SN",
    optionA: "眼前的实际需求",
    optionB: "长远的发展趋势",
    reverse: false
  },

  // ==================== T-F 维度 (思考-情感) - 共26题 ====================
  {
    text: "做决定时，你更倾向于：",
    dimension: "TF",
    optionA: "基于逻辑分析",
    optionB: "考虑他人感受和价值观",
    reverse: false
  },
  {
    text: "你更容易注意到：",
    dimension: "TF",
    optionA: "他人需要情感支持的时刻",
    optionB: "他人的逻辑错误",
    reverse: true
  },
  {
    text: "当计划没有按预期进行时，你通常会：",
    dimension: "TF",
    optionA: "先关注情绪影响，再推进调整",
    optionB: "先分析原因，再制定对策",
    reverse: true
  },
  {
    text: "在一段关系中，你更看重：",
    dimension: "TF",
    optionA: "情感的共鸣和理解",
    optionB: "思想的契合和理性沟通",
    reverse: true
  },
  {
    text: "当你不同意他人的想法时：",
    dimension: "TF",
    optionA: "尽量避免伤害对方的感受",
    optionB: "直接指出问题，优先讨论事实",
    reverse: true
  },
  {
    text: "认识你的人倾向于形容你为：",
    dimension: "TF",
    optionA: "热情和敏感",
    optionB: "逻辑和明确",
    reverse: true
  },
  {
    text: "你把大部分与他人的相遇视为：",
    dimension: "TF",
    optionA: "友善和有意义的",
    optionB: "有特定目的的",
    reverse: true
  },
  {
    text: "在重要决策中，你通常更依赖：",
    dimension: "TF",
    optionA: "价值观和感受",
    optionB: "逻辑和证据",
    reverse: true
  },
  {
    text: "你更看重：",
    dimension: "TF",
    optionA: "和谐的人际关系",
    optionB: "客观的分析结果",
    reverse: true
  },
  {
    text: "别人更常肯定你的哪一面：",
    dimension: "TF",
    optionA: "做事高效、判断清晰",
    optionB: "善于共情、照顾他人",
    reverse: false
  },
  {
    text: "作决定时，你认为更重要的是：",
    dimension: "TF",
    optionA: "依据事实和逻辑",
    optionB: "考虑他人的感受和意见",
    reverse: false
  },
  {
    text: "你认为自己处理事情时较为：",
    dimension: "TF",
    optionA: "坚定和客观",
    optionB: "有同情心和理解",
    reverse: false
  },
  {
    text: "你认为哪个是较高的赞誉：",
    dimension: "TF",
    optionA: "理性的人",
    optionB: "感性的人",
    reverse: false
  },
  {
    text: "你更容易察觉到：",
    dimension: "TF",
    optionA: "人们需要情感支持时",
    optionB: "人们的观点不合逻辑时",
    reverse: true
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
    optionA: "给予情感上的支持和安慰",
    optionB: "给出实际的建议和解决方案",
    reverse: true
  },
  {
    text: "在争论中，你更注重：",
    dimension: "TF",
    optionA: "维护关系和避免伤害",
    optionB: "表达真相和逻辑正确",
    reverse: true
  },
  {
    text: "评价他人时，你更看重：",
    dimension: "TF",
    optionA: "他们的善意和动机",
    optionB: "他们的能力和成果",
    reverse: true
  },
  {
    text: "面对批评，你通常会：",
    dimension: "TF",
    optionA: "感到受伤，需要时间恢复",
    optionB: "理性分析，看是否有道理",
    reverse: true
  },
  {
    text: "你在工作中更注重：",
    dimension: "TF",
    optionA: "团队和谐和士气",
    optionB: "效率和结果",
    reverse: true
  },
  {
    text: "给他人反馈时，你会：",
    dimension: "TF",
    optionA: "委婉表达，照顾感受",
    optionB: "直接了当，指出问题",
    reverse: true
  },
  {
    text: "做重要决定时，你会：",
    dimension: "TF",
    optionA: "考虑对他人的影响",
    optionB: "专注于逻辑分析",
    reverse: true
  },
  {
    text: "你更倾向于：",
    dimension: "TF",
    optionA: "用心感受",
    optionB: "用脑思考",
    reverse: true
  },
  {
    text: "面对冲突，你更倾向于：",
    dimension: "TF",
    optionA: "寻找共同点，达成和解",
    optionB: "分析问题，找出最佳方案",
    reverse: true
  },
  {
    text: "你更欣赏：",
    dimension: "TF",
    optionA: "善良和同理心",
    optionB: "公正和客观",
    reverse: true
  },
  {
    text: "在团队中，你通常扮演：",
    dimension: "TF",
    optionA: "调解者，维护和谐",
    optionB: "分析者，提供客观意见",
    reverse: true
  },

  // ==================== J-P 维度 (判断-感知) - 共26题 ====================
  {
    text: "如果朋友临时邀请你参加周末短途活动，你会：",
    dimension: "JP",
    optionA: "先查看日程安排是否可行",
    optionB: "立即收拾行李准备出发",
    reverse: false
  },
  {
    text: "在团队活动中，如果有人迟到了：",
    dimension: "JP",
    optionA: "你会希望流程按计划推进",
    optionB: "你通常可以灵活调整节奏",
    reverse: false
  },
  {
    text: "你更喜欢：",
    dimension: "JP",
    optionA: "事先知道活动的详细安排",
    optionB: "让事情自然发生，不做太多计划",
    reverse: false
  },
  {
    text: "你的生活方式更倾向于：",
    dimension: "JP",
    optionA: "有计划和条理",
    optionB: "灵活和随性",
    reverse: false
  },
  {
    text: "哪一种情况更常见：",
    dimension: "JP",
    optionA: "你准时出席，其他人迟到",
    optionB: "其他人准时，而你迟到",
    reverse: false
  },
  {
    text: "你更喜欢：",
    dimension: "JP",
    optionA: "做出明确的决定",
    optionB: "保持选项开放",
    reverse: false
  },
  {
    text: "工作时，你更倾向于：",
    dimension: "JP",
    optionA: "一次专注一件事直到完成",
    optionB: "同时进行多项任务",
    reverse: false
  },
  {
    text: "外出一天，你会：",
    dimension: "JP",
    optionA: "计划好要做什么和什么时候做",
    optionB: "说走就走",
    reverse: false
  },
  {
    text: "你认为自己是一个：",
    dimension: "JP",
    optionA: "较为随兴的人",
    optionB: "较为有条理的人",
    reverse: true
  },
  {
    text: "处理许多事情，你会：",
    dimension: "JP",
    optionA: "凭兴所至行事",
    optionB: "按照计划行事",
    reverse: true
  },
  {
    text: "按照计划表做事：",
    dimension: "JP",
    optionA: "符合你的心意",
    optionB: "让你感到束缚",
    reverse: false
  },
  {
    text: "面对特别任务，你更喜欢：",
    dimension: "JP",
    optionA: "开始前仔细组织计划",
    optionB: "边做边找方法",
    reverse: false
  },
  {
    text: "在大多数情况下，你会选择：",
    dimension: "JP",
    optionA: "顺其自然",
    optionB: "按计划行事",
    reverse: true
  },
  {
    text: "你比较喜欢：",
    dimension: "JP",
    optionA: "很早便安排好活动和社交计划",
    optionB: "看当时的心情再决定",
    reverse: false
  },
  {
    text: "计划旅程时，你较喜欢：",
    dimension: "JP",
    optionA: "看当天的感觉行事",
    optionB: "事先知道大部分时间会做什么",
    reverse: true
  },
  {
    text: "在日常工作中，你会：",
    dimension: "JP",
    optionA: "喜欢处理突发和紧急事件",
    optionB: "预先计划，避免压力",
    reverse: true
  },
  {
    text: "要在一周内完成一个大项目，你会：",
    dimension: "JP",
    optionA: "列出不同工作并按序进行",
    optionB: "马上开始行动",
    reverse: false
  },
  {
    text: "按照计划表做事：",
    dimension: "JP",
    optionA: "有时是必要的，但你不太喜欢",
    optionB: "多数情况下是有帮助且你喜欢的",
    reverse: true
  },
  {
    text: "面对截止日期，你通常会：",
    dimension: "JP",
    optionA: "提前完成",
    optionB: "在最后时刻完成",
    reverse: false
  },
  {
    text: "你的书桌或房间通常是：",
    dimension: "JP",
    optionA: "整洁有序",
    optionB: "有些混乱但有个人风格",
    reverse: false
  },
  {
    text: "对于未来，你更倾向于：",
    dimension: "JP",
    optionA: "制定明确的目标和计划",
    optionB: "保持开放，看情况发展",
    reverse: false
  },
  {
    text: "你更喜欢：",
    dimension: "JP",
    optionA: "确定和可预测",
    optionB: "灵活和变化",
    reverse: false
  },
  {
    text: "做决定时，你倾向于：",
    dimension: "JP",
    optionA: "尽快做出决定",
    optionB: "继续收集更多信息",
    reverse: false
  },
  {
    text: "你更喜欢的工作方式是：",
    dimension: "JP",
    optionA: "明确的结构和流程",
    optionB: "灵活和自主",
    reverse: false
  },
  {
    text: "度假时，你更倾向于：",
    dimension: "JP",
    optionA: "预订好所有行程",
    optionB: "大致规划，留有灵活性",
    reverse: false
  },
  {
    text: "你认为自己是：",
    dimension: "JP",
    optionA: "有计划的执行者",
    optionB: "灵活的适应者",
    reverse: false
  }
];

// 16种人格类型描述（中性版本）
const personalityTypes = {
  "INTJ": {
    name: "建筑师",
    nickname: "战略家",
    description: "INTJ通常重视长期规划与系统思考，擅长把复杂目标拆解为可执行路径。面对问题时偏向独立分析，追求高标准和清晰结构。"
  },
  "INTP": {
    name: "逻辑学家",
    nickname: "思考者",
    description: "INTP通常对概念、模型和原理有强烈兴趣，喜欢从不同角度理解问题本质。做决定时倾向理性推演，并保持开放的思维空间。"
  },
  "ENTJ": {
    name: "指挥官",
    nickname: "组织者",
    description: "ENTJ通常擅长设定方向并推动执行，关注效率、结果和系统优化。在团队中常主动承担统筹角色，善于协调资源达成目标。"
  },
  "ENTP": {
    name: "辩论家",
    nickname: "创新者",
    description: "ENTP通常思维活跃、点子丰富，乐于探索新方案和多种可能性。面对挑战时常以灵活策略应对，并善于发起讨论激发新观点。"
  },
  "INFJ": {
    name: "提倡者",
    nickname: "洞察者",
    description: "INFJ通常关注意义与价值，善于理解他人动机并进行深度思考。行动上既重视原则，也会通过有计划的方式推动理想落地。"
  },
  "INFP": {
    name: "调停者",
    nickname: "理想主义者",
    description: "INFP通常重视内在价值和真实感受，倾向在尊重差异的环境中表达想法。面对选择时会兼顾个人信念与他人处境。"
  },
  "ENFJ": {
    name: "主人公",
    nickname: "引导者",
    description: "ENFJ通常善于理解群体情绪并凝聚共识，重视关系质量与共同成长。在协作中常主动支持他人，推动团队朝目标前进。"
  },
  "ENFP": {
    name: "竞选者",
    nickname: "激发者",
    description: "ENFP通常富有热情与创造力，乐于尝试新体验并连接不同想法。做事时重视灵感和意义，也擅长带动团队氛围。"
  },
  "ISTJ": {
    name: "物流师",
    nickname: "执行者",
    description: "ISTJ通常重视规则、秩序与责任，做事稳健且注重细节一致性。面对任务时倾向按计划推进，确保结果可靠可复盘。"
  },
  "ISFJ": {
    name: "守卫者",
    nickname: "支持者",
    description: "ISFJ通常细致、可靠，关注他人需求与团队稳定。处理事务时偏好清晰流程，并通过持续投入保障整体运转。"
  },
  "ESTJ": {
    name: "总经理",
    nickname: "管理者",
    description: "ESTJ通常擅长组织流程、明确分工并推动落实。面对目标时重视效率与可执行性，倾向通过结构化方法达成成果。"
  },
  "ESFJ": {
    name: "执政官",
    nickname: "协调者",
    description: "ESFJ通常重视合作与互相支持，擅长维系团队关系和日常协作节奏。在执行任务时关注实际影响与成员感受。"
  },
  "ISTP": {
    name: "鉴赏家",
    nickname: "实干者",
    description: "ISTP通常偏好通过观察与实践解决问题，擅长快速定位关键变量。面对变化时具备较强适应力，行动务实而直接。"
  },
  "ISFP": {
    name: "探险家",
    nickname: "创作者",
    description: "ISFP通常重视体验与个人价值表达，做事灵活且注重当下感受。在关系中倾向温和沟通，尊重彼此边界与差异。"
  },
  "ESTP": {
    name: "企业家",
    nickname: "行动者",
    description: "ESTP通常反应迅速、偏好实战，善于在动态环境中抓住机会。面对问题时倾向先行动再迭代，并关注即时反馈。"
  },
  "ESFP": {
    name: "表演者",
    nickname: "体验者",
    description: "ESFP通常热情外向，重视互动与现实体验，善于调动现场氛围。做事强调参与感和即时性，也能灵活适应环境变化。"
  }
};
