import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CocktailMenuItem from './Cocktail/CocktailMenuItem';
import './App.scss';
import { CocktailRecipe } from './Cocktail/model';

/**
 * using theCocktailAPI for now
 * https://www.thecocktaildb.com/api.php
 */
async function getRandomCocktails(amount: number) {
  return Promise.all(
    Array(amount)
      .fill(0)
      .map(_ =>
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
          .then(response => response.json())
          .then(response => response.drinks[0])
          .then(rawCocktail => new CocktailRecipe(rawCocktail))
      )
  );
}

interface IAppState {
  cocktails: CocktailRecipe[];
}

class App extends Component<{}, IAppState> {
  constructor(props: any) {
    super(props);

    this.state = { cocktails: [] };
  }

  async componentDidMount() {
    const randomCocktails = await getRandomCocktails(10);
    const cocktailIds = Array.from(
      new Set(randomCocktails.map(cocktail => cocktail.id))
    );
    const cocktails = cocktailIds.map(
      id =>
        randomCocktails[
          randomCocktails.findIndex(cocktail => cocktail.id === id)
        ]
    );

    this.setState({
      cocktails
    });
  }

  render() {
    const { cocktails } = this.state;

    return (
      <Router>
        <div className="App">
          <h1>Cocktail Mixer</h1>
          <div className="cocktailList">
            {cocktails.map(cocktail => (
              <CocktailMenuItem key={cocktail.id} cocktail={cocktail} />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
