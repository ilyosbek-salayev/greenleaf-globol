import React from 'react'

const RandomCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export default RandomCode