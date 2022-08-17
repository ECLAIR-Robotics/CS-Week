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
import { Line } from "react-chartjs-2";
import bigChartData from "variables/charts.js";

import {
  Card,
  CardHeader,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import { ScavengerHeader } from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

export default function ScavengerPage() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  },[]);

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <ScavengerHeader />
          <Card className="card-chart card-plain">
            <CardHeader>
              <div className="chart-area"
                  style={{'width' : '80%', 'margin-left' : 'auto', 'margin-right' : 'auto'}}>
                <Line
                  data={bigChartData.data}
                  options={bigChartData.options}
                />
              </div>
            </CardHeader>
          </Card>
       <Footer />
      </div>
    </>
  )
}
