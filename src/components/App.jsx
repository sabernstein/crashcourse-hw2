import React from "react";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <header>
        <h1> Keeper </h1>
      </header>
      {notes.map(function(note) {
        return(
          <Note
            title={note.title}
            content={note.content}
          />
        );
      })}
      <footer>
        <p> Copyright © 2021 </p>
      </footer>
    </div>
  );
}

export default App;
