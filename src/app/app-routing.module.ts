import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { TutorialGuard } from './guards/tutorial.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { 
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule'
  },
  { path: 'tutorial', loadChildren: './pages/tutorial/tutorial.module#TutorialPageModule' },
  { path: 'app', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'scorecard', loadChildren: './pages/scorecard/scorecard.module#ScorecardPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'reviews', loadChildren: './pages/reviews/reviews.module#ReviewsPageModule' },
  { path: 'courses', loadChildren: './pages/courses/courses.module#CoursesPageModule' },
  { path: 'blog', loadChildren: './pages/blog/blog.module#BlogPageModule' },
  { path: 'news', loadChildren: './pages/news/news.module#NewsPageModule' },
  { path: 'aboutus', loadChildren: './pages/aboutus/aboutus.module#AboutusPageModule' },
  { path: 'mybookings', loadChildren: './pages/mybookings/mybookings.module#MybookingsPageModule' },
  { path: 'adminhome', loadChildren: './pages/adminhome/adminhome.module#AdminhomePageModule' },
  { path: 'addcash', loadChildren: './pages/addcash/addcash.module#AddcashPageModule' },
  { path: 'allbookings', loadChildren: './pages/allbookings/allbookings.module#AllbookingsPageModule' },
  { path: 'setprice', loadChildren: './pages/setprice/setprice.module#SetpricePageModule' }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
