import React, { Component } from "react";
import ReactDOM from "react-dom"
import PropTypes from "prop-types";

const message = "You Can Do Anything!"

const Encouragement = () => (
  <div>
    <h1>
    { message ? message : null}
    </h1>
  </div>
)
const DisplayEncouragement = () => (
  <Encouragement />
)

ReactDOM.render(
  <DisplayEncouragement />,
  document.getElementById('root')
)
