import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {
  ingredientsList: ReplaySubject<any> = new ReplaySubject();
  constructor(private http: HttpClient) { }
  analyseIngredients(ingr): Observable <any> {
    return this.http
      .post(
        `${environment.baseURL}/nutrition-details?app_id=${environment.appId}&app_key=${environment.keys}`, {ingr}
      );
  }


}

