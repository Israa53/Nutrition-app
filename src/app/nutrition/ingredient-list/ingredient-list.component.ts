import { NutritionService } from './../../services/nutrition.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  // form data 
  form: FormGroup;
  submitted: boolean;
  worngIngredients:boolean
  constructor(private router: Router, private Service: NutritionService
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      ingredients: new FormControl('', [Validators.required]),
    });
  }

  get f() { return this.form.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    if (this.form.valid) {
      const ingredients = this.form.controls.ingredients.value.split('\n')
      
      this.Service.analyseIngredients(ingredients).subscribe({
          next: (listOfIngredients: any) => {
            for (const ingredient of listOfIngredients.ingredients) {
              if (!ingredient.parsed) {
                this.worngIngredients = true;
              } else {
                this.Service.ingredientsList.next(listOfIngredients);
                this.router.navigateByUrl('/nutrition-list');
              }
            }
          }
        });
    }
  }
}
