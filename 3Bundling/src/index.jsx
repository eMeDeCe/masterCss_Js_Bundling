import React from "react";
import ReactDOM from "react-dom";
import logoImg from "./content/logo-on-white-bg.png";
import { TitleComponent } from "./titleComponent";


const img = document.createElement("img");
img.src = logoImg;

document.getElementById("imgContainer").appendChild(img);

ReactDOM.render(
    <div>
      <h1>Hello from React DOM</h1>
      <TitleComponent/>
    </div>,
    document.getElementById("root")
  );