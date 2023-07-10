import "./App.css";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { SuggestionsData } from "./data";
import Button from "@mui/material/Button";

function App() {
  const [title, setTitle] = useState("Ask the Tutor");
  const [description, setDescription] = useState(
    "Ask the tutor about something"
  );
  const [prompt, setPrompt] = useState(
    "Tell me everything you know about $VAR$"
  );
  const [variable, setVariable] = useState("python");

  const textboxStyle = {
    width: "90%",
    marginBottom: "10px",
    marginLeft: "10px",
    marginTop: "10px",
  };

  const ChatComponent = (props) => {
    return (
      <div className="chat-container">
        <wc-orm-chat
          title={props.title}
          description={props.description}
          prompt={props.prompt}
        ></wc-orm-chat>
      </div>
    );
  };

  const Suggestions = () => {
    return (
      <div className="suggestions">
        <h3>Suggestions</h3>
        <ul>
          {SuggestionsData.map((item) => (
            <li>
              <a
                href="#"
                onClick={() => {
                  setTitle(item.title);
                  setDescription(item.description);
                  setPrompt(item.prompt);
                }}
              >
                {item.title}. {item.description}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className="header">
            <h1>Prompt Workshop</h1>
            <p>
              A scratchpad for testing various prompts in the chat web
              component.
            </p>
          </div>
        </Grid>
        <Grid item xs={6}>
          <TextField
            sx={textboxStyle}
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <TextField
            sx={textboxStyle}
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
            maxRows={2}
          />
          <br />
          <TextField
            sx={textboxStyle}
            label="$VAR$"
            value={variable}
            onChange={(e) => setVariable(e.target.value)}
          />
          <br />
          <TextField
            sx={textboxStyle}
            label="Prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            multiline
            maxRows={12}
          />
          <Suggestions />
        </Grid>
        <Grid item xs={6}>
          <Button sx={textboxStyle} variant="outlined">
            Copy the embed code
          </Button>
          <ChatComponent
            title={title}
            description={description}
            prompt={prompt.replace("$VAR$", variable)}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
