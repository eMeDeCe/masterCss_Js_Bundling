import React from "react";
const classes = require('./titleComponentStyle.scss');
export const TitleComponent = () => {  
    return (
      <div>
        <h2 className={classes['title-background']}>Así configuré webpack</h2>
      </div>
    );
  };