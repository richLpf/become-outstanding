import React, { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Brain,
  MessageSquare,
  Target,
  Repeat,
  GraduationCap,
  UtensilsCrossed,
  Clock,
  Compass,
  ListChecks,
  Layers,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { CATEGORIES, PLANNED_MODULES } from '../data/categories';
import { ARTICLES } from '../data/articles';
import { PlannedModule } from '../types';
import { PlannedModal } from '../components/Modal';

interface HomePageProps {
  onNavigate: (hash: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeModalModule, setActiveModalModule] = useState<PlannedModule | null>(null);

  // 3 MVP recommendation articles
  const mvpSlugs = [
    'thinking-fast-and-slow',
    'focus-one-step-at-a-time',
    'habits-start-from-problem',
  ];
  const recommendedArticles = ARTICLES.filter((a) =>
    mvpSlugs.includes(a.slug)
  );

  // Icon mapping for 6 categories
  const categoryIcons: Record<string, React.ReactNode> = {
    cognition: <Brain className="w-5 h-5 text-blue-600" />,
    language: <MessageSquare className="w-5 h-5 text-indigo-600" />,
    method: <Target className="w-5 h-5 text-sky-600" />,
    habit: <Repeat className="w-5 h-5 text-teal-600" />,
    learning: <GraduationCap className="w-5 h-5 text-blue-700" />,
    ability: <UtensilsCrossed className="w-5 h-5 text-amber-700" />,
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-stone-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs text-stone-600 font-medium bg-stone-100 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>个人成长知识库与实践记录</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-tight mb-6">
            把成长，落实到每一天
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-stone-600 leading-relaxed font-normal mb-10">
            从认知、表达、习惯与学习出发，整理那些值得理解，也值得实践的方法。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('#/guide/thinking-fast-and-slow')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-all shadow-xs group"
            >
              <span>开始阅读</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onNavigate('#/about')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-stone-700 bg-white hover:bg-stone-50 border border-stone-200 rounded-xl transition-colors"
            >
              <span>了解这个站点</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. SITE INTRODUCTION */}
      <section className="py-16 md:py-20 border-b border-stone-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight mb-3">
              一个拒绝焦虑的知识站点
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              我们不探讨无法复现的奇迹，只专注于现实可控的改变。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border border-stone-200 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4 font-semibold text-sm">
                01
              </div>
              <h3 className="font-serif font-bold text-base text-stone-900 mb-2">
                知识与实践并重
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                这里整理个人成长相关的核心知识与实践方法。既讲清底层的来龙去脉，也给出接地气的行动方案。
              </p>
            </div>

            <div className="p-6 bg-white border border-stone-200 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4 font-semibold text-sm">
                02
              </div>
              <h3 className="font-serif font-bold text-base text-stone-900 mb-2">
                灵活自如的入口
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                读者可以按六大主题系统阅读，也可以从当下正在遇到的具体困扰（如分心、拖延、沟通）随时切入。
              </p>
            </div>

            <div className="p-6 bg-white border border-stone-200 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4 font-semibold text-sm">
                03
              </div>
              <h3 className="font-serif font-bold text-base text-stone-900 mb-2">
                一个可尝试的小行动
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                每篇文章尽量包含核心观点、生活中的真实案例，以及一个今天就能尝试的微行动，在日常中获得正反馈。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GROWTH THEMES (6 SECTIONS) */}
      <section className="py-16 md:py-24 border-b border-stone-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-semibold text-blue-700 tracking-wider uppercase mb-1">
                主题知识体系
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                六大成长主题
              </h2>
            </div>
            <p className="text-sm text-stone-500 max-w-md">
              涵盖思维、语言、习惯到具体生活技能，构建稳固且舒适的个人成长基底。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => {
              // Calculate articles in category
              const allCategoryArticles = ARTICLES.filter(
                (a) => a.categoryId === cat.id
              );
              const publishedCount = allCategoryArticles.filter(
                (a) => a.status === 'published'
              ).length;
              const firstSlug =
                cat.subcategories[0]?.articleSlugs[0] || 'thinking-fast-and-slow';

              return (
                <div
                  key={cat.id}
                  onClick={() => onNavigate(`#/guide/${firstSlug}`)}
                  className="bg-white border border-stone-200 hover:border-blue-300 rounded-2xl p-6 transition-all hover:shadow-xs cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-stone-100/80 flex items-center justify-center">
                        {categoryIcons[cat.id]}
                      </div>
                      <div className="text-xs text-stone-500">
                        {publishedCount > 0 ? (
                          <span className="text-emerald-700 font-medium">
                            已上线 {publishedCount} 篇
                          </span>
                        ) : (
                          <span className="text-stone-400">筹备中</span>
                        )}
                      </div>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-stone-900 group-hover:text-blue-700 transition-colors mb-1.5">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-medium text-stone-500 mb-3">
                      {cat.tagline}
                    </p>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-blue-700 group-hover:text-blue-800">
                    <span>进入板块目录</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. RECOMMENDED STARTING POINTS (3 MVP ARTICLES) */}
      <section className="py-16 md:py-24 border-b border-stone-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="text-xs font-semibold text-blue-700 tracking-wider uppercase mb-1">
              新手推荐
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight mb-3">
              推荐起点：三篇核心文章
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              精选首批完整上线的核心篇章，文风自然具体，附带可落地的微小实践。
            </p>
          </div>

          <div className="space-y-4">
            {recommendedArticles.map((article, idx) => (
              <div
                key={article.slug}
                onClick={() => onNavigate(`#/guide/${article.slug}`)}
                className="bg-white border border-stone-200 hover:border-blue-400 rounded-2xl p-6 sm:p-7 transition-all cursor-pointer group hover:shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-blue-600">
                      0{idx + 1}
                    </span>
                    <span className="text-xs text-stone-400">/</span>
                    <span className="text-xs font-medium text-stone-500">
                      {article.categoryTitle} · {article.subcategoryTitle}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-stone-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readingTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-stone-900 group-hover:text-blue-700 transition-colors mb-2">
                  {article.title}
                </h3>

                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  {article.summary}
                </p>

                <div className="flex items-center text-xs font-medium text-blue-700 group-hover:text-blue-800 gap-1">
                  <span>立即阅读全文</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FUTURE EXPANSIONS (PLANNED) */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 tracking-tight mb-2">
              更多进阶功能规划中
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              后续将逐步推出更具操作性的学习辅助工具，点击查看设计构想。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PLANNED_MODULES.map((mod) => (
              <button
                key={mod.id}
                onClick={() => setActiveModalModule(mod)}
                className="bg-stone-50 hover:bg-white border border-stone-200 hover:border-blue-300 rounded-xl p-5 text-left transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-stone-200/70 text-stone-600 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                    {mod.status}
                  </span>
                  <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5" />
                </div>
                <h4 className="font-serif font-bold text-base text-stone-900 mb-1 group-hover:text-blue-700 transition-colors">
                  {mod.title}
                </h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  {mod.tagline}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Planned Module Modal */}
      <PlannedModal
        module={activeModalModule}
        onClose={() => setActiveModalModule(null)}
        onExploreGuides={() => onNavigate('#/guide')}
      />
    </div>
  );
};
