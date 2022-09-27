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
Container,
} from "reactstrap";
import { ResponsiveBar } from '@nivo/bar'

export default function TotalPoints() {
  const data = [
    {
      "organization": "ACM/A4C",
      "Events": 0,
      "EventsColor": "hsl(120, 70%, 50%)",
      "Extra events": 0,
      "Extra eventsColor": "hsl(307, 70%, 50%)",
      "Hosting": 200,
      "HostingColor": "hsl(274, 70%, 50%)",
      "Participation": 0,
      "ParticipationColor": "hsl(357, 70%, 50%)",
      "Scavenger Hunt": 3 * 15,
      "Scavenger HuntColor": "hsl(269, 70%, 50%)",
    },
    {
      "organization": "Convergent",
      "Events": 175,
      "EventsColor": "hsl(85, 70%, 50%)",
      "Extra events": 0,
      "Extra eventsColor": "hsl(320, 70%, 50%)",
      "Hosting": 100,
      "HostingColor": "hsl(81, 70%, 50%)",
      "Participation": 0,
      "ParticipationColor": "hsl(85, 70%, 50%)",
      "Scavenger Hunt": 4 * 15,
      "Scavenger HuntColor": "hsl(297, 70%, 50%)",
    },
    {
      "organization": "CS Roadshow",
      "Events": 0,
      "EventsColor": "hsl(219, 70%, 50%)",
      "Extra events": 0,
      "Extra eventsColor": "hsl(240, 70%, 50%)",
      "Hosting": 100,
      "HostingColor": "hsl(284, 70%, 50%)",
      "Participation": 0,
      "ParticipationColor": "hsl(190, 70%, 50%)",
      "Scavenger Hunt": 9 * 15,
      "Scavenger HuntColor": "hsl(297, 70%, 50%)",
    },
    {
      "organization": "CS Transfer Society",
      "Events": 0,
      "EventsColor": "hsl(306, 70%, 50%)",
      "Extra events": 0,
      "Extra eventsColor": "hsl(205, 70%, 50%)",
      "Hosting": 100,
      "HostingColor": "hsl(147, 70%, 50%)",
      "Participation": 0,
      "ParticipationColor": "hsl(165, 70%, 50%)",
      "Scavenger Hunt": 15 * 15,
      "Scavenger HuntColor": "hsl(207, 70%, 50%)",
    },
    {
      "organization": "ECLAIR",
      "Events": 650,
      "EventsColor": "hsl(46, 70%, 50%)",
      "Extra events": 0,
      "Extra eventsColor": "hsl(171, 70%, 50%)",
      "Hosting": 100,
      "HostingColor": "hsl(273, 70%, 50%)",
      "Participation": 0,
      "ParticipationColor": "hsl(276, 70%, 50%)",
      "Scavenger Hunt": 15 * 15,
      "Scavenger HuntColor": "hsl(194, 70%, 50%)",
    },
    {
      "organization": "EGaDS!",
      "Events": 0,
      "EventsColor": "hsl(90, 70%, 50%)",
      "Extra events": 0,
      "Extra eventsColor": "hsl(37, 70%, 50%)",
      "Hosting": 100,
      "HostingColor": "hsl(259, 70%, 50%)",
      "Participation": 0,
      "ParticipationColor": "hsl(209, 70%, 50%)",
      "Scavenger Hunt": 5 * 15,
      "Scavenger HuntColor": "hsl(69, 70%, 50%)",
    },
    {
      "organization": "Freetail Hackers",
      "Events": 200,
      "EventsColor": "hsl(194, 70%, 50%)",
      "Extra events": 0,
      "Extra eventsColor": "hsl(300, 70%, 50%)",
      "Hosting": 100,
      "HostingColor": "hsl(324, 70%, 50%)",
      "Participation": 0,
      "ParticipationColor": "hsl(212, 70%, 50%)",
      "Scavenger Hunt": 15 * 15,
      "Scavenger HuntColor": "hsl(67, 70%, 50%)",
    },
    {
      "organization": "Girls Who Code",
      "Events": 0,
      "EventsColor": "hsl(194, 70%, 50%)",
      "Extra events": 0,
      "Extra eventsColor": "hsl(300, 70%, 50%)",
      "Hosting": 100,
      "HostingColor": "hsl(324, 70%, 50%)",
      "Participation": 0,
      "ParticipationColor": "hsl(212, 70%, 50%)",
      "Scavenger Hunt": 15 * 15,
      "Scavenger HuntColor": "hsl(67, 70%, 50%)",
    },
    {
      "organization": "Quantum Collective",
      "Events": 0,
      "EventsColor": "hsl(194, 70%, 50%)",
      "Extra events": 0,
      "Extra eventsColor": "hsl(300, 70%, 50%)",
      "Hosting": 100,
      "HostingColor": "hsl(324, 70%, 50%)",
      "Participation": 0,
      "ParticipationColor": "hsl(212, 70%, 50%)",
      "Scavenger Hunt": 5 * 15,
      "Scavenger HuntColor": "hsl(67, 70%, 50%)",
    },
    {
      "organization": "UTPC",
      "Events": 100,
      "EventsColor": "hsl(194, 70%, 50%)",
      "Extra events": 0,
      "Extra eventsColor": "hsl(300, 70%, 50%)",
      "Hosting": 100,
      "HostingColor": "hsl(324, 70%, 50%)",
      "Participation": 0,
      "ParticipationColor": "hsl(212, 70%, 50%)",
      "Scavenger Hunt": 4 * 15,
      "Scavenger HuntColor": "hsl(67, 70%, 50%)",
    },
  ];

  return <div className="page-header header-filter">
      <Container style={{
        top : '20%',
        height: "400px"
      }}>
        <h1
          style={{
            fontSize: '40px',
            fontFamily: 'bdr-mono, sans-serif',
            fontStyle: 'normal',
            fontWeight: '300',
            color : '#E36EF4',
          }} 
        >TOTAL BITS</h1>
        <ResponsiveBar
          data={data}
          keys={[
              'Events',
              'Hosting',
              'Scavenger Hunt',
              'Extra events',
              'Participation',
          ]}
          theme={{
            textColor: 'white',
            fontFamily : 'soleil, sans-serif',
            fontStyle : 'bold',
            fontWeight : 300,
          }}
          indexBy="organization"
          margin={{ top: 0, right: 150, bottom: 25, left: 120 }}
          padding={0.3}
          layout='horiztonal'
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={['#FF9343', '#1764FF', '#42A560', '#E36EF4', '#E54141']}
          borderColor={{
              from: 'color',
              modifiers: [
                  [
                      'darker',
                      1.6
                  ]
              ]
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Points',
              legendPosition: 'middle',
              legendOffset: 32,
          }}
          axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendPosition: 'middle',
              legendOffset: -140,
          }}
          labelTextColor={['#ffffff']}
          legends={[
              {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                itemTextColor: 'white',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemOpacity: 1,
                      color: 'white',
                    }
                  }
                ]
              }
          ]}
          role="application"
          ariaLabel="Total Bits For Each Organization Chart"
          barAriaLabel={function(e){ return `${e.indexValue}'s ${e.id}: ${e.formattedValue}`}}
        />
      </Container>
    </div>
}
