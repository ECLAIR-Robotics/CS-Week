/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components

export default function GridButton({
  content='',
  click=false,
  gridIndex=-1,
  setClick,
  width='160px',
  height='150px',
  color='#0E154E',
}) {

  const[isHover, setIsHover] = React.useState(false);

  if (click) {
    color = '#42A560';
  }
  else if (isHover) {
    color = '#1C248B';
  }

  const handleMouseEnter = () => {
    if (!click) {
      setIsHover(true);
    }
  }

  const handleMouseExit = () => {
    setIsHover(false);
  }


  return (
      <button
        style={{
          'width'  : width,
          'height' : height,
          'font-family' : 'soleil, sans-serif',
          'font-style' : 'bold',
          'font-weight' : 300,
          'margin-top'    : '5px',
          'margin-left'   : '5px',
          'margin-right'  : '5px',
          'margin-bottom' : '5px',
          'backgroundColor' : color,
          'border-color' : color,
          'color' : '#ffffff',
          'border-radius' : '34px',
          'border' : 'none',
          'outline' : 'none',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseExit}
        onClick={() => setClick(gridIndex)}>
        {content}
      </button>
  );
}
