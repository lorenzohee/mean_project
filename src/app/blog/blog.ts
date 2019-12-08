import { Comment } from "../comments/comment";

export class Blog {
  title: string;
  content: string;
  _id: string;
  createdAt: string;
  blogType: string;
  bannerUrl: string;
  blogAccess: string;
  tags: string[];
  comments: Comment[]
}
