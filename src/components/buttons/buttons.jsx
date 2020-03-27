import React from 'react';
import './buttons.css'

export const MainButton = ({onClick, text, icon, classes = ""}) => (
  <button className={`btn btn-primary ${classes}`} onClick={onClick}>
    {icon}
    {text}
  </button>
)

export const SecButton = ({onClick, text, icon, classes = ""}) => (
  <button className={`btn btn-secondary ${classes}`} onClick={onClick}>
    {icon}
    {text}
  </button>
)