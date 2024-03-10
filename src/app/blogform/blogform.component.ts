import { Component } from '@angular/core';
import { InnerHeaderComponent } from '../inner-header/inner-header.component';
import { BlogCardComponent} from '../blog-card/blog-card.component';
import { RouterLink ,RouterLinkActive} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-blogform',
  standalone: true,
  imports: [InnerHeaderComponent,RouterLink ,BlogCardComponent,RouterLinkActive,FormsModule],
  templateUrl: './blogform.component.html',
  styleUrl: './blogform.component.css'
})
export class BlogformComponent {

  selectedFile: File | null = null;
  formData: any = {}; 
  successMessage: string | undefined;
  
  constructor(private postService: PostsService,private router: Router,private auth:LoginService) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

  onSubmit(): void {
    if (!this.selectedFile) {
      console.error('Please select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('content', this.formData.content);
    formData.append('image', this.selectedFile, this.selectedFile.name);

    this.postService.createPost(formData).subscribe(
      (response) => {
        console.log('Post created successfully:', response);
        this.router.navigate(['/blogs']);
        // this.successMessage = 'Animal created successfully';
        this.resetForm();
      },
      (error) => {
        // Handle error
        console.error('Error creating Post:', error);
            if (error.error && error.error.errors && error.error.errors.image) {
          console.error('Image upload error:', error.error.errors.image[0]);
        } else {
          console.error('Generic error. Check server logs for more details.');
        }
      }
    
    );
  }

  resetForm() {
    this.formData = {
      content:'',
      image:null
    };
    this.selectedFile = null;
  }

 

}
