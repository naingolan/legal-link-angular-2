export interface Post {
    content: string;
    likes: number;
    bookmarks: number;
    comments: number;
    image?: File|any;
    video?: File|any;
  }
  