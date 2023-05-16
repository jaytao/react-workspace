import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import echo from "../utils/test-echo";

const FormatComponent = () => {
  const [jsonTextFieldText, setJsonTextFieldText] = React.useState("");

  const setTextField = (event: React.ChangeEvent<HTMLInputElement>) =>
    setJsonTextFieldText(event.target.value);

  const echoButton = (event: React.MouseEvent<HTMLButtonElement>) =>
    setJsonTextFieldText(echo(jsonTextFieldText));

  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        width: 1000,
        maxWidth: "100%",
      }}
    >
      <div>
        <h2>JSON</h2>
        <Button onClick={echoButton} variant="outlined">
          Format
        </Button>
        <TextField
          value={jsonTextFieldText}
          onChange={setTextField}
          fullWidth
          label="jsonTextField"
          id="jsonTextField"
        />
      </div>
    </Box>
  );
};

export default FormatComponent;
