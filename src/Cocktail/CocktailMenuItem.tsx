import React, { Component } from 'react';
import './CocktailMenuItem.scss';
import { CocktailRecipe } from './model';

interface ICocktailProps {
  cocktail: CocktailRecipe;
}

export default class CocktailMenuItem extends Component<ICocktailProps> {
  render() {
    const { cocktail } = this.props;
    return (
      <div
        className="CocktailMenuItem"
        style={{ backgroundImage: `url(${cocktail.imageUrl})` }}
      >
        <div className="name">{cocktail.name}</div>
      </div>
    );
  }
}
