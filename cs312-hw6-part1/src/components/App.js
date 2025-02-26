import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((noteIn) => (
        <Note key={noteIn.key} title={noteIn.title} content={noteIn.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
