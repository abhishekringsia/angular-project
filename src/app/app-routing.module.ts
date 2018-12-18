import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';

import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';

const app_routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
 // { path: 'customers/:id', loadChildren: 'app/customer/customer.module#CustomerModule' },
 // { path: 'customers', loadChildren: 'app/customers/customers.module#CustomersModule' },
  { path: 'post', loadChildren: 'app/post/post.module#PostModule' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
  //{ path: '**', pathMatch: 'full', redirectTo: '/home' } // catch any unfound routes and redirect to home page
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes,{enableTracing:true, preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
