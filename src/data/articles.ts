import { Article } from '../types';

export const ARTICLES: Article[] = [
  // 1. MVP Article 1
  {
    slug: 'thinking-fast-and-slow',
    title: '理解大脑：思考快与慢',
    summary: '直觉帮我们快速应对生活，审慎思考帮我们看清复杂局势。认识大脑的两种工作机制，学会适时按下暂停键。',
    categoryId: 'cognition',
    categoryTitle: '认知篇',
    subcategoryId: 'understanding-brain',
    subcategoryTitle: '理解大脑',
    readingTime: '5 分钟',
    status: 'published',
    updatedAt: '2026-03-15',
    intro: [
      '在日常生活中，我们常常会惊叹于自己下意识的反应，有时也懊悔于脱口而出的冲动话语。',
      '人的大脑并不是一台完全理性的超级计算机，而是由两种不同的思考模式在协作运转：一种像自动驾驶，快速、省力、依靠直觉；另一种像手动精密操作，缓慢、专注、消耗能量。',
      '了解这两种模式的差异，不是为了否定直觉，而是为了让我们在真正关键的时刻，懂得如何从容换挡。',
    ],
    sections: [
      {
        id: 'two-systems-difference',
        title: '直觉与审慎：大脑的节能之道',
        level: 2,
        paragraphs: [
          '快思考是大脑赖以生存的基础机制。走在熟悉的马路上、看见朋友脸上的微笑、或者算简单的「2 + 2」，你的大脑几乎瞬间就给出了反应。它自动运行，不消耗太多意志力。如果生活中的每一个琐碎动作都要停下来计算推敲，我们早就因为精力耗尽而无法生存。',
          '慢思考则是调用深度专注的审慎机制。试着在心里算一下「17 × 24」，或者在拥挤陌生的路口寻找停车位，你会立刻感觉到注意力在收缩，瞳孔放大，心跳略微加快。这种思考虽然清晰周密，但极其耗能，大脑会本能地尽量减少使用它。',
        ],
        quote: '快思考与慢思考并没有高下之分。快思考保证了生存效率，慢思考守护着关键决策的质量。',
      },
      {
        id: 'daily-life-examples',
        title: '生活中的常见错觉',
        level: 2,
        paragraphs: [
          '日常里的许多摩擦与误判，往往源于把快思考的猜测当成了慢思考的事实。',
          '例如，在即时通讯软件里看到同事一句简短的回复「好的」，快思考可能会立刻捕捉到冷淡与敷衍的信号，进而产生不安或愤怒；又或者在商场看到一件标着高昂原价后打折的衣服，快思考会瞬间觉得「划算」，而忽略了自己究竟是否真的需要它。',
          '直觉擅长填补信息的空白并自圆其说，但它往往把「容易想到的事」等同于「真实发生的事」。',
        ],
        list: [
          '把别人的简短回应直接解读为针对自己的情绪（直觉推测）。',
          '因为某个选项看起来熟悉，就轻信其风险很低（熟悉感偏差）。',
          '在疲惫或饥饿时草率做决定，因为慢思考已经没有足够的能量运转。',
        ],
      },
      {
        id: 'when-to-pause',
        title: '什么时候值得停下来想一想？',
        level: 2,
        paragraphs: [
          '我们不需要在所有事情上都开启慢思考，那样会陷入无休止的反刍和行动瘫痪。真正值得我们主动按下暂停键的，通常有这几类情境：',
        ],
        list: [
          '情绪处于波峰时：愤怒、委屈或极度兴奋时，千万不要立刻回复重要邮件或做出承诺。',
          '涉及不可逆的高成本投入：租房买房、签订合同、重大职业转换。',
          '当你觉得自己一眼就彻底看清了全貌、完全确定对方居心不良时，往往正是盲区最大的时刻。',
        ],
      },
      {
        id: 'practical-exercise',
        title: '今天可以尝试的微行动',
        level: 2,
        paragraphs: [
          '改变思考方式不能只靠意志力，需要建立一个具体的物理缓冲点。',
        ],
        actionBox: {
          title: '小行动：3 秒停顿与反向提问',
          description: '今天在遇到任何令你心头一紧、或者想要立刻反驳的信息时，不要马上开口。',
          actionStep: '做一次深长的呼吸，在心里默数 3 秒，然后轻轻问自己一个问题：「如果事情完全不是我想的那样，还有哪种合理解释？」记录下你心境的微妙变化。',
        },
      },
    ],
    takeaways: [
      '快思考负责绝大多数日常生活运转，它迅速而省力，但也容易受到第一印象的偏见影响。',
      '慢思考需要主动唤醒，在涉及重大承诺、强烈情绪或复杂判断时，它是不可或缺的安全锁。',
      '不必强求时刻保持理性，只需在关键节点为自己留出 3 秒钟的换挡空间。',
    ],
  },

  // 2. MVP Article 2
  {
    slug: 'focus-one-step-at-a-time',
    title: '专注：先做好眼前的一步',
    summary: '生活里的焦虑常来自对终点的悬心。从「吃饭挑水」到「爬山看路」，把注意力收拢回当下可触及的动作。',
    categoryId: 'cognition',
    categoryTitle: '认知篇',
    subcategoryId: 'focus',
    subcategoryTitle: '专注',
    readingTime: '6 分钟',
    status: 'published',
    updatedAt: '2026-03-15',
    intro: [
      '很多人以为专注是一种强大的精神自律，必须屏气凝神、摒弃杂念。',
      '但真实的专注，往往不是靠对抗分心来获得的，而是靠不断把注意力温柔地拉回眼前最小的动作。',
      '当我们感到焦躁、无法静下心时，通常不是手头的事情太难，而是我们的心已经提前跑到了明天、下周，或者那个还看不清结果的终点。',
    ],
    sections: [
      {
        id: 'two-metaphors',
        title: '两个朴素的比喻：吃饭挑水与登山看路',
        level: 2,
        paragraphs: [
          '古人常讲一个简单的道理：未悟道前，吃饭、挑水、砍柴；悟道之后，依然是吃饭、挑水、砍柴。',
          '区别在哪里？普通人在吃饭的时候，脑子里在想着砍柴；在挑水的时候，心里在担忧柴火够不够用；在砍柴的时候，又在算计明天能不能吃饱。结果是饭没尝出滋味，柴砍得心不在焉，水也洒了一地。',
          '另一个比喻是爬高山。站在山脚仰望高耸入云的峰顶，任何人都会感到双腿发沉、心生退意。经验丰富的登山者都知道，想要翻过长长的垭口，唯一能做的事情不是紧盯着山巅，而是低头把目光落回眼前一米以内的路面上，踩实脚下的这一块石头，再迈出下一步。',
        ],
        quote: '你不可能走完未来的一千步，你所能真正控制的，只有脚掌正在触碰的这一寸泥土。',
      },
      {
        id: 'distraction-scenes',
        title: '为什么我们总在分心？',
        level: 2,
        paragraphs: [
          '分心很少是因为单纯的懒惰，它通常是大脑在逃避眼前的阻力与不确定性。',
          '当你需要写一份复杂的方案或整理乱糟糟的房间时，大脑感知到了潜在的压力。此时，手机屏幕上的一条推送、社交软件里的未读小红点，就成了极具诱惑的避难所。每次在任务之间来回跳跃，大脑都会留下「注意残留」，导致哪怕坐回电脑前，思绪依然如同沸水般难以平静。',
        ],
        list: [
          '任务定义太庞大（如「完成整份报告」），让人不知道第一笔从何下起。',
          '对结果的好坏过早评判，担心写得不好、做得不够体面。',
          '工作环境中充斥着视觉与声音的微小打扰，频繁中断连续思考。',
        ],
      },
      {
        id: 'shrink-action-boundary',
        title: '具体做法：极力缩小动作的物理边界',
        level: 2,
        paragraphs: [
          '要夺回专注，最有效的办法不是催促自己「快点集中精力」，而是把任务缩小到大脑不会产生恐惧的程度。',
          '不要对自己说「今天要把这个项目搞定」，而是问自己：「接下来这五分钟，我的两只手具体要做什么动作？」',
          '是打开文档打出标题？还是拿起抹布擦干净桌面的左上角？一旦动作有了明确的物理边界，注意力就会自然收敛。',
        ],
      },
      {
        id: 'today-action',
        title: '今天可以尝试的微行动',
        level: 2,
        paragraphs: [
          '挑选一件你今天拖延了很久、或者感到有些头疼的事情。',
        ],
        actionBox: {
          title: '小行动：15 分钟「单一动作窗口」',
          description: '找一张白纸或便签，写下你接下来要做的唯一一个动作（例如：仅整理前 3 个文件夹，或仅写出方案的第 1 小节）。',
          actionStep: '手机静音屏幕朝下扣在桌上。设定 15 分钟倒计时，在这 15 分钟内，不管脑海中冒出什么念头，都不离开当前动作。时间一到立即停下，站起来伸个懒腰。',
        },
      },
    ],
    takeaways: [
      '专注的本质不是咬牙坚持，而是把注意力界定在眼前清晰可见的小动作上。',
      '警惕「人在做此，心在忧彼」，吃饭时只管品尝食物，工作时只管写好眼前的句子。',
      '任务太大时，不要和山顶较劲，先踩稳脚下这块石头。',
    ],
  },

  // 3. MVP Article 3
  {
    slug: 'habits-start-from-problem',
    title: '习惯：从想解决的问题开始',
    summary: '习惯不是凭空生长的，它是大脑为了解决现实困扰而养成的自动化解法。看清需求本身，才能温柔地尝试改变。',
    categoryId: 'habit',
    categoryTitle: '习惯篇',
    subcategoryId: 'habit-building',
    subcategoryTitle: '习惯与问题解决',
    readingTime: '5 分钟',
    status: 'published',
    updatedAt: '2026-03-15',
    intro: [
      '我们常常为自己的某些坏习惯感到懊恼：为什么又刷手机刷到深夜？为什么总在压力大的时候吃高糖零食？为什么一有空就瘫在沙发上？',
      '很多人把这些归结为「自己意志力太差」。但心理学和生活经验告诉我们，单靠和意志力死磕，几乎很难长久维持改变。',
      '其实，你的每一个习惯——哪怕是看起来很不健康的习惯——在最初形成的时候，都是大脑为了解决当时某个现实问题而找到的「最佳解法」。',
    ],
    sections: [
      {
        id: 'habits-are-solutions',
        title: '习惯是大脑的自动化应对策略',
        level: 2,
        paragraphs: [
          '习惯不是无缘无故出现的。大脑的核心使命是节省能量并维持情绪的相对平衡。',
          '当你在工作中遇到解不开的难题、或者下班后感到极度空虚疲惫时，你的内心产生了一种真实的负面感受（无聊、受挫、焦虑、孤独）。',
          '这时候，拿起手机刷两分钟短视频，大脑立刻获得了廉价的多巴胺，眼前的烦恼瞬间被遮盖过去。大脑在这一瞬间记住了这个回路：下一次感到难受时，只要掏出手机，难受感就会立刻减弱。久而久之，这个策略变成了自动触发的神经高速公路。',
        ],
        quote: '坏习惯不是你的道德瑕疵，它是大脑在试图照顾你的情绪时，找到的一种低成本却有代价的工具。',
      },
      {
        id: 'same-problem-different-habits',
        title: '同一个问题，可以有完全不同的习惯',
        level: 2,
        paragraphs: [
          '认识到这一点非常关键：底层的需求是真实的，有问题的只是应对它的手段。',
          '感到压力大想放松，有人选择抽烟，有人选择慢跑，有人选择找朋友倾诉，有人选择去洗手间用冷水洗把脸。这些不同习惯背后，解决的其实是同一种身心张力。',
          '如果你只是一味地对自己说「我再也不刷手机了」，等于是在剥夺大脑宣泄压力的唯一通道，而没有给它提供任何替代品。结果必然是在某一个疲倦的瞬间，出现更猛烈的报复性反弹。',
        ],
        list: [
          '需求是中性的：疲劳需要休息，孤独需要连接，无聊需要刺激。',
          '手段是有成本的：暴饮暴食和刷短视频提供了瞬时舒适，却带来了长期的自责与身体负担。',
          '改变的关键不是消灭需求，而是为底层需求寻找成本更低、副作用更小的替代行动。',
        ],
      },
      {
        id: 'replace-dont-suppress',
        title: '如何温和地尝试替代行为？',
        level: 2,
        paragraphs: [
          '想要调整一个习惯，最好的策略是「保留触发情境，替换中间行为」。',
          '当下午三点工作的疲惫感涌上来时，不要试图强迫自己硬着头皮继续死磕。承认自己累了，给自己两分钟时间，但把「划开手机」这个动作，替换为「倒一杯温水喝完」或者「站起身拉伸一下肩膀」。',
          '不要指望第一次替代就能获得短视频那样强烈的刺激，但只要重复几次，大脑就会慢慢建立起新的安全感。',
        ],
      },
      {
        id: 'practical-record',
        title: '今天可以尝试的微行动',
        level: 2,
        paragraphs: [
          '在做出改变之前，先做一次不带评判的侦查员。',
        ],
        actionBox: {
          title: '小行动：捕捉触发瞬间的情绪侦探',
          description: '今天当你再次下意识抓起手机、或者伸手去拿零食的时候，暂停 5 秒钟。',
          actionStep: '不要责怪自己，也不用强行放下它。只是在心里真诚地问自己一句：「我这一刻是肚子饿了，还是心里感到累了、无聊了、或者在逃避什么？」看清这个情绪，你就已经迈出了改变的第一步。',
        },
      },
    ],
    takeaways: [
      '不要和意志力较劲，习惯的背后是大脑在应对具体的问题与情绪压力。',
      '接纳自己背后的真实需求，把关注点从「禁止自己做什么」转向「用什么更健康的行为来照顾自己」。',
      '从一次温和的觉察开始，替代哪怕一次冲动，也是了不起的起点。',
    ],
  },

  // Preparing Articles
  {
    slug: 'eat-chop-carry',
    title: '做事原则：吃饭、砍柴、挑水',
    summary: '借由传统生活场景中的朴素智慧，理解如何摆脱同时处理多件事情的虚假高效，建立专注于单个事项的节奏。',
    categoryId: 'cognition',
    categoryTitle: '认知篇',
    subcategoryId: 'focus',
    subcategoryTitle: '专注',
    readingTime: '约 5 分钟',
    status: 'preparing',
    updatedAt: '2026-03-15',
  },
  {
    slug: 'climbing-watch-steps',
    title: '像爬山一样：先看脚下的路',
    summary: '面对宏大长期目标时的心理调适技巧。探讨如何把长远压力拆解为当下触手可及的踏实台阶。',
    categoryId: 'cognition',
    categoryTitle: '认知篇',
    subcategoryId: 'focus',
    subcategoryTitle: '专注',
    readingTime: '约 5 分钟',
    status: 'preparing',
    updatedAt: '2026-03-15',
  },
  {
    slug: 'nonviolent-communication',
    title: '非暴力沟通',
    summary: '区分观察与评判、体会感受与识别需求，学会在表达自己的同时不引发防御性反抗。',
    categoryId: 'language',
    categoryTitle: '语言篇',
    subcategoryId: 'eq-communication',
    subcategoryTitle: '情商与沟通',
    readingTime: '约 6 分钟',
    status: 'preparing',
    updatedAt: '2026-03-15',
  },
  {
    slug: 'how-to-explain-clearly',
    title: '如何把一件事说清楚',
    summary: '结论先行、框架清晰、因人而异。掌握结构化表达的核心原则，让别人轻松听懂你的核心观点。',
    categoryId: 'language',
    categoryTitle: '语言篇',
    subcategoryId: 'expression',
    subcategoryTitle: '表达能力',
    readingTime: '约 5 分钟',
    status: 'preparing',
    updatedAt: '2026-03-15',
  },
  {
    slug: 'goal-breakdown',
    title: '目标拆解',
    summary: '将模糊宏大的愿望拆解为具象、可度量、每周可执行的具体行动，摆脱制定计划后的无所适从。',
    categoryId: 'method',
    categoryTitle: '方法篇',
    subcategoryId: 'execution',
    subcategoryTitle: '目标与行动',
    readingTime: '约 6 分钟',
    status: 'preparing',
    updatedAt: '2026-03-15',
  },
  {
    slug: 'review-and-adjust',
    title: '复盘与调整',
    summary: '实践过程中的反思框架：回顾目标、评估结果、分析原因、推演得失，并在下一步迭代行动。',
    categoryId: 'method',
    categoryTitle: '方法篇',
    subcategoryId: 'execution',
    subcategoryTitle: '目标与行动',
    readingTime: '约 5 分钟',
    status: 'preparing',
    updatedAt: '2026-03-15',
  },
  {
    slug: 'build-a-micro-habit',
    title: '建立一个小习惯',
    summary: '将新习惯的阻力降低到不可思议的程度（例如每天读 1 页书、做 1 个俯卧撑），利用无负担的微习惯启动滚雪球效应。',
    categoryId: 'habit',
    categoryTitle: '习惯篇',
    subcategoryId: 'habit-building',
    subcategoryTitle: '习惯与问题解决',
    readingTime: '约 5 分钟',
    status: 'preparing',
    updatedAt: '2026-03-15',
  },
  {
    slug: 'understand-and-practice',
    title: '理解与练习',
    summary: '从浅层记忆走向深层心智模型的构建方法。如何通过费曼技巧用自己的话解释，并在实践中获得反馈。',
    categoryId: 'learning',
    categoryTitle: '学习篇',
    subcategoryId: 'learning-methods',
    subcategoryTitle: '认知与复盘',
    readingTime: '约 6 分钟',
    status: 'preparing',
    updatedAt: '2026-03-15',
  },
  {
    slug: 'how-to-do-learning-review',
    title: '如何做学习复盘',
    summary: '阶段性学习之后的梳理工具：提炼核心概念图谱、纠正认知盲点、记录实践心得与遗留疑问。',
    categoryId: 'learning',
    categoryTitle: '学习篇',
    subcategoryId: 'learning-methods',
    subcategoryTitle: '认知与复盘',
    readingTime: '约 5 分钟',
    status: 'preparing',
    updatedAt: '2026-03-15',
  },
  {
    slug: 'tomato-egg-noodles',
    title: '西红柿鸡蛋面',
    summary: '一碗温热家常面的具体做法：番茄炒出浓郁沙汁的火候、鸡蛋松软滑嫩的技巧与面条过水的口感细节。',
    categoryId: 'ability',
    categoryTitle: '能力篇',
    subcategoryId: 'cooking',
    subcategoryTitle: '做饭',
    readingTime: '约 4 分钟',
    status: 'preparing',
    updatedAt: '2026-03-15',
  },
  {
    slug: 'tomato-egg-rice',
    title: '西红柿鸡蛋盖饭',
    summary: '家常快手盖浇饭的调味平衡：酸甜比的掌控、勾芡的浓稠度以及让米饭充分裹住汤汁的要诀。',
    categoryId: 'ability',
    categoryTitle: '能力篇',
    subcategoryId: 'cooking',
    subcategoryTitle: '做饭',
    readingTime: '约 4 分钟',
    status: 'preparing',
    updatedAt: '2026-03-15',
  },
  {
    slug: 'henan-braised-noodles',
    title: '河南卤面',
    summary: '经典中原蒸焖面条的完整工序：先蒸面条后拌酱汁、五花肉与豆角焖透、二次复蒸入味的关键经验。',
    categoryId: 'ability',
    categoryTitle: '能力篇',
    subcategoryId: 'cooking',
    subcategoryTitle: '做饭',
    readingTime: '约 7 分钟',
    status: 'preparing',
    updatedAt: '2026-03-15',
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categoryId: string): Article[] {
  return ARTICLES.filter((a) => a.categoryId === categoryId);
}

export function getAdjacentArticles(slug: string): {
  prev: Article | null;
  next: Article | null;
} {
  const index = ARTICLES.findIndex((a) => a.slug === slug);
  if (index === -1) return { prev: null, next: null };
  const prev = index > 0 ? ARTICLES[index - 1] : null;
  const next = index < ARTICLES.length - 1 ? ARTICLES[index + 1] : null;
  return { prev, next };
}
