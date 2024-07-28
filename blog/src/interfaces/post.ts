import { type Author } from "./author";

export type Post = {
  ogCode: any;
  slug: string;
  title: string;
  date: string;
  code: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
