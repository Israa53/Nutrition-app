import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'nutrition',
    loadChildren: () => import('./nutrition/nutrition.module').then(m => m.NutritionModule),
  },
  { path: '', redirectTo: '/nutrition', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
