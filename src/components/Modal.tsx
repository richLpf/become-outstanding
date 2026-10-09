import React, { useEffect } from 'react';
import { X, CalendarClock, ArrowRight } from 'lucide-react';
import { PlannedModule } from '../types';

interface ModalProps {
  module: PlannedModule | null;
  onClose: () => void;
  onExploreGuides: () => void;
}

export const PlannedModal: React.FC<ModalProps> = ({
  module,
  onClose,
  onExploreGuides,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!module) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-xs transition-opacity"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF9F6] border border-stone-200 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-xl relative animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors"
          aria-label="关闭"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-3 text-blue-700">
          <CalendarClock className="w-5 h-5 text-blue-600" />
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-700">
            模块规划中 · 敬请期待
          </span>
        </div>

        <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">
          {module.title}
        </h3>
        <p className="text-sm font-medium text-stone-500 mb-4">
          {module.tagline}
        </p>

        <p className="text-stone-700 text-sm leading-relaxed mb-6">
          {module.description}
        </p>

        <div className="bg-stone-50 border border-stone-200/80 rounded-xl p-4 mb-6">
          <h4 className="text-xs font-semibold text-stone-800 uppercase tracking-wide mb-2.5">
            后续开发与整理重点：
          </h4>
          <ul className="space-y-2 text-xs text-stone-600">
            {module.roadmap.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
          >
            知道了
          </button>
          <button
            onClick={() => {
              onClose();
              onExploreGuides();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-xs"
          >
            <span>先阅读已有指南</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
