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

export default function ScavengerPoints() {
  const data = [
    {
      "organization": "ACM/A4C",
      "Progress": 0,
      "ProgressColor": "hsl(120, 70%, 50%)",
    },
    {
      "organization": "Convergent",
      "Progress": 0,
      "ProgressColor": "hsl(85, 70%, 50%)",
    },
    {
      "organization": "CS Roadshow",
      "Progress": 0,
      "ProgressColor": "hsl(219, 70%, 50%)",
    },
    {
      "organization": "CS Transfer Society",
      "Progress": 0,
      "ProgressColor": "hsl(306, 70%, 50%)",
    },
    {
      "organization": "ECLAIR",
      "Progress": 0,
      "ProgressColor": "hsl(46, 70%, 50%)",
    },
    {
      "organization": "EGaDS!",
      "Progress": 0,
      "ProgressColor": "hsl(90, 70%, 50%)",
    },
    {
      "organization": "Freetail Hackers",
      "Progress": 0,
      "ProgressColor": "hsl(194, 70%, 50%)",
    },
    {
      "organization": "Girls Who Code",
      "Progress": 0,
      "ProgressColor": "hsl(194, 70%, 50%)",
    },
    {
      "organization": "Quantum Collective",
      "Progress": 0,
      "ProgressColor": "hsl(194, 70%, 50%)",
    },
    {
      "organization": "UTPC",
      "Progress": 0,
      "ProgressColor": "hsl(194, 70%, 50%)",
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
        >SCAVENGER HUNT</h1>
        <h4>
          To see today's scavenger hunt, please visit the schedule page!
          (Note: rankings may take a few hours to update)
        </h4>
        <ResponsiveBar
          data={data}
          keys={['Progress']}
          theme={{
            textColor: 'white',
            fontFamily : 'soleil, sans-serif',
            fontStyle : 'bold',
            fontWeight : 300,
          }}
          indexBy="organization"
          margin={{ top: 0, right: 60, bottom: 25, left: 120 }}
          padding={0.3}
          layout='horiztonal'
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={['#E36EF4']}
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
          role="application"
          ariaLabel="Total Bits For Each Organization Chart"
          barAriaLabel={function(e){ return `${e.indexValue}'s ${e.id}: ${e.formattedValue}`}}
        />
      </Container>
    </div>
}
