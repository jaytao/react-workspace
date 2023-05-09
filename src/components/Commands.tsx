import * as React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const codeBlock = (txt: string) => {
  return <CopyBlock showLineNumbers={false} theme={dracula} text={txt} />;
};

const CommandsComponent = () => {
  const content = [
    {
      header: "Vim",
      items: [
        {
          name: "Format JSON",
          function: codeBlock(":%!jq ."),
        },
      ],
    },
    {
      header: "jq",
      items: [
        {
          name: "Extract One Value from Array",
          function: codeBlock("cat foo.json | jq '.[] | .name' fruits.json"),
        },
        {
          name: "Extract multiple values from Array",
          function: codeBlock("cat foo.json | jq '.[] | {name, color}'"),
        },
      ],
    },
    {
      header: "Misc Bash",
      items: [
        {
          name: "sed/gsed replace expression in file",
          function: codeBlock("sed -i 's/old-text/new-text/g' input.txt"),
        },
      ],
    },

  ];

  const contentJSX = content.map((header, _) => (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <h1>{header.header}</h1>
      </AccordionSummary>
      {header.items.map((subHeader, _) => (
        <AccordionDetails>
          <h4>{subHeader.name}</h4>
          {subHeader.function}
        </AccordionDetails>
      ))}
    </Accordion>
  ));

  return <div>{contentJSX}</div>;
};

export default CommandsComponent;
