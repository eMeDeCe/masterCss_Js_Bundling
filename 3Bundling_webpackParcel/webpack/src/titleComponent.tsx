import React from "react";
const classes = require('./titleComponentStyle.scss');

export const TitleComponent = () => { 
  function newTest (mode : string) {
    return  <div>
    <h2>Webpack: iniciar proyecto</h2>
    <h4>npm install webpack webpack-cli --save-dev</h4>
    <h2>Babel:</h2>
    <h4>npm install @babel/cli @babel/core @babel/preset-env --save-dev</h4>
    <h2>Babel: Dev Server</h2>
    <h4>npm install webpack-dev-server --save-dev</h4>
    <h2>Html webpack: copia html en dist/</h2>
    <h4>npm install html-webpack-plugin --save-dev</h4>
    <h2>Css: isertar estilos en documento html</h2>
    <h4>npm install style-loader css-loader --save-dev</h4>
    <h2>Rimraf: Para eliminar archivos desde node</h2>
    <h4>npm install rimraf --save-dev</h4>
    <h2>Bootstrap: antiguo pero eterno</h2>
    <h4> npm install bootstrap --save</h4>
    <h2>Sass</h2>
    <h4>npm install sass sass-loader --save-dev</h4>
    <h2>Url-Loader: cargador de url.</h2>
    <h4>npm install url-loader file-loader --save-dev</h4>
    <h2>Servidor ligero</h2>
    <h4>npm install lite-server -g</h4>
    <h2>React</h2>
    <h4>npm install react react-dom --save</h4>
    <h2>Typescript</h2>
    <h4>npm install typescript --save-dev</h4>
    <h2>Entorno de producción</h2>
    <h4>npm install webpack-merge --save-dev</h4>
    <h2>Variables según el entorno</h2>
    <h4>npm install dotenv-webpack --save-dev</h4>
    <h2>Analizador dinámico de cargas</h2>
    <h4>npm install webpack-bundle-analyzer --save-dev</h4>
  </div>;
  }
  
    return (
      <div>
        <h2 className={classes['title-background']}>{newTest("typescript in webpack")}</h2>
      </div>
    );
  };