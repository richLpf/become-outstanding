import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Search, X } from 'lucide-react';
import { Category } from '../types';
import { ARTICLES } from '../data/articles';

interface DirectoryNavProps {
  categories: Category[];
  activeSlug: string;
  expandedCategories: Record<string, boolean>;
  expandedSubcategories: Record<string, boolean>;
  onToggleCategory: (categoryId: string) => void;
  onToggleSubcategory: (subcategoryId: string) => void;
  onSelectArticle: (slug: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onClearSearch: () => void;
}

export const DirectoryNav: React.FC<DirectoryNavProps> = ({
  categories,
  activeSlug,
  expandedCategories,
  expandedSubcategories,
  onToggleCategory,
  onToggleSubcategory,
  onSelectArticle,
  searchQuery,
  onSearchChange,
  onClearSearch,
}) => {
  // Map for quick article lookup
  const articleMap = useMemo(() => {
    const map = new Map<string, typeof ARTICLES[0]>();
    ARTICLES.forEach((a) => map.set(a.slug, a));
    return map;
  }, []);

  // Filtered categories based on search
  const filteredCategories = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return categories;

    return categories
      .map((cat) => {
        const matchingSubs = cat.subcategories
          .map((sub) => {
            const matchingSlugs = sub.articleSlugs.filter((slug) => {
              const art = articleMap.get(slug);
              if (!art) return false;
              return (
                art.title.toLowerCase().includes(q) ||
                art.summary.toLowerCase().includes(q)
              );
            });
            return {
              ...sub,
              articleSlugs: matchingSlugs,
            };
          })
          .filter((sub) => sub.articleSlugs.length > 0);

        return {
          ...cat,
          subcategories: matchingSubs,
        };
      })
      .filter((cat) => cat.subcategories.length > 0);
  }, [categories, searchQuery, articleMap]);

  const totalMatchingArticles = useMemo(() => {
    if (!searchQuery.trim()) return 0;
    return filteredCategories.reduce(
      (sum, cat) =>
        sum +
        cat.subcategories.reduce(
          (sSum, sub) => sSum + sub.articleSlugs.length,
          0
        ),
      0
    );
  }, [filteredCategories, searchQuery]);

  return (
    <div className="w-full flex flex-col">
      {/* Search Input Bar */}
      <div className="relative mb-4">
        <label htmlFor="guide-search" className="sr-only">
          搜索文章
        </label>
        <Search
          className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
          aria-hidden="true"
        />
        <input
          id="guide-search"
          type="text"
          placeholder="搜索标题或内容摘要..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-9 pr-9 py-2.5 text-xs bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-stone-400 shadow-2xs"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={onClearSearch}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-md transition-colors"
            aria-label="清空搜索"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Search Result Counter (when searching) */}
      {searchQuery.trim() && (
        <div className="px-1 pb-2 flex items-center justify-between text-xs text-stone-500">
          <span>搜索结果</span>
          <span className="font-medium text-blue-700">
            {totalMatchingArticles} 篇
          </span>
        </div>
      )}

      {/* Directory Navigation */}
      <nav aria-label="文档层级目录" className="space-y-1">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => {
            const isCatExpanded = !!expandedCategories[category.id];
            const contentId = `category-section-${category.id}`;

            return (
              <div
                key={category.id}
                className="border-b border-stone-200/50 pb-1.5 last:border-b-0"
              >
                {/* 1. Category Row: Full-width clickable button, min-h 44px */}
                <button
                  type="button"
                  onClick={() => onToggleCategory(category.id)}
                  aria-expanded={isCatExpanded}
                  aria-controls={contentId}
                  className="w-full min-h-[44px] px-3 py-2 flex items-center justify-between text-left rounded-xl text-stone-900 hover:bg-stone-100/80 active:bg-stone-200/50 transition-colors cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-inset"
                >
                  <span className="text-sm font-bold tracking-tight text-stone-900 group-hover:text-blue-700 transition-colors">
                    {category.title}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 text-stone-400 group-hover:text-stone-700 transition-transform duration-200 shrink-0 motion-reduce:transition-none ${
                      isCatExpanded ? 'rotate-90 text-stone-700' : 'rotate-0'
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Smooth Animated Collapsible Subdirectory */}
                <AnimatePresence initial={false}>
                  {isCatExpanded && (
                    <motion.div
                      id={contentId}
                      key={contentId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.2,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pt-0.5 pb-1 space-y-1">
                        {category.subcategories.map((sub) => {
                          const isSubExpanded = !!expandedSubcategories[sub.id];
                          const subContentId = `sub-section-${sub.id}`;

                          return (
                            <div key={sub.id} className="space-y-0.5">
                              {/* 2. Subcategory Row: Full-width clickable button, min-h 44px */}
                              <button
                                type="button"
                                onClick={() => onToggleSubcategory(sub.id)}
                                aria-expanded={isSubExpanded}
                                aria-controls={subContentId}
                                className="w-full min-h-[44px] pl-5 pr-3 py-2 flex items-center justify-between text-left rounded-lg text-stone-700 hover:bg-stone-100/70 active:bg-stone-200/50 transition-colors cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-inset"
                              >
                                <span className="text-xs font-semibold text-stone-700 group-hover:text-stone-900 transition-colors">
                                  {sub.title}
                                </span>
                                <ChevronRight
                                  className={`w-3.5 h-3.5 text-stone-400 group-hover:text-stone-600 transition-transform duration-200 shrink-0 motion-reduce:transition-none ${
                                    isSubExpanded
                                      ? 'rotate-90 text-stone-600'
                                      : 'rotate-0'
                                  }`}
                                  aria-hidden="true"
                                />
                              </button>

                              {/* Smooth Animated Collapsible Articles */}
                              <AnimatePresence initial={false}>
                                {isSubExpanded && (
                                  <motion.div
                                    id={subContentId}
                                    key={subContentId}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{
                                      duration: 0.2,
                                      ease: [0.16, 1, 0.3, 1],
                                    }}
                                    className="overflow-hidden"
                                  >
                                    <ul className="py-0.5 space-y-0.5 border-l border-stone-200 ml-6 pl-1.5">
                                      {sub.articleSlugs.map((slug) => {
                                        const article = articleMap.get(slug);
                                        if (!article) return null;
                                        const isCurrent =
                                          article.slug === activeSlug;

                                        return (
                                          <li key={slug}>
                                            {/* 3. Article Row: Native Link with aria-current, min-h 44px */}
                                            <a
                                              href={`#/guide/${article.slug}`}
                                              onClick={(e) => {
                                                e.preventDefault();
                                                onSelectArticle(article.slug);
                                              }}
                                              aria-current={
                                                isCurrent ? 'page' : undefined
                                              }
                                              className={`w-full min-h-[44px] px-3 py-2.5 flex items-center justify-between text-left rounded-lg text-xs transition-colors cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-inset ${
                                                isCurrent
                                                  ? 'bg-blue-50 text-blue-700 font-semibold border-l-2 border-blue-600 shadow-2xs'
                                                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/80'
                                              }`}
                                            >
                                              <span className="line-clamp-1 leading-normal">
                                                {article.title}
                                              </span>
                                              <span className="flex items-center gap-1.5 shrink-0 ml-2">
                                                {article.status ===
                                                'published' ? (
                                                  <span
                                                    className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-80"
                                                    title="已发布"
                                                  />
                                                ) : (
                                                  <span className="text-[10px] text-stone-400 font-normal">
                                                    筹备
                                                  </span>
                                                )}
                                              </span>
                                            </a>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        ) : (
          <div className="py-12 px-3 text-center space-y-3">
            <p className="text-xs text-stone-500">
              未找到与「{searchQuery}」相关的文章
            </p>
            <button
              type="button"
              onClick={onClearSearch}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100/80 rounded-lg transition-colors font-medium"
            >
              <X className="w-3.5 h-3.5" />
              <span>清空搜索恢复完整目录</span>
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};
