const uiTexts = {
  zh: {
    languageLabel: "语言",
    pageTitle: "MBTI 人格测试",
    appTitle: "MBTI 人格测试",
    subtitle: "探索你的性格类型，了解真实的自己",
    infoTime: "约 8 分钟",
    infoTypes: "16 种人格",
    startTest: "开始测试",
    viewQuestionBank: "查看题库",
    disclaimer: "本测试基于 MBTI 理论，仅供参考",
    prev: "上一题",
    questionBankTitle: "题库内容",
    back: "返回",
    filterLabel: "筛选维度：",
    filterAll: "全部",
    dimensions: {
      EI: "E-I (外向-内向)",
      SN: "S-N (实感-直觉)",
      TF: "T-F (思考-情感)",
      JP: "J-P (判断-感知)"
    },
    resultTitle: "测试完成！",
    resultSubtitle: "你的人格类型是",
    resultLabels: {
      eLeft: "外向 (E)",
      eRight: "内向 (I)",
      sLeft: "实感 (S)",
      sRight: "直觉 (N)",
      tLeft: "思考 (T)",
      tRight: "情感 (F)",
      jLeft: "判断 (J)",
      jRight: "感知 (P)"
    },
    shareResult: "分享结果",
    restartTest: "重新测试",
    optionIndicatorFirst: "倾向第一字母",
    optionIndicatorSecond: "倾向第二字母",
    toastCopied: "结果已复制到剪贴板！",
    toastShareFailed: "分享失败，请手动复制",
    shareTitle: "MBTI人格测试结果",
    shareText: (type, typeInfo) => `我的MBTI人格类型是 ${type} - ${typeInfo.name}（${typeInfo.nickname}）！快来测测你的人格类型吧！`,
    questionCount: (count) => `${count} 道题目`
  },
  en: {
    languageLabel: "Language",
    pageTitle: "MBTI Personality Test",
    appTitle: "MBTI Personality Test",
    subtitle: "Explore your personality preferences and know yourself better",
    infoTime: "About 8 minutes",
    infoTypes: "16 personality types",
    startTest: "Start Test",
    viewQuestionBank: "View Question Bank",
    disclaimer: "This test is based on MBTI theory and is for reference only",
    prev: "Previous",
    questionBankTitle: "Question Bank",
    back: "Back",
    filterLabel: "Filter by dimension:",
    filterAll: "All",
    dimensions: {
      EI: "E-I (Extraversion-Introversion)",
      SN: "S-N (Sensing-Intuition)",
      TF: "T-F (Thinking-Feeling)",
      JP: "J-P (Judging-Perceiving)"
    },
    resultTitle: "Test Complete!",
    resultSubtitle: "Your personality type is",
    resultLabels: {
      eLeft: "Extraversion (E)",
      eRight: "Introversion (I)",
      sLeft: "Sensing (S)",
      sRight: "Intuition (N)",
      tLeft: "Thinking (T)",
      tRight: "Feeling (F)",
      jLeft: "Judging (J)",
      jRight: "Perceiving (P)"
    },
    shareResult: "Share Result",
    restartTest: "Retake Test",
    optionIndicatorFirst: "leans to first letter",
    optionIndicatorSecond: "leans to second letter",
    toastCopied: "Result copied to clipboard!",
    toastShareFailed: "Share failed, please copy manually",
    shareTitle: "MBTI Test Result",
    shareText: (type, typeInfo) => `My MBTI type is ${type} - ${typeInfo.name} (${typeInfo.nickname})! Try this MBTI test too!`,
    questionCount: (count) => `${count} questions`
  }
};

