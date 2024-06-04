import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LearningComponent } from './learning/learning.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'learning',
    component: LearningComponent
  },
  {
    path: 'techStack',
    component: TechStackComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: SignupComponent
  }
];
