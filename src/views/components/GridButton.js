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
}) {

  const[isHover, setIsHover] = React.useState(false);

  var color = 'info';

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
        style={{width: "160px", height: "160px"}}
        color={color}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseExit}
        onClick={() => setClick(gridIndex)}>
        {content}
      </Button>
  );
}
