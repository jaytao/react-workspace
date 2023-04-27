import * as React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CommandsComponent = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <h1>Vim</h1>
        </AccordionSummary>
        <AccordionDetails>
          <h4>Format JSON</h4>
          <CodeBlock
            showLineNumbers={false}
            theme={dracula}
            text=':%!jq .'
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CommandsComponent
