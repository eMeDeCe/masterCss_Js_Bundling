import React from "react";
import ReactDOM from "react-dom";
import logoImg from "./content/logWebpack.png";
import { TitleComponent } from "./titleComponent";
import petName from "./pets";


const img = document.createElement("img");
img.src = logoImg;

document.getElementById("imgContainer").appendChild(img);


document.getElementById('myTest').innerHTML = petName;


ReactDOM.render(
    <div>
      <TitleComponent/>
    </div>,
    document.getElementById("root")
  );

