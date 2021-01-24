//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

var fname = "Umesh";
var lname = "Vuyyuru";

ReactDOM.render(
  <div>
    <p>
      Created by {fname} {lname}
    </p>
    <p>Copyright 2019.</p>
  </div>,
  document.getElementById("root")
);
