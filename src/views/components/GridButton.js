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
  color='#070D30',
  picture='',
}) {

  const[isHover, setIsHover] = React.useState(false);

  if (click) {
    color = '#42A560';
  }
  else if (isHover) {
    color = '#2935CC';
  }

  const handleMouseEnter = () => {
    if (!click) {
      setIsHover(true);
    }
  }

  const handleMouseExit = () => {
    setIsHover(false);
  }


  return (<>
      <button
        style={{
          width  : width,
          height : height,
          fontFamily: 'bdr-mono, sans-serif',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '20px',
          marginTop    : '5px',
          marginLeft   : '5px',
          marginRight  : '5px',
          marginBottom : '5px',
          backgroundColor : color,
          borderColor : color,
          color : '#ffffff',
          borderRadius : '34px',
          border : 'none',
          outline : 'none',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseExit}
        onClick={() => setClick(gridIndex)}>
        {content}
      </button>
      {picture !== '' && <img
        alt=' '
        className='path'
        src={picture}
        style={{
          'width'  : 60,
          'height' : 60,
        }}
      />
    }
    </>
  );
}
