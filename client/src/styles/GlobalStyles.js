import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }
  img{
    display: block;
    max-width: 100%;
  }
  body{
    margin: 0;
    font-family: sans-serif;
    color: #fff;
    background-color: black;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
  
  input[type="range"] { 
    margin: auto;
    -webkit-appearance: none;
    position: relative;
    overflow: hidden;
    height: 20px;
    width: 200px;
    border: 2px solid #39C5BB;
    cursor: pointer;
    border-radius: 0.2rem; /* iOS */
    background: transparent;
}

::-webkit-slider-runnable-track {
    background: transparent;
   
}

/*
 * 1. Set to 0 width and remove border for a slider without a thumb
 * 2. Shadow is negative the full width of the input and has a spread 
 *    of the width of the input.
 */
::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 5px; /* 1 */
    height: 40px;
    background: #fff;
    box-shadow: -200px 0 0 200px #39C5BB; /* 2 */
    border-radius: 0.5rem;
    
}

::-moz-range-track {
    height: 40px;
    background: transparent;
}

::-moz-range-thumb {
    background: #fff;
    height: 40px;
    width: 10px;
   
    box-shadow: -200px 0 0 200px #39C5BB;
    box-sizing: border-box;
}

::-ms-fill-lower { 
    background: #39C5BB;
}

::-ms-thumb { 
    background: #fff;
    border: 2px solid #999;
    height: 40px;
    width: 20px;
    box-sizing: border-box;
}

::-ms-ticks-after { 
    display: none; 
}

::-ms-ticks-before { 
    display: none; 
}

::-ms-track { 
    background: #39C5BB;
    color: transparent;
    height: 40px;
    border: none;
}

::-ms-tooltip { 
    display: none;
}

`;

export { GlobalStyles };
