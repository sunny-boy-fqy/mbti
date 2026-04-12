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
    text: "当你对一个约会感到放心时，你更倾向谈论：",
    dimension: "SN",
    optionA: "未来、创新和生活的种种可能性",
    optionB: "实际的、具体的、「此时此地」的事物",
    reverse: false
  },
  {
    text: "在处理问题时，你更喜欢：",
    dimension: "SN",
    optionA: "先了解整体情况和大局",
    optionB: "先掌握具体细节",
    reverse: false
  },
  {
    text: "你更愿意：",
    dimension: "SN",
    optionA: "关注现实世界",
    optionB: "探索想象和可能性",
    reverse: false
  },
  {
    text: "假如你是一位老师，你会选择教：",
    dimension: "SN",
    optionA: "基于事实和数据的课程",
    optionB: "涉及理论和概念的课程",
    reverse: true
  },
  {
    text: "你和哪些人比较合得来：",
    dimension: "SN",
    optionA: "富有想象力和创意的人",
    optionB: "现实和务实的人",
    reverse: false
  },
  {
    text: "你宁愿被人认为是一个：",
    dimension: "SN",
    optionA: "实事求是的人",
    optionB: "有创意和洞察力的人",
    reverse: true
  },
  {
    text: "你会选择哪类人做朋友：",
    dimension: "SN",
    optionA: "经常提出新想法的人",
    optionB: "脚踏实地的人",
    reverse: false
  },
  {
    text: "做大家都做的事，你比较喜欢：",
    dimension: "SN",
    optionA: "按照既定的方法",
    optionB: "尝试新的方法",
    reverse: true
  },
  {
    text: "你通常较喜欢的科目是：",
    dimension: "SN",
    optionA: "讲授概念和原理的",
    optionB: "讲授事实和数据的",
    reverse: false
  },
  {
    text: "为乐趣而阅读时，你会：",
    dimension: "SN",
    optionA: "喜欢新奇或创新的表达方式",
    optionB: "喜欢直接明了的叙述",
    reverse: false
  },
  {
    text: "你宁愿替哪一类上司（或老师）工作：",
    dimension: "SN",
    optionA: "性格善良，但有时前后不一致",
    optionB: "言辞犀利，但逻辑清晰",
    reverse: true
  },
  {
    text: "面对问题，你会：",
    dimension: "SN",
    optionA: "采用已验证的方法",
    optionB: "分析问题，寻找新的解决方案",
    reverse: true
  },
  {
    text: "哪类人更吸引你：",
    dimension: "SN",
    optionA: "思维敏捷、聪明的人",
    optionB: "务实、有丰富常识的人",
    reverse: false
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
    reverse: false
  },
  {
    text: "当关系结束时，你通常会：",
    dimension: "TF",
    optionA: "深陷情感，难以走出来",
    optionB: "理性接受，继续前进",
    reverse: false
  },
  {
    text: "在一段关系中，你更看重：",
    dimension: "TF",
    optionA: "情感的共鸣和理解",
    optionB: "思想的契合和理性沟通",
    reverse: false
  },
  {
    text: "当你不同意他人的想法时：",
    dimension: "TF",
    optionA: "尽量避免伤害对方的感受",
    optionB: "直言不讳，因为对的就是对的",
    reverse: false
  },
  {
    text: "认识你的人倾向于形容你为：",
    dimension: "TF",
    optionA: "热情和敏感",
    optionB: "逻辑和明确",
    reverse: false
  },
  {
    text: "你把大部分与他人的相遇视为：",
    dimension: "TF",
    optionA: "友善和有意义的",
    optionB: "有特定目的的",
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
    text: "你更看重：",
    dimension: "TF",
    optionA: "和谐的人际关系",
    optionB: "客观的分析结果",
    reverse: false
  },
  {
    text: "哪个是较高的赞誉：",
    dimension: "TF",
    optionA: "能干和有效率",
    optionB: "富有同情心",
    reverse: true
  },
  {
    text: "作决定时，你认为更重要的是：",
    dimension: "TF",
    optionA: "依据事实和逻辑",
    optionB: "考虑他人的感受和意见",
    reverse: true
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
    optionA: "给予情感上的支持和安慰",
    optionB: "给出实际的建议和解决方案",
    reverse: false
  },
  {
    text: "在争论中，你更注重：",
    dimension: "TF",
    optionA: "维护关系和避免伤害",
    optionB: "表达真相和逻辑正确",
    reverse: false
  },
  {
    text: "评价他人时，你更看重：",
    dimension: "TF",
    optionA: "他们的善意和动机",
    optionB: "他们的能力和成果",
    reverse: false
  },
  {
    text: "面对批评，你通常会：",
    dimension: "TF",
    optionA: "感到受伤，需要时间恢复",
    optionB: "理性分析，看是否有道理",
    reverse: false
  },
  {
    text: "你在工作中更注重：",
    dimension: "TF",
    optionA: "团队和谐和士气",
    optionB: "效率和结果",
    reverse: false
  },
  {
    text: "给他人反馈时，你会：",
    dimension: "TF",
    optionA: "委婉表达，照顾感受",
    optionB: "直接了当，指出问题",
    reverse: false
  },
  {
    text: "做重要决定时，你会：",
    dimension: "TF",
    optionA: "考虑对他人的影响",
    optionB: "专注于逻辑分析",
    reverse: false
  },
  {
    text: "你更倾向于：",
    dimension: "TF",
    optionA: "用心感受",
    optionB: "用脑思考",
    reverse: false
  },
  {
    text: "面对冲突，你更倾向于：",
    dimension: "TF",
    optionA: "寻找共同点，达成和解",
    optionB: "分析问题，找出最佳方案",
    reverse: false
  },
  {
    text: "你更欣赏：",
    dimension: "TF",
    optionA: "善良和同理心",
    optionB: "公正和客观",
    reverse: false
  },
  {
    text: "在团队中，你通常扮演：",
    dimension: "TF",
    optionA: "调解者，维护和谐",
    optionB: "分析者，提供客观意见",
    reverse: false
  },

  // ==================== J-P 维度 (判断-感知) - 共26题 ====================
  {
    text: "如果朋友前一天才邀请你出国度假，你会：",
    dimension: "JP",
    optionA: "先查看日程安排是否可行",
    optionB: "立即收拾行李准备出发",
    reverse: false
  },
  {
    text: "在第一次约会中，如果对方迟到了：",
    dimension: "JP",
    optionA: "你会很不高兴",
    optionB: "你不太在意",
    reverse: false
  },
  {
    text: "你更喜欢：",
    dimension: "JP",
    optionA: "事先知道约会的详细安排",
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
    optionA: "很早便安排好约会和社交活动",
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
