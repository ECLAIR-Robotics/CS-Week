import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import {
  Row,
  Col,
  Button
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
    display : 'inline-block',
    background : color,
    width : '100%',
    height : '60px',
  }}></div>
}

export default function ControlledAccordions({
  eventDay,
  expanded,
  setExpanded,
}) {

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(panel);
  };

  const events = [
    // Monday Events
    [
      {
        name: "CS Week",
        time: "5:00PM-6:00PM",
        loc: "GDC Auditorium",
        event: "Kickoff!",
      },
      {
        name: "Girls Who Code",
        time: "6:00PM-7:00PM",
        loc: "GDC 4.304",
        event: "Jeopardy",
      },
      {
        name: "CS Transfer Society",
        time: "7:00PM-8:00PM",
        loc: "GDC Atrium",
        event: "Scavenger Hunt",
      },
      {
        name: "Quantum Collective",
        time: "8:00PM-9:00PM",
        loc: "GDC 1.304",
        event: "Quantum Games",
      },
      //{
      //  'name' : 'TBD',
      //  'time' : '9:00PM-10:00PM',
      //  'loc'  : 'N/A',
      //},
    ],
    // Tuesday Events
    [
      {
        name: "Convergent",
        time: "5:00PM-6:00PM",
        loc: "GDC 4.304",
        event: "Convergent Tank",
      },
      {
        name: "EGaDS",
        time: "6:00PM-8:00PM",
        loc: "GDC 5.302",
        event: "Arcade Night",
      },
      {
        name: "ECLAIR",
        time: "8:00PM-9:00PM",
        loc: "GDC 6.302",
        event: "Mock Casino",
      },
      //{
      //  'name' : 'TBD',
      //  'time' : '9:00PM-10:00PM',
      //  'loc'  : 'N/A',
      //},
    ],
    // Wednesday Events
    [
      {
        name: "Freetail Hackers",
        time: "5:00PM-6:00PM",
        loc: "GDC Courtyard",
        event: "Field Day",
      },
      {
        name: "A4C",
        time: "6:00PM-7:00PM",
        loc: "GDC 2.410",
        event: "Debate Tournament",
      },
      //{
      //  'name' : 'TBD',
      //  'time' : '9:00PM-10:00PM',
      //  'loc'  : 'N/A',
      //},
    ],
    // Thursday Events
    [
      //{
      //  'name' : 'TBD',
      //  'time' : '5:00PM-6:00PM',
      //  'loc'  : 'N/A',
      //},
      {
        name: "ACM",
        time: "6:00PM-7:00PM",
        loc: "GDC 4.302",
        event: "Trivia Night",
      },
      {
        name: "Roadshow",
        time: "9:00PM-10:00PM",
        loc: "GDC 4.302/4.304",
        event: "Mario Kart Tournament",
      },
    ],
    // Friday Events
    [
      //{
      //  'name' : 'TBD',
      //  'time' : '5:00PM-6:00PM',
      //  'loc'  : 'N/A',
      //},
      {
        name: "UTPC",
        time: "6:00PM-8:00PM",
        loc: "GDC 2.216",
        event: "Programming Comp.",
      },
    ],
    // Saturday Events
    [
      {
        name: "TBD",
        time: "10:00AM-11:00AM",
        loc: "N/A",
      },
      {
        name: "TBD",
        time: "11:00AM-12:00PM",
        loc: "N/A",
      },
      {
        name: "N/A",
        time: "12:00PM-1:00PM",
        loc: "N/A",
      },
      {
        name: "TBD",
        time: "1:00PM-2:00PM",
        loc: "N/A",
      },
      {
        name: "TBD",
        time: "2:00PM-3:00PM",
        loc: "N/A",
      },
      {
        name: "TBD",
        time: "3:00PM-4:00PM",
        loc: "N/A",
      },
      {
        name: "TBD",
        time: "4:00PM-5:00PM",
        loc: "N/A",
      },
    ],
  ];

  const eventProps = {
    'backgroundColor' : "#1C248B",
    'border-radius' : '40px 0px 0px 0px',
  }

  const scavengerProps = {
    'backgroundColor' : '#151D6E',
    'border-radius' : '40px 0px 0px 0px',
    'margin-top' : '-30px',
  }

  const extraProps = {
    'backgroundColor' : '#0E153E',
    'border-radius' : '40px 0px 0px 0px',
    'margin-top' : '-30px',
  }

  const titleProps = {
    'font-size' : '30px',
    marginLeft : '10px',
    'font-family' : 'bdr-mono, sans-serif',
    'font-style' : 'normal',
    'font-weight' : 300,
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
          <Typography style={titleProps}>
            <i className="tim-icons icon-calendar-60 mr-3 mb-1"/>
            EVENTS
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{height : `${window.innerHeight - 350}px`}}
        >
          <Col>
            <Row style={{width: '80%'}}>
              {Object.keys(events[eventDay]).map((k, i) => {
                return <blockquote>
                  <p className="blockquote blockquote-white justify-content-center"
                    style={{
                      fontSize : '18px',
                      marginLeft : '30px',
                      whiteSpace : 'pre',
                    }}
                  >
                    {events[eventDay][i]['name']} <br />
                    {events[eventDay][i]['event']} <br />
                    {events[eventDay][i]['time']}{' '}{events[eventDay][i]['loc']} <br />
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
          <Typography style={titleProps}>
            <i className="tim-icons icon-puzzle-10 mr-3 mb-1" />
            SCAVENGER HUNTS
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{height : `${window.innerHeight - 350}px`}}
        >
          <h4 className='text-white' style={{
            width : '70%',
            marginLeft : '17px',
          }}>Scavenger Hunts will be published at 9AM everyday on this website.
            These events will be designed in such a way that they will be
            <font className='text-warning'> very difficult to complete on your own, </font>
            so we highly encourage you to work with others! You are allowed to use
            ANY resource you wish to solve these puzzles (professors, internet, chemists,
            your mom, anyone and anything!).
            <font className='text-danger'> However, please DO NOT copy answers
            from another organization! </font>
            We will post occasional hints here so be sure to check if you get stuck! :)
          </h4>
          <Button
            color='danger'
            style={{marginLeft : '17px'}}
            href='https://forms.gle/ZtQMqnHCSAMA5vAJ8'
            target='_blank'
          >
            Click here to start the scavenger hunt for Friday!
          </Button>
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
          <Typography style={titleProps}>
            <i className="tim-icons icon-trophy mr-3 mb-1"/>
            EXTRA EVENTS
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{height : `${window.innerHeight - 350}px`}}
        >
          <h4 className='text-white'
            style={{
              width : '70%',
              marginLeft : '17px',
            }}
          >
            <font className='text-warning'>Extra Events </font>are random,
            miscellaneous ways to get extra points for your organization.
            These typically consist of fun, unique activities to get you
            out of your comfort zone
            <br />
            <br />
          </h4>
          <Button
            color='info'
            style={{marginLeft : '17px'}}
            href='https://docs.google.com/document/d/1fMGd2fXaWTBkCw1KtdnofT_xO2OQAwcJkOwnlut-9Ao/edit?usp=sharing'
            target='_blank'
          >
            Click here to view the extra events for this year!
          </Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
