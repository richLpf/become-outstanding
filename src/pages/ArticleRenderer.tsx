import React from 'react';
import { Clock, Calendar, CheckCircle2, ChevronRight, ArrowLeft, ArrowRight, Lightbulb, Bookmark } from 'lucide-react';
import { Article } from '../types';
import { getAdjacentArticles } from '../data/articles';

interface ArticleRendererProps {
  article: Article;
  onNavigate: (hash: string) => void;
}

export const ArticleRenderer: React.FC<ArticleRendererProps> = ({
  article,
  onNavigate,
}) => {
  const { prev, next } = getAdjacentArticles(article.slug);

  return (
    <article className="max-w-[720px] mx-auto w-full">
      {/* Breadcrumb */}
      <nav className="flex items-center flex-wrap gap-1.5 text-xs text-stone-500 mb-6">
        <button
          onClick={() => onNavigate('#/')}
          className="hover:text-blue-700 transition-colors"
        >
          首页
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <button
          onClick={() => onNavigate('#/guide')}
          className="hover:text-blue-700 transition-colors"
        >
          成长指南
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-600">{article.categoryTitle}</span>
        {article.subcategoryTitle && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="text-stone-600">{article.subcategoryTitle}</span>
          </>
        )}
      </nav>

      {/* Article Header */}
      <header className="mb-10 pb-8 border-b border-stone-200">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight leading-snug mb-4">
          {article.title}
        </h1>

        {/* Clean unboxed metadata with subtle typographic separators - Zero Pill rule */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-stone-500 mb-6">
          <span className="font-medium text-blue-700">{article.categoryTitle}</span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-stone-400" />
            <span>阅读时长 {article.readingTime}</span>
          </span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-stone-400" />
            <span>更新于 {article.updatedAt}</span>
          </span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span className="flex items-center gap-1 text-emerald-700 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>已发布</span>
          </span>
        </div>

        {/* Article Summary Lead */}
        <div className="bg-stone-100/70 border border-stone-200/90 rounded-xl p-4 sm:p-5 text-stone-700 text-base leading-relaxed">
          <div className="flex items-start gap-2.5">
            <Bookmark className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
            <p className="font-normal">{article.summary}</p>
          </div>
        </div>
      </header>

      {/* Intro paragraphs */}
      {article.intro && article.intro.length > 0 && (
        <div className="space-y-4 mb-10 text-[17px] leading-[1.8] text-stone-800">
          {article.intro.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      )}

      {/* Main Sections */}
      <div className="space-y-12">
        {article.sections?.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="text-2xl font-serif font-bold text-stone-900 tracking-tight mb-4 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-blue-600 rounded-full inline-block" />
              <span>{section.title}</span>
            </h2>

            {/* Section paragraphs */}
            {section.paragraphs && (
              <div className="space-y-4 text-[17px] leading-[1.8] text-stone-800 mb-6">
                {section.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            )}

            {/* Blockquote / Refined callout */}
            {section.quote && (
              <figure className="my-6 p-4 sm:p-5 bg-stone-50 border border-stone-200 rounded-xl">
                <blockquote className="text-[16px] text-stone-700 italic leading-relaxed">
                  “{section.quote}”
                </blockquote>
              </figure>
            )}

            {/* List */}
            {section.list && (
              <ul className="my-5 space-y-2.5 pl-2 text-[16px] text-stone-700 leading-relaxed">
                {section.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Action Box (小行动提示框) */}
            {section.actionBox && (
              <div className="my-8 bg-blue-50/60 border border-blue-200/90 rounded-xl p-5 sm:p-6 shadow-2xs">
                <div className="flex items-center gap-2 text-blue-800 font-semibold text-sm mb-2">
                  <Lightbulb className="w-4 h-4 text-blue-600" />
                  <span>{section.actionBox.title}</span>
                </div>
                <p className="text-stone-700 text-sm leading-relaxed mb-3">
                  {section.actionBox.description}
                </p>
                <div className="bg-white/90 border border-blue-100 rounded-lg p-3.5 text-sm text-stone-800 leading-relaxed font-medium">
                  <span className="text-blue-700 mr-1.5 font-bold">实践步骤：</span>
                  {section.actionBox.actionStep}
                </div>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Key Takeaways */}
      {article.takeaways && article.takeaways.length > 0 && (
        <div className="mt-12 pt-8 border-t border-stone-200">
          <h3 className="text-lg font-serif font-bold text-stone-900 mb-4 flex items-center gap-2">
            <span>核心复盘要点</span>
          </h3>
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 space-y-2.5">
            {article.takeaways.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 text-sm text-stone-700 leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-stone-200/80 text-stone-700 flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Prev / Next Navigation */}
      <nav className="mt-14 pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {prev ? (
          <button
            onClick={() => onNavigate(`#/guide/${prev.slug}`)}
            className="flex-1 p-4 rounded-xl border border-stone-200 hover:border-blue-300 hover:bg-stone-50 transition-all text-left group"
          >
            <div className="flex items-center gap-1.5 text-xs text-stone-400 group-hover:text-blue-600 mb-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>上一篇</span>
            </div>
            <div className="font-medium text-stone-900 group-hover:text-blue-700 text-sm line-clamp-1">
              {prev.title}
            </div>
          </button>
        ) : (
          <div className="flex-1" />
        )}

        {next ? (
          <button
            onClick={() => onNavigate(`#/guide/${next.slug}`)}
            className="flex-1 p-4 rounded-xl border border-stone-200 hover:border-blue-300 hover:bg-stone-50 transition-all text-right group"
          >
            <div className="flex items-center justify-end gap-1.5 text-xs text-stone-400 group-hover:text-blue-600 mb-1">
              <span>下一篇</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
            <div className="font-medium text-stone-900 group-hover:text-blue-700 text-sm line-clamp-1">
              {next.title}
            </div>
          </button>
        ) : (
          <div className="flex-1" />
        )}
      </nav>
    </article>
  );
};
