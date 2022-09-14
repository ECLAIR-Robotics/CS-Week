import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import {
  Row,
  Col,
} from "reactstrap";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

function Rectangle ({
  color
}) {
  return <div style={{
    'display' : 'inline-block',
    'background' : color,
    'width' : '100%',
    'height' : '60px',
  }}></div>
}

export default function ControlledAccordions({
  eventDay
}) {

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(panel);
  };

  const events = [
    // Monday Events
    [
      {
        'name' : 'N/A',
        'time' : '5:00PM-6:00PM',
        'loc'  : 'N/A',
      },
      {
        'name' : 'N/A',
        'time' : '6:00PM-7:00PM',
        'loc'  : 'N/A',
      },
      {
        'name' : 'N/A',
        'time' : '7:00PM-8:00PM',
        'loc'  : 'N/A',
      },
      {
        'name' : 'N/A',
        'time' : '8:00PM-9:00PM',
        'loc'  : 'N/A',
      },
      {
        'name' : 'N/A',
        'time' : '9:00PM-10:00PM',
        'loc'  : 'N/A',
      },
    ],
    // Tuesday Events
    [
      {
        'name' : 'N/A',
        'time' : '5:00PM-6:00PM',
        'loc'  : 'N/A',
      },
      {
        'name' : 'N/A',
        'time' : '6:00PM-8:00PM',
        'loc'  : 'N/A',
      },
      {
        'name' : 'N/A',
        'time' : '8:00PM-9:00PM',
        'loc'  : 'N/A',
      },
      {
        'name' : 'N/A',
        'time' : '9:00PM-10:00PM',
        'loc'  : 'N/A',
      },
    ],
    // Wednesday Events
    [
      {
        'name' : 'N/A',
        'time' : '5:00PM-6:00PM',
        'loc'  : 'N/A',
      },
      {
        'name' : 'A4C',
        'time' : '6:00PM-7:00PM',
        'loc'  : 'N/A',
      },
      {
        'name' : 'N/A',
        'time' : '9:00PM-10:00PM',
        'loc'  : 'N/A',
      },
    ],
    // Thursday Events
    [
      {
        'name' : 'N/A',
        'time' : '5:00PM-6:00PM',
        'loc'  : 'N/A',
      },
      {
        'name' : 'ACM',
        'time' : '6:00PM-7:00PM',
        'loc'  : 'N/A',
      },
      {
        'name' : 'ECLAIR',
        'time' : '7:00PM-8:00PM',
        'loc'  : 'N/A',
      },
      {
        'name' : 'Convergent',
        'time' : '8:00PM-9:00PM',
        'loc'  : 'N/A',
      },
      {
        'name' : 'Roadshow',
        'time' : '9:00PM-10:00PM',
        'loc'  : 'N/A',
      },
    ],
    // Friday Events
    [
      {
        'name' : 'N/A',
        'time' : '5:00PM-6:00PM',
        'loc'  : 'N/A',
      },
      {
        'name' : 'UTPC',
        'time' : '6:00PM-8:00PM',
        'loc'  : 'N/A',
      },
    ],
    // Saturday Events
    [
      {
        'name' : 'N/A',
        'time' : '10:00AM-11:00AM',
        'loc'  : 'N/A',
      },
      {
        'name' : 'N/A',
        'time' : '11:00AM-12:00PM',
        'loc'  : 'N/A',
      },
      {
        'name' : 'N/A',
        'time' : '12:00PM-1:00PM',
        'loc'  : 'N/A',
      },
      {
        'name' : 'N/A',
        'time' : '1:00PM-2:00PM',
        'loc'  : 'N/A',
      },
      {
        'name' : 'N/A',
        'time' : '2:00PM-3:00PM',
        'loc'  : 'N/A',
      },
      {
        'name' : 'N/A',
        'time' : '3:00PM-4:00PM',
        'loc'  : 'N/A',
      },
      {
        'name' : 'N/A',
        'time' : '4:00PM-:00PM',
        'loc'  : 'N/A',
      },
    ],
  ]

  const eventProps = {
    'backgroundColor' : "#1C248B",
    'border-radius' : '40px 0px 0px 0px',
  }

  const scavengerProps = {
    'backgroundColor' : '#151D6E',
    'border-radius' : '40px 0px 0px 0px',
    'margin-top' : '-30px'
  }

  const extraProps = {
    'backgroundColor' : '#0E153E',
    'border-radius' : '40px 0px 0px 0px',
    'margin-top' : '-30px'
  }

  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        style={eventProps}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          style={eventProps}
        >
          <Typography
            style={{'font-size' : '24px', 'margin-left' : '10px',}}
          >
            Events
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Col>
            <Row>
              {Object.keys(events[eventDay]).map((k, i) => {
                return <blockquote>
                  <p className="blockquote blockquote-white justify-content-center">
                    {events[eventDay][i]['name']} <br />
                    {events[eventDay][i]['time']} <br />
                    {events[eventDay][i]['loc']} <br />
                  </p>
                </blockquote>
              })}
            </Row>
          </Col>
        </AccordionDetails>
      </Accordion>
      <Rectangle color='#1C248B'/>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        sx={scavengerProps}
      >
        <AccordionSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          sx={scavengerProps}
        >
          <Typography
            style={{'font-size' : '24px', 'margin-left' : '10px',}}
          >
            Scavenger Hunts
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Rectangle color='#151D6E'/>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
        sx={extraProps}
      >
        <AccordionSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
          sx={extraProps}
        >
          <Typography
            style={{'font-size' : '24px', 'margin-left' : '10px',}}
          >
            Extra Events
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}