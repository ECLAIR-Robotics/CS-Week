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
import {
Button,
} from "reactstrap";

export default function GridButton({
  content='',
  click=false,
  gridIndex=-1,
  setClick,
  width='160px',
  height='150px',
  color='info',
}) {

  const[isHover, setIsHover] = React.useState(false);

  if (click) {
    color = 'success';
  }
  else if (isHover) {
    color = '';
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
      <Button
        className='mr-2 ml-2 mt-2 mb-2 btn-round'
        style={{width: width, height: height}}
        color={color}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseExit}
        onClick={() => setClick(gridIndex)}>
        {content}
      </Button>
  );
}