const questionsEn = [
  // EI (26)
  { text: "When you need to recharge, you tend to:", optionA: "Meet friends or join social activities", optionB: "Stay home alone and do things you enjoy" },
  { text: "At a large social gathering, you usually:", optionA: "Stay active until late and often leave last", optionB: "Feel drained and want to leave early" },
  { text: "Which activity appeals to you more?", optionA: "A lively party or social event", optionB: "A movie night or chat with close friends at home" },
  { text: "When interacting with new people, you usually:", optionA: "Open up quickly and connect fast", optionB: "Stay quiet at first and need time to relax" },
  { text: "Your social circle is usually:", optionA: "Wide, with many acquaintances", optionB: "Small but close-knit" },
  { text: "People around you usually describe you as:", optionA: "Talkative and energetic", optionB: "Quiet but thoughtful" },
  { text: "In social settings, you tend to:", optionA: "Initiate conversations with many people", optionB: "Have deeper talks with a few familiar people" },
  { text: "You find it easier to:", optionA: "Share your thoughts openly", optionB: "Keep your thoughts to yourself" },
  { text: "In a group, you usually:", optionA: "Introduce people to each other", optionB: "Wait to be introduced" },
  { text: "At social gatherings, you often:", optionA: "Sometimes feel tired", optionB: "Usually enjoy the atmosphere" },
  { text: "You usually:", optionA: "Find it easy to connect with new people", optionB: "Prefer being alone or staying in the corner" },
  { text: "Others usually:", optionA: "Need a long time to really know you", optionB: "Get to know you quickly" },
  { text: "In social situations, you often:", optionA: "Find it hard to start conversations with some people", optionB: "Can talk comfortably with most people" },
  { text: "Can new friends quickly name your interests?", optionA: "Usually yes", optionB: "Usually after some time" },
  { text: "Can you chat easily with different people?", optionA: "Mostly only with people who share your interests", optionB: "With almost anyone" },
  { text: "Can you talk comfortably with almost anyone?", optionA: "Yes, I adapt to different social contexts", optionB: "Only in certain contexts or with certain people" },
  { text: "In a group, you usually:", optionA: "Talk deeply with one or two familiar people", optionB: "Join the group discussion" },
  { text: "At social events, you are more likely to:", optionA: "Be one of the more talkative people", optionB: "Listen more to others" },
  { text: "Your preferred work environment is:", optionA: "Open office with frequent interaction", optionB: "Independent space for focused work" },
  { text: "On weekends, you tend to:", optionA: "Plan social activities or go out", optionB: "Rest at home or do things alone" },
  { text: "When you get a sudden call or message, you usually:", optionA: "Feel glad someone reached out", optionB: "Feel somewhat interrupted" },
  { text: "In team collaboration, you tend to:", optionA: "Speak up and push discussion forward", optionB: "Listen first, then share your view" },
  { text: "Your preferred communication style is:", optionA: "Face-to-face or phone calls", optionB: "Written messages such as email or chat" },
  { text: "In a training session or meeting, you prefer to:", optionA: "Ask questions and join discussion actively", optionB: "Listen carefully and take notes" },
  { text: "Around strangers, you usually:", optionA: "Greet first and start a conversation", optionB: "Wait for them to speak first or keep polite distance" },
  { text: "When solving problems, you tend to:", optionA: "Discuss with others and gather input", optionB: "Think alone and form your own judgment" },

  // SN (26)
  { text: "You tend to focus more on:", optionA: "Current reality and concrete details", optionB: "Future possibilities and imagination" },
  { text: "You are more likely to trust:", optionA: "Reliable experience and facts", optionB: "Intuition and inspiration" },
  { text: "For something already working well, your attitude is:", optionA: "Keep it as it is", optionB: "There is always room to improve and innovate" },
  { text: "When having a deep conversation with familiar people, you prefer to discuss:", optionA: "Future possibilities and new ideas", optionB: "Practical and concrete present matters" },
  { text: "When handling a problem, you prefer to:", optionA: "Understand the big picture first", optionB: "Master concrete details first" },
  { text: "You would rather:", optionA: "Focus on the real world", optionB: "Explore imagination and possibilities" },
  { text: "When learning a new topic, what attracts you more?", optionA: "Concrete cases and factual data", optionB: "Abstract theories and conceptual models" },
  { text: "You collaborate more smoothly with people who:", optionA: "Have imagination and propose fresh ideas", optionB: "Are practical and execution-focused" },
  { text: "You would rather be seen as:", optionA: "Practical and realistic", optionB: "Creative and insightful" },
  { text: "You tend to choose friends who:", optionA: "Often suggest new ideas", optionB: "Are grounded and practical" },
  { text: "When doing something everyone does, you prefer to:", optionA: "Follow established methods", optionB: "Try new methods" },
  { text: "You usually prefer subjects that are:", optionA: "About concepts and principles", optionB: "About facts and data" },
  { text: "When reading for fun, you tend to:", optionA: "Enjoy novel or innovative expressions", optionB: "Prefer direct and straightforward narration" },
  { text: "When facing a new project, which guidance do you trust more?", optionA: "Clear steps and executable details", optionB: "Space to explore direction and innovate" },
  { text: "When facing problems, you tend to:", optionA: "Use proven methods", optionB: "Analyze and seek new solutions" },
  { text: "Which teammates attract you more?", optionA: "People who connect ideas and propose new viewpoints", optionB: "People who value experience and practical delivery" },
  { text: "You value more:", optionA: "Practical capability", optionB: "Innovative ideas" },
  { text: "When making decisions, you focus more on:", optionA: "Existing facts and data", optionB: "Predictions and future possibilities" },
  { text: "When reading instructions, you focus more on:", optionA: "Specific steps", optionB: "Overall principles" },
  { text: "When learning a new skill, you prefer:", optionA: "Hands-on practice and concrete examples", optionB: "Understanding the underlying theory" },
  { text: "When describing a project, you tend to:", optionA: "Explain concrete details", optionB: "Outline the overall framework and vision" },
  { text: "You prefer to:", optionA: "Complete tasks step by step", optionB: "Explore new methods and possibilities" },
  { text: "When solving a problem, your first move is usually:", optionA: "Review similar past experience", optionB: "Think of a fresh solution" },
  { text: "You appreciate more:", optionA: "Experience and common sense", optionB: "Insight and innovation" },
  { text: "When writing, you tend to:", optionA: "Describe concrete facts and details", optionB: "Express abstract ideas and concepts" },
  { text: "You pay more attention to:", optionA: "Immediate practical needs", optionB: "Long-term development trends" },

  // TF (26)
  { text: "When making decisions, you tend to:", optionA: "Rely on logical analysis", optionB: "Consider others' feelings and values" },
  { text: "You are more likely to notice:", optionA: "Moments when others need emotional support", optionB: "Logical flaws in others' reasoning" },
  { text: "When a plan does not go as expected, you usually:", optionA: "Address emotional impact first, then adjust", optionB: "Analyze causes first, then make a plan" },
  { text: "In relationships, you value more:", optionA: "Emotional resonance and understanding", optionB: "Intellectual fit and rational communication" },
  { text: "When you disagree with someone, you tend to:", optionA: "Avoid hurting their feelings", optionB: "Point out issues directly and discuss facts first" },
  { text: "People who know you tend to describe you as:", optionA: "Warm and sensitive", optionB: "Logical and clear" },
  { text: "You see most interactions with others as:", optionA: "Friendly and meaningful", optionB: "Purpose-oriented" },
  { text: "In important decisions, you usually rely more on:", optionA: "Values and feelings", optionB: "Logic and evidence" },
  { text: "You value more:", optionA: "Harmony in relationships", optionB: "Objective analytical outcomes" },
  { text: "What are people more likely to praise in you?", optionA: "Efficiency and clear judgment", optionB: "Empathy and care for others" },
  { text: "When deciding, what matters more to you?", optionA: "Facts and logic", optionB: "Others' feelings and perspectives" },
  { text: "You see yourself as more:", optionA: "Firm and objective", optionB: "Compassionate and understanding" },
  { text: "Which compliment do you value more?", optionA: "Rational person", optionB: "Sensitive person" },
  { text: "You are more likely to notice:", optionA: "When people need emotional support", optionB: "When arguments are illogical" },
  { text: "Which ability feels more important to you?", optionA: "Thinking logically", optionB: "Empathizing with others" },
  { text: "When a friend is in trouble, you tend to:", optionA: "Offer emotional support and comfort", optionB: "Offer practical advice and solutions" },
  { text: "In arguments, you focus more on:", optionA: "Protecting the relationship and avoiding harm", optionB: "Expressing truth and logic" },
  { text: "When evaluating others, you value more:", optionA: "Their goodwill and intentions", optionB: "Their capability and results" },
  { text: "When receiving criticism, you usually:", optionA: "Feel hurt and need time to recover", optionB: "Analyze it rationally and assess usefulness" },
  { text: "At work, you care more about:", optionA: "Team harmony and morale", optionB: "Efficiency and outcomes" },
  { text: "When giving feedback, you tend to:", optionA: "Use tact and protect feelings", optionB: "Be direct and point out issues" },
  { text: "When making major decisions, you tend to:", optionA: "Consider impact on people", optionB: "Focus on logical analysis" },
  { text: "You are more inclined to:", optionA: "Feel with your heart", optionB: "Think with your head" },
  { text: "In conflicts, you tend to:", optionA: "Find common ground and reconcile", optionB: "Analyze and find the best solution" },
  { text: "You appreciate more:", optionA: "Kindness and empathy", optionB: "Fairness and objectivity" },
  { text: "In teams, your usual role is:", optionA: "Mediator who maintains harmony", optionB: "Analyst who provides objective views" },

  // JP (26)
  { text: "If a friend invites you to a last-minute weekend trip, you would:", optionA: "Check your schedule first", optionB: "Pack up and go right away" },
  { text: "In a team activity, if someone is late:", optionA: "You prefer to keep the flow on schedule", optionB: "You can usually adjust flexibly" },
  { text: "You prefer to:", optionA: "Know detailed activity arrangements in advance", optionB: "Let things unfold naturally with less planning" },
  { text: "Your lifestyle tends to be more:", optionA: "Planned and structured", optionB: "Flexible and spontaneous" },
  { text: "Which situation is more common for you?", optionA: "You are on time while others are late", optionB: "Others are on time while you are late" },
  { text: "You prefer to:", optionA: "Make clear decisions", optionB: "Keep options open" },
  { text: "At work, you tend to:", optionA: "Focus on one thing until done", optionB: "Handle multiple tasks in parallel" },
  { text: "When going out for a day, you usually:", optionA: "Plan what to do and when", optionB: "Go with the flow" },
  { text: "You see yourself as more:", optionA: "Spontaneous", optionB: "Organized" },
  { text: "When handling many things, you tend to:", optionA: "Act as inspiration strikes", optionB: "Follow a plan" },
  { text: "Following a schedule:", optionA: "Feels right to you", optionB: "Feels restrictive" },
  { text: "For a special task, you prefer to:", optionA: "Plan carefully before starting", optionB: "Start and figure it out as you go" },
  { text: "In most situations, you choose to:", optionA: "Go with the flow", optionB: "Follow a plan" },
  { text: "You prefer to:", optionA: "Arrange social activities early", optionB: "Decide based on mood at the time" },
  { text: "When planning a trip, you prefer to:", optionA: "Follow your feeling on the day", optionB: "Know most of the schedule in advance" },
  { text: "In daily work, you tend to:", optionA: "Handle urgent surprises", optionB: "Plan ahead to reduce pressure" },
  { text: "To finish a big project in a week, you would:", optionA: "List tasks and do them in order", optionB: "Start immediately" },
  { text: "Working by a schedule:", optionA: "Sometimes necessary, but not preferred", optionB: "Usually helpful and preferred" },
  { text: "When facing deadlines, you usually:", optionA: "Finish early", optionB: "Finish at the last minute" },
  { text: "Your desk or room is usually:", optionA: "Neat and orderly", optionB: "A bit messy but personally meaningful" },
  { text: "For the future, you tend to:", optionA: "Set clear goals and plans", optionB: "Keep it open and adapt" },
  { text: "You prefer:", optionA: "Certainty and predictability", optionB: "Flexibility and change" },
  { text: "When making decisions, you tend to:", optionA: "Decide quickly", optionB: "Keep gathering more information" },
  { text: "Your preferred work style is:", optionA: "Clear structure and process", optionB: "Flexible and autonomous" },
  { text: "On vacation, you tend to:", optionA: "Book all itineraries in advance", optionB: "Plan roughly and keep flexibility" },
  { text: "You see yourself as:", optionA: "A planned executor", optionB: "A flexible adapter" }
];

