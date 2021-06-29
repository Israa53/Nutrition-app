
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NutritionRoutingModule } from './nutrition-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { NutritionListComponent } from './nutrition-list/nutrition-list.component';

@NgModule({
  declarations: [IngredientListComponent, NutritionListComponent],
  imports: [
    CommonModule,
    NutritionRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
    HttpClientModule
  ]
})
export class NutritionModule { }
