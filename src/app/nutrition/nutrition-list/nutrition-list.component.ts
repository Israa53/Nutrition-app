import { Router } from '@angular/router';
import { NutritionService } from './../../services/nutrition.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nutrition-list',
  templateUrl: './nutrition-list.component.html',
  styleUrls: ['./nutrition-list.component.css']
})
export class NutritionListComponent implements OnInit {
  listOfIngredients;
  details: boolean;
  constructor(private Service: NutritionService, private router: Router) { }

  ngOnInit(): void {
    this.Service.ingredientsList.subscribe({
      next: (list) => {
        this.listOfIngredients = list;
      }
    });
  }
  show() {
    if(this.listOfIngredients) {
      this.details = !this.details
    } else {
      this.router.navigateByUrl('/nutrition');
    }
  }
}
