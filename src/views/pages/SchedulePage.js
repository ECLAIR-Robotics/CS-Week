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
import { View } from "react-native";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";

//import bigChartData from "variables/charts.js";
import EventList from "views/components/EventList.js"

export default function SchedulePage() {

  // State variables for main events & scavenger hunt
  const [eventDay, setEventDay] = React.useState(0);

  // State variables for extra events
  // false - unpersonalized, true - personalized
  // const [extraType, setExtraType] = React.useState(false);

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
                'font-size' : '40px',
                'color' : 'black',
                'border' : '4px solid #000000',
                'text-align' : 'center',
                'width' : '75px',
                'height' : '75',
                'font-family' : 'bdr-mono, sans-serif',
                'font-style' : 'bold',
                'font-weight' : 300,
              }}    
             >
            {content}
          </button>;
    }

    return <button
            style={{
              'backgroundColor' : '#ffffff',
              'font-size' : '40px',
              'color' : 'black',
              'border' : '2px solid #000000',
              'text-align' : 'center',
              'width' : '75px',
              'height' : '75px',
              'font-family' : 'bdr-mono, sans-serif',
              'font-style' : 'bold',
              'font-weight' : 300,
            }}    
            onClick={() => {setEventDay(id)}}
           >
          {content}
        </button>;
  }

  return (
    <>
      <IndexNavbar navColor='warning'/>
      <View style={{
          'display' : 'flex',
          'flexDirection' : 'row',
          'left' : '10%',
          'margin-top' : '100px',
        }}
      >
        <View style={{'flex' : 1, 'margin-top' : '2%'}}>
          <DaysButton id={0} content='M'/>
          <DaysButton id={1} content='T'/>
          <DaysButton id={2} content='W'/>
          <DaysButton id={3} content='Th'/>
          <DaysButton id={4} content='F'/>
          <DaysButton id={5} content='S'/>
        </View>
        <View style={{'flex' : 10}}>
          <EventList eventDay={eventDay}/>
        </View>
      </View>
    </>
  );
}
