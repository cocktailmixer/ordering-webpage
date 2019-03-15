// File from https://github.com/sebawita/cocktail-party/blob/master/src/app/cocktail.model.ts

export interface Result<T> {
  drinks: T[];
}

export interface IngredientRaw {
  strIngredient1: string;
}

export interface CocktailOverviewRaw {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

export interface CocktailRecipeRaw {
  [key: string]: string;

  idDrink: string;
  strDrink: string;
  strVideo: string;
  strCategory: string;
  strIBA: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  dateModified: string;
}

export interface Ingredient {
  ingredient: string;
  measure: string;
}

export class CocktailRecipe {
  id: string;
  name: string;
  category: string;
  iba: string;
  alcoholic: string;
  glass: string;
  instructions: string;
  imageUrl: string;

  ingredients: Ingredient[];

  constructor(raw: CocktailRecipeRaw) {
    this.id = raw.idDrink;
    this.name = raw.strDrink;
    this.category = raw.strCategory;
    this.iba = raw.strIBA;
    this.alcoholic = raw.strAlcoholic;
    this.glass = raw.strGlass;
    this.instructions = raw.strInstructions;
    this.imageUrl = raw.strDrinkThumb;

    this.ingredients = [];
    for (let i = 1; i < 15; i++) {
      const ingredient = raw[`strIngredient${i}`];
      const measure = raw[`strMeasure${i}`];

      if (ingredient && measure) {
        this.ingredients.push({ ingredient, measure });
      }
    }
  }
}
