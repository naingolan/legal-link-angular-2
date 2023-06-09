import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];
  private postsSubject = new BehaviorSubject<Post[]>([]);

  posts$ = this.postsSubject.asObservable();

  addPost(content: string, image: File | null, video: File | null): void {
    const post: Post = {
      content: content,
      image: image ? { url: URL.createObjectURL(image) } : null,
      video: video,
      likes: 0,
      comments: 0,
      bookmarks: 0
    };
    this.posts.push(post);
    this.postsSubject.next(this.posts);
  }

  getPosts(): Observable<Post[]> {
    return this.posts$;
  }

  incrementLikes(post: Post): void {
    post.likes++;
    this.postsSubject.next(this.posts);
  }

  incrementComments(post: Post): void {
    post.comments++;
    this.postsSubject.next(this.posts);
  }

  incrementBookmarks(post: Post): void {
    post.bookmarks++;
    this.postsSubject.next(this.posts);
  }
}
