import React, { Component } from 'react';
import './CocktailMenuItem.scss';
import { CocktailRecipe } from './model';
import { Link } from 'react-router-dom';

interface ICocktailProps {
  cocktail: CocktailRecipe;
}

export default class CocktailMenuItem extends Component<ICocktailProps> {
  render() {
    const { cocktail } = this.props;
    return (
      <Link
        to={`/cocktail/${cocktail.id}`}
        className="CocktailMenuItem"
        style={{ backgroundImage: `url(${cocktail.imageUrl})` }}
      >
        <div className="name">{cocktail.name}</div>
      </Link>
    );
  }
}
