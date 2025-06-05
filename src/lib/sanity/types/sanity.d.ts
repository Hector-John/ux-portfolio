export interface SanityImage {
  asset: {
    _ref: string;
    url: string;
  };
  alt?: string;
  caption?: string;
}

export interface SanityProject {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  mainImage: SanityImage;
  content: any[]; // PortableText content
  client?: string;
  year?: string;
  role?: string;
  tags?: string[];
  projectLink?: string;
  publishedAt: string;
}

export interface SanityPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  mainImage: SanityImage;
  body: any[]; // PortableText content
  publishedAt: string;
  readingTime: number;
}