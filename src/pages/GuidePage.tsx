import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Menu,
  X,
  ArrowUp,
  ListFilter,
  BookOpen,
} from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { ARTICLES, getArticleBySlug } from '../data/articles';
import { ArticleRenderer } from './ArticleRenderer';
import { PreparingArticle } from './PreparingArticle';
import { DirectoryNav } from '../components/DirectoryNav';

interface GuidePageProps {
  currentSlug?: string;
  onNavigate: (hash: string) => void;
}

export const GuidePage: React.FC<GuidePageProps> = ({
  currentSlug,
  onNavigate,
}) => {
  // Determine active article
  const activeArticle = useMemo(() => {
    if (currentSlug) {
      const found = getArticleBySlug(currentSlug);
      if (found) return found;
    }
    // Default to the first published article
    return (
      ARTICLES.find((a) => a.slug === 'thinking-fast-and-slow') || ARTICLES[0]
    );
  }, [currentSlug]);

  // Mobile drawer open states
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const isSearchingRef = useRef(false);
  const preSearchExpandedRef = useRef<{
    categories: Record<string, boolean>;
    subcategories: Record<string, boolean>;
  } | null>(null);

  // Expanded categories & subcategories
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >(() => {
    const initial: Record<string, boolean> = {};
    CATEGORIES.forEach((cat) => {
      // By default, expand cognition and active article category
      initial[cat.id] =
        cat.id === 'cognition' ||
        (activeArticle && activeArticle.categoryId === cat.id);
    });
    return initial;
  });

  const [expandedSubcategories, setExpandedSubcategories] = useState<
    Record<string, boolean>
  >(() => {
    const initial: Record<string, boolean> = {};
    CATEGORIES.forEach((cat) => {
      cat.subcategories.forEach((sub) => {
        initial[sub.id] =
          cat.id === 'cognition' ||
          (activeArticle && activeArticle.subcategoryId === sub.id);
      });
    });
    return initial;
  });

  // Track previous slug to ensure expansion only triggers on ACTUAL route/article changes
  // Users can freely collapse current article's category and it won't be forced back open
  const prevSlugRef = useRef<string | undefined>(currentSlug);

  useEffect(() => {
    if (currentSlug !== prevSlugRef.current) {
      prevSlugRef.current = currentSlug;
      if (activeArticle) {
        setExpandedCategories((prev) => ({
          ...prev,
          [activeArticle.categoryId]: true,
        }));
        if (activeArticle.subcategoryId) {
          setExpandedSubcategories((prev) => ({
            ...prev,
            [activeArticle.subcategoryId!]: true,
          }));
        }
      }
    }
  }, [currentSlug, activeArticle]);

  // Handle Search Input & Expanded State Restoration
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    const q = query.trim().toLowerCase();

    if (q) {
      // If entering search mode, save snapshot of current expanded state
      if (!isSearchingRef.current) {
        preSearchExpandedRef.current = {
          categories: { ...expandedCategories },
          subcategories: { ...expandedSubcategories },
        };
        isSearchingRef.current = true;
      }

      // Auto-expand categories and subcategories that match search query
      const newCats = { ...expandedCategories };
      const newSubs = { ...expandedSubcategories };

      CATEGORIES.forEach((cat) => {
        cat.subcategories.forEach((sub) => {
          const hasMatch = sub.articleSlugs.some((slug) => {
            const art = ARTICLES.find((a) => a.slug === slug);
            return (
              art &&
              (art.title.toLowerCase().includes(q) ||
                art.summary.toLowerCase().includes(q))
            );
          });
          if (hasMatch) {
            newCats[cat.id] = true;
            newSubs[sub.id] = true;
          }
        });
      });

      setExpandedCategories(newCats);
      setExpandedSubcategories(newSubs);
    } else {
      // If cleared via input
      handleClearSearch();
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    if (isSearchingRef.current && preSearchExpandedRef.current) {
      setExpandedCategories(preSearchExpandedRef.current.categories);
      setExpandedSubcategories(preSearchExpandedRef.current.subcategories);
      preSearchExpandedRef.current = null;
      isSearchingRef.current = false;
    }
  };

  // Toggle Category
  const handleToggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  // Toggle Subcategory
  const handleToggleSubcategory = (subcategoryId: string) => {
    setExpandedSubcategories((prev) => ({
      ...prev,
      [subcategoryId]: !prev[subcategoryId],
    }));
  };

  // Select Article
  const handleSelectArticle = (slug: string) => {
    onNavigate(`#/guide/${slug}`);
    setMobileSidebarOpen(false);
  };

  // Active heading spy in right TOC
  const [activeSectionId, setActiveSectionId] = useState<string>('');

  useEffect(() => {
    if (!activeArticle?.sections || activeArticle.sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -70% 0px' }
    );

    activeArticle.sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeArticle]);

  // Scroll to top affordance
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSectionId(id);
      setMobileTocOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Mobile control top-bar */}
      <div className="lg:hidden sticky top-16 z-30 bg-[#FAF9F6]/95 backdrop-blur-xs border-b border-stone-200 px-4 py-2.5 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setMobileSidebarOpen(true)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
        >
          <Menu className="w-4 h-4 text-stone-600" />
          <span>目录导航</span>
        </button>

        {activeArticle?.sections && activeArticle.sections.length > 0 && (
          <button
            type="button"
            onClick={() => setMobileTocOpen(!mobileTocOpen)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
          >
            <ListFilter className="w-4 h-4 text-stone-600" />
            <span>本章目录</span>
          </button>
        )}
      </div>

      {/* Mobile Collapsible TOC dropdown */}
      {mobileTocOpen && activeArticle?.sections && (
        <div className="lg:hidden border-b border-stone-200 bg-stone-50 px-4 py-3 shadow-inner">
          <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
            本篇文章小节
          </div>
          <ul className="space-y-1.5 text-xs">
            {activeArticle.sections.map((sec) => (
              <li key={sec.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(sec.id)}
                  className={`block w-full text-left py-1 text-stone-700 hover:text-blue-700 transition-colors ${
                    activeSectionId === sec.id
                      ? 'font-semibold text-blue-700'
                      : ''
                  }`}
                >
                  {sec.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Main 3-column container on desktop */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="flex gap-8 items-start">
          {/* ==================================================== */}
          {/* COLUMN 1: LEFT SIDEBAR (Desktop sticky, Mobile drawer) */}
          {/* ==================================================== */}

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-72 shrink-0 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-3">
            <DirectoryNav
              categories={CATEGORIES}
              activeSlug={activeArticle.slug}
              expandedCategories={expandedCategories}
              expandedSubcategories={expandedSubcategories}
              onToggleCategory={handleToggleCategory}
              onToggleSubcategory={handleToggleSubcategory}
              onSelectArticle={handleSelectArticle}
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
              onClearSearch={handleClearSearch}
            />
          </aside>

          {/* Mobile Sidebar Drawer */}
          {mobileSidebarOpen && (
            <div
              role="dialog"
              aria-modal="true"
              aria-label="目录导航抽屉"
              className="fixed inset-0 z-50 bg-stone-900/40 backdrop-blur-xs flex animate-in fade-in duration-150"
              onClick={() => setMobileSidebarOpen(false)}
            >
              <div
                className="w-80 max-w-[85vw] bg-[#FAF9F6] h-full shadow-2xl flex flex-col p-5 animate-in slide-in-from-left duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold text-stone-900 text-sm">
                      目录导航
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileSidebarOpen(false)}
                    className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg transition-colors"
                    aria-label="关闭抽屉"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto pt-4 pr-1">
                  <DirectoryNav
                    categories={CATEGORIES}
                    activeSlug={activeArticle.slug}
                    expandedCategories={expandedCategories}
                    expandedSubcategories={expandedSubcategories}
                    onToggleCategory={handleToggleCategory}
                    onToggleSubcategory={handleToggleSubcategory}
                    onSelectArticle={handleSelectArticle}
                    searchQuery={searchQuery}
                    onSearchChange={handleSearchChange}
                    onClearSearch={handleClearSearch}
                  />
                </div>
              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* COLUMN 2: MIDDLE ARTICLE BODY */}
          {/* ==================================================== */}
          <main className="flex-1 min-w-0 max-w-full">
            {activeArticle.status === 'published' ? (
              <ArticleRenderer
                article={activeArticle}
                onNavigate={onNavigate}
              />
            ) : (
              <PreparingArticle
                article={activeArticle}
                onNavigate={onNavigate}
              />
            )}
          </main>

          {/* ==================================================== */}
          {/* COLUMN 3: RIGHT TOC (Table of Contents, Desktop) */}
          {/* ==================================================== */}
          {activeArticle.sections && activeArticle.sections.length > 0 && (
            <aside className="hidden xl:block w-60 shrink-0 sticky top-24 pl-4 border-l border-stone-200/70 text-xs">
              <div className="font-semibold text-stone-700 tracking-wider uppercase mb-3 flex items-center gap-1.5">
                <ListFilter className="w-3.5 h-3.5 text-stone-400" />
                <span>本章导航</span>
              </div>
              <ul className="space-y-2">
                {activeArticle.sections.map((section) => {
                  const isActive = activeSectionId === section.id;
                  return (
                    <li key={section.id}>
                      <button
                        type="button"
                        onClick={() => scrollToSection(section.id)}
                        className={`text-left leading-relaxed transition-colors block w-full py-0.5 ${
                          isActive
                            ? 'text-blue-700 font-medium translate-x-1'
                            : 'text-stone-500 hover:text-stone-900'
                        }`}
                      >
                        {section.title}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 pt-4 border-t border-stone-200/60">
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 text-stone-400 hover:text-stone-700 transition-colors"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>回到顶部</span>
                </button>
              </div>
            </aside>
          )}
        </div>
      </div>

      {/* Floating Back to top button for mobile and desktop */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 p-2.5 bg-white text-stone-700 hover:text-blue-600 border border-stone-200 rounded-full shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-600"
          aria-label="回到顶部"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
