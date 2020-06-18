import React from "react";
import ReactDOM from "react-dom";
import logoImg from "./content/logo-on-white-bg.png";
import { TitleComponent } from "./titleComponent";
import petName from "./pets";


const img = document.createElement("img");
img.src = logoImg;

document.getElementById("imgContainer").appendChild(img);


document.getElementById('myTest').innerHTML = petName;


ReactDOM.render(
    <div>
      <h1>Hello from React DOM</h1>
      <TitleComponent/>
    </div>,
    document.getElementById("root")
  );

