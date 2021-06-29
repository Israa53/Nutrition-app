import { NutritionListComponent } from './nutrition-list/nutrition-list.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: IngredientListComponent },
  { path: 'nutrition-list', component: NutritionListComponent },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutritionRoutingModule { }
