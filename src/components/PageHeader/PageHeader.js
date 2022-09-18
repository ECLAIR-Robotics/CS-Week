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
import landingpage from 'assets/pages/landingpage.png';

// reactstrap components
import { Container } from "reactstrap";

export function PageHeader() {
  return (
    <div className="page-header header-filter" style={{
      backgroundImage : `url(${landingpage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <Container style={{
        'top' : '60%',
      }}>
        <h3 style={{
          'color' : '#E36EF4',
        }}>UT AUSTIN</h3>
        <h1
          style={{
            'font-size': '80px',
            'font-family' : 'soleil, sans-serif',
            'font-style' : 'bold',
            'font-weight' : 300,
          }} 
        >CS Week</h1>
        <h3>September 26th - October 1st</h3>
      </Container>
    </div>
  );
}



// No longer using this since scavenger is part of the schedule
export function ScavengerHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo text-primary">Scavenger Hunt</h1>
        </div>
      </Container>
    </div>
  );
}