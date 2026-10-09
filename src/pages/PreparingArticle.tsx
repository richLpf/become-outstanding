import React from 'react';
import { CalendarClock, ChevronRight, BookOpen, ArrowRight, ArrowLeft } from 'lucide-react';
import { Article } from '../types';
import { ARTICLES, getAdjacentArticles } from '../data/articles';

interface PreparingArticleProps {
  article: Article;
  onNavigate: (hash: string) => void;
}

export const PreparingArticle: React.FC<PreparingArticleProps> = ({
  article,
  onNavigate,
}) => {
  const publishedArticles = ARTICLES.filter((a) => a.status === 'published');
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

      {/* Header */}
      <header className="mb-8 pb-6 border-b border-stone-200">
        <div className="inline-flex items-center gap-1.5 text-amber-700 text-xs font-medium mb-3">
          <CalendarClock className="w-4 h-4" />
          <span>内容筹备中</span>
        </div>

        <h1 className="text-3xl font-serif font-bold text-stone-900 tracking-tight leading-snug mb-3">
          {article.title}
        </h1>

        <div className="flex items-center gap-2 text-xs text-stone-500 mb-4">
          <span className="text-stone-600">{article.categoryTitle}</span>
          <span aria-hidden="true">·</span>
          <span>预计阅读 {article.readingTime}</span>
        </div>

        <p className="text-stone-600 text-base leading-relaxed">
          {article.summary}
        </p>
      </header>

      {/* Preparing Notice Card */}
      <div className="bg-amber-50/50 border border-amber-200/70 rounded-2xl p-6 sm:p-8 mb-10 text-stone-800">
        <h2 className="text-lg font-serif font-semibold text-amber-950 mb-2">
          这篇内容正在深入梳理中
        </h2>
        <p className="text-sm text-stone-700 leading-relaxed mb-5">
          为了确保每一篇文章都具备真实的实践依据与生活案例，本站坚持严谨撰写与迭代，绝不使用空洞套话或拼凑内容。该主题正处于资料整理与实践提炼阶段，敬请关注后续更新。
        </p>

        <div className="pt-2 flex flex-wrap gap-3">
          <button
            onClick={() => onNavigate('#/guide')}
            className="px-4 py-2 text-xs font-medium text-stone-700 bg-white hover:bg-stone-50 border border-stone-200 rounded-lg transition-colors"
          >
            浏览目录全部板块
          </button>
        </div>
      </div>

      {/* Recommended Published Articles */}
      <div className="border-t border-stone-200 pt-8">
        <h3 className="text-base font-serif font-bold text-stone-900 mb-4 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-blue-600" />
          <span>先阅读已上线的精选文章</span>
        </h3>

        <div className="grid grid-cols-1 gap-3">
          {publishedArticles.map((pub) => (
            <button
              key={pub.slug}
              onClick={() => onNavigate(`#/guide/${pub.slug}`)}
              className="p-4 rounded-xl border border-stone-200 hover:border-blue-400 bg-white/70 hover:bg-white text-left transition-all group flex items-start justify-between gap-4"
            >
              <div>
                <div className="text-xs text-blue-600 font-medium mb-1">
                  {pub.categoryTitle} · {pub.subcategoryTitle}
                </div>
                <h4 className="font-semibold text-stone-900 group-hover:text-blue-700 text-sm mb-1">
                  {pub.title}
                </h4>
                <p className="text-xs text-stone-500 line-clamp-1">
                  {pub.summary}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-blue-600 shrink-0 mt-1 transition-transform group-hover:translate-x-0.5" />
            </button>
          ))}
        </div>
      </div>

      {/* Prev / Next Navigation */}
      <nav className="mt-12 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {prev ? (
          <button
            onClick={() => onNavigate(`#/guide/${prev.slug}`)}
            className="flex-1 p-3.5 rounded-xl border border-stone-200 hover:border-blue-300 hover:bg-stone-50 transition-all text-left group"
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
            className="flex-1 p-3.5 rounded-xl border border-stone-200 hover:border-blue-300 hover:bg-stone-50 transition-all text-right group"
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
