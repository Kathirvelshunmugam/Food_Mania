import { useState } from "react";
import "./styles.css";
var foodDatabase = {
  Indian: [
    {
      name: "Idly",
      ingredients: "Basmati rice, Fenugreek seeds,and Salt."
    },
    {
      name: "Thai Green Chicken Curry",
      ingredients: "Coconut Milk, Onions, Lime Leaves, Basil Leaves"
    },

    {
      name: "Som Tam (Papaya Salad)",
      ingredients: "Green papaya, Garlic, Cherry tomatoes, Spices"
    }
  ],

  Chinese: [
    {
      name: "Manchurian",
      ingredients: "Soya Sauce, Onions, Spices, Vegetables"
    },
    {
      name: "Noodles",
      ingredients: "Noodles, Sauces, Cabbage, Carrot"
    },
    {
      name: "Chicken Lollipops",
      ingredients: "Chicken Wings, Eggs, Oil, Spices"
    }
  ],

  Italian: [
    {
      name: "Pizza",
      ingredients: "Cheese, Baking powder, Olive Oil, Vegetables"
    },
    {
      name: "Pasta",
      ingredients: "Pasta, Garlic, Olive Oil, Pepper"
    },
    {
      name: "Tiramisu",
      ingredients: "Eggs, Sugar, Cheese, Cocoa powder"
    }
  ]
};
var cuisines = Object.keys(foodDatabase);

export default function App() {
  var [cuisine, setCuisine] = useState("Indian");

  function onClickHandler(cuisine) {
    setCuisine(cuisine);
  }
  return (
    <div className="App">
      <h1>
        <strong>Food of Different Country</strong>
      </h1>
      <div>
        Check out the most famous dishes of the top cuisines in the world!
        Select A Cusine.
      </div>
      {cuisines.map(function (cuisine) {
        return (
          <button
            style={{
              padding: "1% 2%",
              fontSize: "1.5rem",
              cursor: "pointer",
              display: "inline-block",
              border: "none",
              margin: "10px",
              backgroundColor: "#f4f4f4",
              borderRadius: "25px",
              boxShadow: "0 2px 10px rgba(44, 40, 14, 0.15)"
            }}
            onClick={() => onClickHandler(cuisine)}
          >
            {cuisine}
          </button>
        );
      })}
      <hr></hr>
      <div style={{ textAlign: "center", width: "50%" }}>
        <ul style={{ paddingInlineStart: "0px" }}>
          {foodDatabase[cuisine].map((nameOfCuisine) => (
            <li
              key={nameOfCuisine.name}
              style={{
                listStyle: "none",
                border: "0.5px #f3f3f3 solid",
                padding: "2rem",
                width: "100%",
                borderRadius: "1rem",
                backgroundColor: "#f4f4f4",
                margin: "1rem 40%",
                boxShadow: "0 2px 10px rgba(44, 40, 14, 0.15)"
              }}
            >
              <div>{nameOfCuisine.name}</div>
              <hr></hr>
              <div style={{ fontSize: "0.7rem" }}>
                Ingredients : {nameOfCuisine.ingredients}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
