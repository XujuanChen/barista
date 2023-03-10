import React, { Component, useState } from "react";
import RecipeChoices from "./recipeChoices";

const baristaForm = () => {
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

  const onNewDrink = () => {};
  
  return (
    <div>
      <h2>Hi, I'd like to order a:</h2>

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
