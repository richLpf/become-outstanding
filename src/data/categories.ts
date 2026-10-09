import { Category, PlannedModule } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'cognition',
    title: '认知篇',
    tagline: '理解思考方式，练习专注',
    description: '审视大脑运转的底层规律，识别直觉偏差，在纷乱信息中收回专注力。',
    subcategories: [
      {
        id: 'understanding-brain',
        title: '理解大脑',
        articleSlugs: ['thinking-fast-and-slow'],
      },
      {
        id: 'focus',
        title: '专注',
        articleSlugs: [
          'focus-one-step-at-a-time',
          'eat-chop-carry',
          'climbing-watch-steps',
        ],
      },
    ],
  },
  {
    id: 'language',
    title: '语言篇',
    tagline: '沟通、表达与理解他人',
    description: '把脑海中的模糊想法说清楚，倾听他人背后的感受与需求。',
    subcategories: [
      {
        id: 'eq-communication',
        title: '情商与沟通',
        articleSlugs: ['nonviolent-communication'],
      },
      {
        id: 'expression',
        title: '表达能力',
        articleSlugs: ['how-to-explain-clearly'],
      },
    ],
  },
  {
    id: 'method',
    title: '方法篇',
    tagline: '把目标转化为可执行的方法',
    description: '拆解庞大任务，建立反馈回路，在不断复盘中形成适合自己的工作节奏。',
    subcategories: [
      {
        id: 'execution',
        title: '目标与行动',
        articleSlugs: ['goal-breakdown', 'review-and-adjust'],
      },
    ],
  },
  {
    id: 'habit',
    title: '习惯篇',
    tagline: '理解习惯如何形成和改变',
    description: '习惯是应对生活问题的无意识策略。探寻触发情境，用替代行为慢慢替换。',
    subcategories: [
      {
        id: 'habit-building',
        title: '习惯与问题解决',
        articleSlugs: ['habits-start-from-problem', 'build-a-micro-habit'],
      },
    ],
  },
  {
    id: 'learning',
    title: '学习篇',
    tagline: '改善理解、练习和复盘',
    description: '不仅是记忆，而是深度的概念理解、刻意练习与及时的学习复盘。',
    subcategories: [
      {
        id: 'learning-methods',
        title: '认知与复盘',
        articleSlugs: ['understand-and-practice', 'how-to-do-learning-review'],
      },
    ],
  },
  {
    id: 'ability',
    title: '能力篇',
    tagline: '积累具体的生活技能',
    description: '回归具体生活，掌握照顾好自己的实操手艺，先从一碗热腾腾的饭开始。',
    subcategories: [
      {
        id: 'cooking',
        title: '做饭',
        articleSlugs: [
          'tomato-egg-noodles',
          'tomato-egg-rice',
          'henan-braised-noodles',
        ],
      },
    ],
  },
];

export const PLANNED_MODULES: PlannedModule[] = [
  {
    id: 'routes',
    title: '成长路线',
    tagline: '系统化成长路径导航',
    status: '规划中',
    description: '为不同阶段的读者提供结构化的阅读进阶路线，例如「专注力重建30天」、「清晰表达入门路线」等，串联起多篇文章与实操练习。',
    roadmap: [
      '梳理文章前置与后置知识依赖关系',
      '设计阶梯式周次实践任务',
      '增加进度标记与阶段自查清单',
    ],
  },
  {
    id: 'checklists',
    title: '实践清单',
    tagline: '随手可查的微行动工具',
    status: '规划中',
    description: '提炼每篇文章中的「可尝试的小行动」，汇聚成可打印、可打勾的日常实践卡片，方便在真实工作与生活中随手执行。',
    roadmap: [
      '提取已上线文章的小行动步骤',
      '提供极简纸张打印版排版样式',
      '支持本地浏览器端勾选与反思笔记保存',
    ],
  },
  {
    id: 'index',
    title: '主题索引',
    tagline: '按现实困惑与关键词检索',
    status: '规划中',
    description: '打破篇章目录，提供如「容易拖延」、「沟通有冲突」、「做事抓不住重点」等按困惑分类的双向交叉索引。',
    roadmap: [
      '建立生活痛点与具体文章的映射表',
      '提供首字母与关键词标签矩阵',
      '支持多标签交叉筛选',
    ],
  },
];
