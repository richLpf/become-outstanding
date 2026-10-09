import React from 'react';
import { ArrowRight, BookOpen, Compass, CheckCircle2, HeartHandshake } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (hash: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] py-12 lg:py-16">
      <div className="max-w-[720px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <header className="mb-12 pb-8 border-b border-stone-200">
          <div className="text-xs font-semibold text-blue-700 uppercase tracking-widest mb-2">
            关于这个站点
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight leading-snug mb-4">
            为什么记录，以及如何使用这里
          </h1>
          <p className="text-stone-600 text-base leading-relaxed">
            这是一个纯粹的个人知识整理与成长实践站点。没有急功近利的成功学，只有从现实生活与思考中慢慢沉淀下来的方法。
          </p>
        </header>

        {/* Content sections */}
        <div className="space-y-12 text-[17px] leading-[1.8] text-stone-800">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-5 bg-blue-600 rounded-full inline-block" />
              <span>为什么建立这个站点</span>
            </h2>
            <p>
              在过去很长一段时间里，我和许多人一样，经历过很长周期的「成长焦虑」。市面上充斥着各种极速逆袭、几十天掌握某项能力的口号，它们往往让人在最初热血沸腾，但在面对日常生活的繁杂与阻力时，又迅速陷入疲惫和自我苛责。
            </p>
            <p>
              后来我渐渐意识到，真正的成长很少是一夜之间的剧变，而是在真实生活里逐步校准思考方式、说话习惯和做事节奏。因此，我决定搭建这个安静的角落，把散落在书本、笔记和个人踩坑经验中的有效思路梳理出来，既作为自己的参照体系，也希望对路过的你有所启发。
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-5 bg-blue-600 rounded-full inline-block" />
              <span>我希望记录什么</span>
            </h2>
            <p>
              站点围绕六个与个人现实生活休戚相关的维度展开：
            </p>
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 my-4 space-y-2 text-stone-700 text-sm leading-relaxed">
              <p><strong className="text-stone-900">认知篇：</strong>理解我们大脑的运作偏误，学会在关键节点按下暂停键，练习在混乱中收拢专注。</p>
              <p><strong className="text-stone-900">语言篇：</strong>学习把事情讲清楚，不带攻击性地表达观点，真诚地理解他人的处境与诉求。</p>
              <p><strong className="text-stone-900">方法篇：</strong>把大而无当的目标拆解为手头能做的小事，建立健康的反馈与复盘机制。</p>
              <p><strong className="text-stone-900">习惯篇：</strong>不把习惯归因于意志力高低，而是探寻无意识应对背后的真正需求，以温和替代取代严厉压抑。</p>
              <p><strong className="text-stone-900">学习篇：</strong>摆脱死记硬背的假用功，转向深度理解概念、刻意练习与反思沉淀。</p>
              <p><strong className="text-stone-900">能力篇：</strong>回归柴米油盐的具体生活技能，先从独立做好一顿饭、照顾好自己的衣食住行开始。</p>
            </div>
            <p>
              每一篇文字，我都会尽量遵守一个朴素的结构：阐述一个核心观点，列举一个现实生活中的具体情境，并附带一个今天就能上手尝试的微小行动。
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-5 bg-blue-600 rounded-full inline-block" />
              <span>内容如何更新</span>
            </h2>
            <p>
              这是一个渐进式扩充的静态知识库。我并不打算为了追求数量而拼凑空泛的文字。
            </p>
            <p>
              目前目录中已经完整上线了首批核心篇章（包括《理解大脑：思考快与慢》、《专注：先做好眼前的一步》、《习惯：从想解决的问题开始》），其余主题在目录中保留了清晰的入口，标明「筹备中」。随着实践与反思的深入，新的文章会逐篇填补进来。
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-5 bg-blue-600 rounded-full inline-block" />
              <span>如何使用这个站点</span>
            </h2>
            <p>
              你不需要按照目录从头到尾苦读。你可以：
            </p>
            <ul className="list-disc pl-5 space-y-2 text-stone-700 text-base">
              <li>当你今天感到做事心浮气躁时，读读关于「专注」和「思考快与慢」的短文；</li>
              <li>当你感到改不掉某个下意识动作时，看看「习惯」篇里对大脑防御机制的解释；</li>
              <li>挑一个文末的「小行动」，在今天尝试一次，感受身体和情绪的细微改变。</li>
            </ul>
          </section>

          {/* Signoff */}
          <div className="pt-8 border-t border-stone-200 text-stone-600">
            <p className="text-base leading-relaxed">
              感谢你来到这里。愿我们在各自的生活轨道上，少一点焦虑的追赶，多一份沉静的笃定。
            </p>
            <div className="mt-4 font-serif font-semibold text-stone-900">
              —— 站点作者
            </div>
          </div>

          {/* Call to action */}
          <div className="pt-6">
            <button
              onClick={() => onNavigate('#/guide')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl transition-colors shadow-xs"
            >
              <span>前往成长指南开始阅读</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
