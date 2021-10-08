import React, { useState } from "react";
import "./styles.css";

const randomCatUrl = "https://api.thecatapi.com/v1/images/search";
let myArr = [];
console.log(myArr);
export default function App() {
  const [catImage, setCatImage] = useState(""); //url

  function getRandomCatUrl() {
    fetch(randomCatUrl)
      .then((response) => response.json())
      .then((json) => {
        setCatImage(json[0].url);
        console.log(json);
      })
      .catch(errorHandler);
  }
  function errorHandler(error) {
    console.log("Some Error occured" + error);
  }

  return (
    <div className="App">
      <h1>Random Cat Image</h1>
      <button onClick={getRandomCatUrl}>Random Image</button>
      <div
        style={{
          background: `url("${catImage}") center/contain no-repeat fixed`
        }}
        className="image-container"
      ></div>
    </div>
  );
}