const personalityTypesEn = {
  "INTJ": {
    name: "Architect",
    nickname: "Strategist",
    description: "INTJs usually prefer long-term planning and systematic thinking. They like turning complex goals into clear execution paths and setting high standards for quality."
  },
  "INTP": {
    name: "Logician",
    nickname: "Thinker",
    description: "INTPs are often drawn to concepts, models, and underlying principles. They tend to evaluate decisions through analysis and keep an open mind for alternative ideas."
  },
  "ENTJ": {
    name: "Commander",
    nickname: "Organizer",
    description: "ENTJs often enjoy setting direction and driving execution. They focus on efficiency, structure, and outcomes, and frequently take ownership in team settings."
  },
  "ENTP": {
    name: "Debater",
    nickname: "Innovator",
    description: "ENTPs usually think quickly, generate ideas, and explore possibilities. They are comfortable with change and often stimulate discussion to discover better options."
  },
  "INFJ": {
    name: "Advocate",
    nickname: "Insight Seeker",
    description: "INFJs tend to care about meaning and values while seeing patterns in people and systems. They often combine empathy with structured action toward long-term goals."
  },
  "INFP": {
    name: "Mediator",
    nickname: "Idealist",
    description: "INFPs usually value authenticity, inner alignment, and personal meaning. They often make choices by balancing their principles with compassion for others."
  },
  "ENFJ": {
    name: "Protagonist",
    nickname: "Guide",
    description: "ENFJs are often relationship-focused and skilled at building consensus. They naturally support people and help teams move forward with shared purpose."
  },
  "ENFP": {
    name: "Campaigner",
    nickname: "Catalyst",
    description: "ENFPs are typically energetic, imaginative, and opportunity-driven. They enjoy experimentation and can inspire others through vision and enthusiasm."
  },
  "ISTJ": {
    name: "Logistician",
    nickname: "Executor",
    description: "ISTJs usually value reliability, order, and accountability. They prefer clear plans, careful execution, and consistent standards in work and daily life."
  },
  "ISFJ": {
    name: "Defender",
    nickname: "Supporter",
    description: "ISFJs are often dependable and detail-oriented, with strong awareness of practical needs. They help maintain stability through steady and thoughtful effort."
  },
  "ESTJ": {
    name: "Executive",
    nickname: "Manager",
    description: "ESTJs typically organize people and processes efficiently. They prioritize clarity, structure, and timely delivery, especially in goal-oriented environments."
  },
  "ESFJ": {
    name: "Consul",
    nickname: "Coordinator",
    description: "ESFJs usually care about cooperation and group cohesion. They are attentive to others and often keep teams aligned through active communication."
  },
  "ISTP": {
    name: "Virtuoso",
    nickname: "Pragmatist",
    description: "ISTPs often prefer hands-on problem-solving and practical experimentation. They adapt quickly, focus on what works, and respond well in dynamic situations."
  },
  "ISFP": {
    name: "Adventurer",
    nickname: "Creator",
    description: "ISFPs usually value personal expression and lived experience. They tend to be flexible, considerate, and motivated by authenticity in decisions and relationships."
  },
  "ESTP": {
    name: "Entrepreneur",
    nickname: "Action Driver",
    description: "ESTPs are often fast-moving, practical, and opportunity-aware. They like real-world action, quick feedback loops, and adaptive decision-making."
  },
  "ESFP": {
    name: "Entertainer",
    nickname: "Experiencer",
    description: "ESFPs are typically expressive, people-oriented, and present-focused. They energize groups and adapt fluidly while emphasizing concrete experience."
  }
};
