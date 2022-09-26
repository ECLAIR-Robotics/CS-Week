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
Pagination,
PaginationItem,
PaginationLink,
} from "reactstrap";

export default function PaginatedImpact() {

  const[pageNum, setPageNum] = React.useState(1);

  return (
    <div>
      <Pagination listClassName="justify-content-center">
        <PaginationItem active={pageNum === 1}
          onClick={() => {setPageNum(1)}}>
          <PaginationLink>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem active={pageNum === 2}
          onClick={() => {setPageNum(2)}}>
          <PaginationLink>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem active={pageNum === 3}
          onClick={() => {setPageNum(3)}}>
          <PaginationLink>
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem active={pageNum === 4}
          onClick={() => {setPageNum(4)}}>
          <PaginationLink>
            4
          </PaginationLink>
        </PaginationItem>
      </Pagination>
      {pageNum === 1 &&
        <div className="mt-4">
          <h3 className="text-white">
            <i className="icon icon-info tim-icons icon-sound-wave mr-3"
              style={{'font-size': '1.8em'}}/>
            Covid-19
          </h3>
          <h4 className="text-white">
            The pandemic had a massive impact on in-person events
            especially in CS department. CS Week aims to provide fun
            team building activities to help transition back to
            in-person events
          </h4>
          <hr className="line-info" />
        </div>
      }
      {pageNum === 2 &&
        <div className="mt-4">
          <h3 className="text-white">
            <i className="icon icon-danger tim-icons icon-time-alarm mr-3"
              style={{'font-size': '1.8em'}}/>
            Burnout is Real
          </h3>
          <h4 className="text-white">
            Computer science, as a field, can feel very independent
            and isolating at times. We hope students can take a break
            and look forward to something fun and exciting while being
            a part of a new college tradition
          </h4>
          <hr className="line-danger" />
        </div>
      }
      {pageNum === 3 &&
        <div className="mt-4">
          <h3 className="text-white">
            <i className="icon icon-primary tim-icons icon-chart-pie-36 mr-3"
              style={{'font-size': '1.8em'}}/>
            Community Building
          </h3>
          <h4 className="text-white">
            UTCS feels relatively isolated as people work independently
            through the year. However, many like-minded individuals
            roam the halls of GDC daily. We hope that undergraduate CS
            and UTCS orgs can come together and create something that
            makes the whole community stronger!
          </h4>
          <hr className="line-primary" />
        </div>
      }
      {pageNum === 4 && 
        <div className="mt-4">
          <h3 className="text-white">
            <i className="icon icon-success tim-icons icon-single-02 mr-3"
              style={{'font-size': '1.8em'}}/>
            Diversity, Equity, and Inclusion
          </h3>
          <h4 className="text-white">
            We strongly believe that the most vocal initiative should not
            be the only important initiative. CS Week hopes to allow all
            initiatives, big or small, to have a microphone and create a
            space for all UTCS members
          </h4>
          <hr className="line-success" />
        </div>
      }
    </div>
  );
}
