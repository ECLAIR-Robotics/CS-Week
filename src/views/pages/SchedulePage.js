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
  Row,
  Col,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";

//import bigChartData from "variables/charts.js";
import EventList from "views/components/EventList.js"

export default function SchedulePage() {

  // State variables for main events & scavenger hunt
  const [eventDay, setEventDay] = React.useState(0);

  // UseEffect
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  },[]);

  // Buttons to change between different days
  function DaysButton({
    content,
    id,
  }) {
    if (eventDay === id) {
      return <button
              style={{
                'backgroundColor' : '#ff9343',
                'font-size' : '20px',
                'color' : 'black',
                'border' : '4px solid #000000',
                'text-align' : 'center',
                'width' : '50px',
                'height' : '50px',
              }}    
             >
            {content}
          </button>;
    }

    return <button
            style={{
              'backgroundColor' : '#ffffff',
              'font-size' : '20px',
              'color' : 'black',
              'border' : '2px solid #000000',
              'text-align' : 'center',
              'width' : '50px',
              'height' : '50px',
            }}    
            onClick={() => {setEventDay(id)}}
           >
          {content}
        </button>;
  }

  return (
    <>
      <IndexNavbar navColor='warning'/>
        <div className="wrapper">
          <div className="page-header">
            <div className="content-center">
              <Row className="row-grid justify-content-between align-items-center text-left">
                <Col lg="1">
                  <Col>
                    <DaysButton id={0} content='M'/>
                    <DaysButton id={1} content='T'/>
                    <DaysButton id={2} content='W'/>
                    <DaysButton id={3} content='Th'/>
                    <DaysButton id={4} content='F'/>
                    <DaysButton id={5} content='S'/>
                  </Col>
                </Col>
                <Col lg="10">
                  <EventList eventDay={eventDay}/>
                </Col>
              </Row>
            </div>
          </div>
      </div>
    </>
  );
}
