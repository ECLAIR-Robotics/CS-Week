import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  Row,
  Col,
} from "reactstrap";

export default function ControlledAccordions({
  eventDay
}) {
  const [expanded, setExpanded] = React.useState(false);

  // State variables for extra events
  // false - unpersonalized, true - personalized
  const [extraType, setExtraType] = React.useState(false);

  React.useEffect(() => {
    setExpanded('panel1');
  },[]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
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

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{backgroundColor: "#1C248B"}}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Events
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor: "#1C248B"}}>
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
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          sx={{backgroundColor: "#151D6E"}}
        >
          <Typography sx={{ width: '33%', flexShrink: 0}}>
            Scavenger Hunt
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor: "#151D6E"}}>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          sx={{backgroundColor: "#0E153E"}}
        >
          <Typography sx={{ width: '33%', flexShrink: 0}}>
            Extra Events
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor: "#0E153E"}}>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}