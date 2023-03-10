import React, { Component, useState } from "react";
import RecipeChoices from "./recipeChoices";
import drinksJson from "./drinks.json";

const baristaForm = () => {
  const [currentDrink, setCurrentDrink] = useState('');
  const [trueRecipe, setTrueRecipe] = useState({});
  const [inputs, setInputs] = useState({
    temperature: "",
    milk: "",
    syrup: "",
    blended: "",
  });
  const ingredients = {
    temperature: ["hot", "lukewarm", "cold"],
    syrup: ["mocha", "vanilla", "toffee", "maple", "caramel", "other", "none"],
    milk: ["cow", "oat", "goat", "almond", "none"],
    blended: ["yes", "turbo", "no"],
  };
  const onCheckAnswer = () => {};
  const onNewDrink = () => {
    setInputs({
      'temperature': '',
      'milk': '',
      'syrup': '',
      'blended': '' });
    getNextDrink();
  };
  const getNextDrink = () => {
    let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
    setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
    setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
  }
  
    return (
    <div>
      <h2>Hi, I'd like to order a:</h2>
      <div className="drink-container">
      <h2 className="mini-header">{currentDrink}</h2>
      <button
        type="new-drink-button"
        className="button newdrink"
        onClick={onNewDrink}
      >
        🔄
      </button>
      </div>
      <h3>Temperature</h3>
      <div className="answer-space">{inputs["temperature"]}</div>
      <RecipeChoices
        handleChange={(e) =>
          setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }))
        }
        label="temperature"
        choices={ingredients["temperature"]}
        checked={inputs["temperature"]}
      />

      <div className="answer-space">{inputs["syrup"]}</div>
      <RecipeChoices
        handleChange={(e) =>
          setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }))
        }
        label="syrup"
        choices={ingredients["syrup"]}
        checked={inputs["syrup"]}
      />

      <div className="answer-space">{inputs["milk"]}</div>
      <RecipeChoices
        handleChange={(e) =>
          setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }))
        }
        label="milk"
        choices={ingredients["milk"]}
        checked={inputs["milk"]}
      />

      <div className="answer-space">{inputs["blended"]}</div>
      <RecipeChoices
        handleChange={(e) =>
          setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }))
        }
        label="blended"
        choices={ingredients["blended"]}
        checked={inputs["blended"]}
      />
      <form></form>

      <button type="submit" className="button submit" onClick={onCheckAnswer}>
        Check Answer
      </button>

      <button
        type="new-drink-button"
        className="button newdrink"
        onClick={onNewDrink}
      >
        New Drink
      </button>
    </div>
  );
};

export default baristaForm;
