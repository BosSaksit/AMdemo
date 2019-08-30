import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'dashborad', loadChildren: './dashborad/dashborad.module#DashboradPageModule' },  { path: 'store', loadChildren: './store/store.module#StorePageModule' },
  { path: 'user', loadChildren: './user/user.module#UserPageModule' },
  { path: 'addproduct', loadChildren: './addproduct/addproduct.module#AddproductPageModule' },
  { path: 'adduser', loadChildren: './adduser/adduser.module#AdduserPageModule' },
  { path: 'edit-store', loadChildren: './edit-store/edit-store.module#EditStorePageModule' },
  { path: 'add-store', loadChildren: './add-store/add-store.module#AddStorePageModule' },
  { path: 'clear-store', loadChildren: './clear-store/clear-store.module#ClearStorePageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
