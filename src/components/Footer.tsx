import React from 'react';
import { BookOpen } from 'lucide-react';
import { CATEGORIES } from '../data/categories';

interface FooterProps {
  onNavigate: (hash: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-stone-200/80 bg-[#F7F5F0] mt-24 text-stone-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                <BookOpen className="w-3.5 h-3.5" />
              </span>
              <span className="font-serif font-semibold text-stone-900 tracking-tight text-base">
                如何变得更优秀
              </span>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed max-w-md">
              一个个人成长知识站点，帮助读者从认知、语言表达、方法、习惯、学习和生活能力等方面，逐步改善自己。
            </p>
            <div className="pt-2 text-xs text-stone-500 space-y-1">
              <p>原则：理解问题 · 尝试一个小行动 · 根据实践调整</p>
              <p>不制造成长焦虑，不使用夸张的成功学口号。</p>
            </div>
          </div>

          {/* Guide categories */}
          <div className="space-y-3">
            <h4 className="font-medium text-stone-900 text-xs tracking-wider uppercase">
              成长板块
            </h4>
            <ul className="space-y-2 text-sm">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      const firstSlug = cat.subcategories[0]?.articleSlugs[0];
                      if (firstSlug) {
                        onNavigate(`#/guide/${firstSlug}`);
                      } else {
                        onNavigate('#/guide');
                      }
                    }}
                    className="hover:text-blue-700 transition-colors text-left"
                  >
                    {cat.title}
                    <span className="text-stone-400 text-xs ml-1.5 font-normal">
                      · {cat.tagline.split('，')[0]}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="font-medium text-stone-900 text-xs tracking-wider uppercase">
              站点导航
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('#/')}
                  className="hover:text-blue-700 transition-colors text-left"
                >
                  首页
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#/guide')}
                  className="hover:text-blue-700 transition-colors text-left"
                >
                  成长指南（文档目录）
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#/about')}
                  className="hover:text-blue-700 transition-colors text-left"
                >
                  关于我（建站初衷）
                </button>
              </li>
              <li className="pt-2 text-xs text-stone-500">
                署名：站点作者（持续整理中）
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} 如何变得更优秀 · 个人知识整理与实践记录</p>
          <p className="text-stone-400">
            保持好奇，立足当下，做好手头的每一步。
          </p>
        </div>
      </div>
    </footer>
  );
};
