import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { BreakpointObserver } from '@angular/cdk/layout';

import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';

//import { EmojiMartModule } from '@ctrl/ngx-emoji-mart';
//These are custome components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PostComponent } from './post/post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostService } from './post.service';
import { FormsModule } from '@angular/forms';
import { SubLawyersComponent } from './sub-lawyers/sub-lawyers.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PostComponent,
    CreatePostComponent,
    SubLawyersComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    FormsModule
    
  ],
  providers: [
    PostService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
