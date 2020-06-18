import React from "react";
const classes = require('./titleComponentStyle.scss');

export const TitleComponent = () => { 
  function newTest (mode : string) {
    return "hello, " + mode;
  }
  
    return (
      <div>
        <h2 className={classes['title-background']}>Así configuré webpack</h2>
        <h2 className={classes['title-background']}>{newTest("typescript in webpack")}</h2>
      </div>
    );
  };