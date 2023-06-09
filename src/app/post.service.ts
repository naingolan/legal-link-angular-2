import { Injectable } from '@angular/core';
import { Post } from './post.model'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [];

  addPost(content: string, image: File | null, video: File | null): void {
    const post: Post = {
      content: content,
      image: image,
      video: video
    };
    this.posts.push(post);
  }
}
