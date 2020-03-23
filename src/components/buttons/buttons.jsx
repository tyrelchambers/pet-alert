import React from 'react';
import './buttons.css'

export const MainButton = ({onClick, text}) => (
  <button className="btn btn-primary" onClick={onClick}>
    {text}
  </button>
)

export const SecButton = ({onClick, text}) => (
  <button className="btn btn-secondary" onClick={onClick}>
    {text}
  </button>
)