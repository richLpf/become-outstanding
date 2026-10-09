export type ArticleStatus = 'published' | 'preparing';

export interface SectionBlock {
  id: string;
  title: string;
  level: 2 | 3;
  paragraphs?: string[];
  quote?: string;
  list?: string[];
  actionBox?: {
    title: string;
    description: string;
    actionStep: string;
  };
}

export interface Article {
  slug: string;
  title: string;
  summary: string;
  categoryId: string;
  categoryTitle: string;
  subcategoryId?: string;
  subcategoryTitle?: string;
  readingTime: string;
  status: ArticleStatus;
  updatedAt: string;
  sections?: SectionBlock[];
  intro?: string[];
  takeaways?: string[];
}

export interface SubCategory {
  id: string;
  title: string;
  articleSlugs: string[];
}

export interface Category {
  id: string;
  title: string;
  tagline: string;
  description: string;
  subcategories: SubCategory[];
}

export interface PlannedModule {
  id: 'routes' | 'checklists' | 'index';
  title: string;
  tagline: string;
  status: string;
  description: string;
  roadmap: string[];
}
