export class Comment {
  _id: string;
  body: string;
  user: object;
  children: Comment[];
}
