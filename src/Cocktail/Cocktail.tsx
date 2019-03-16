import React, { Component } from 'react';
import { CocktailRecipe } from './model';
import './Cocktail.scss';

interface ICocktailProps {
  cocktailId: string;
}

interface ICocktailState {
  loading: boolean;
  cocktail?: CocktailRecipe;
}

export default class Cocktail extends Component<
  ICocktailProps,
  ICocktailState
> {
  constructor(props: ICocktailProps) {
    super(props);

    this.state = {
      loading: true,
      cocktail: undefined
    };
  }

  async componentDidMount() {
    const rawCocktail = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${
        this.props.cocktailId
      }`
    )
      .then(response => response.json())
      .then(response => response.drinks[0]);

    const cocktail = new CocktailRecipe(rawCocktail);

    this.setState({ loading: false, cocktail });
  }

  render() {
    const { loading, cocktail } = this.state;

    if (loading || !cocktail) {
      return <div>loading...</div>;
    }

    const {
      name,
      ingredients,
      imageUrl,
      instructions,
      alcoholic,
      glass
    } = cocktail;

    return (
      <div className="Cocktail">
        <h1>{name}</h1>
        <p>
          ({alcoholic}, to be served in {glass})
        </p>
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map(({ ingredient, measure }) => (
            <li key={ingredient}>
              <span className="measure">{measure}</span> {ingredient}
            </li>
          ))}
        </ul>
        <h2>Instructions</h2>
        <p>{instructions}</p>
        <img src={imageUrl} alt="Image of cocktail" />
      </div>
    );
  }
}
