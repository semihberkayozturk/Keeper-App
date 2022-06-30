import React from "react";
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Note from "./Note.jsx";
import notes from "../notes";


function App() {
    return (
    <div>
        <Header />
            {notes.map(noteItems => <Note
        key={noteItems.key}
        title={noteItems.title}
        content={noteItems.content}
    />  
)};
        <Footer/>
    </div>
)};

export default App;