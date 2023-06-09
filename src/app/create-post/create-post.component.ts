import { Component } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  postContent: string = '';
  selectedImage: File | null = null;
  selectedImageURL: string | null = null;
  selectedVideo: File | null = null;
  selectedVideoURL: string | null = null;

  constructor(private postService: PostService) { }

  onImageUpload(event: any): void {
    this.selectedImage = event.target.files[0];
    this.previewSelectedImage();
  }

  onVideoUpload(event: any): void {
    this.selectedVideo = event.target.files[0];
    this.previewSelectedVideo();
  }

  previewSelectedImage(): void {
    if (this.selectedImage) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.selectedImageURL = event.target.result;
      };
      reader.readAsDataURL(this.selectedImage);
    }
  }

  previewSelectedVideo(): void {
    if (this.selectedVideo) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.selectedVideoURL = event.target.result;
      };
      reader.readAsDataURL(this.selectedVideo);
    }
  }

  onSubmit(): void {
    this.postService.addPost(this.postContent, this.selectedImage, this.selectedVideo);
    this.clearForm();
  }

  clearForm(): void {
    this.postContent = '';
    this.selectedImage = null;
    this.selectedImageURL = null;
    this.selectedVideo = null;
    this.selectedVideoURL = null;
  }
}
