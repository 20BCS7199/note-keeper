import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes,setNotes]=useState([]);

 function addNote(newNotes){
   setNotes(preNotes =>{
     return (
       [...preNotes,newNotes]
     )
   })

 }
 function deleteNote(id){
  setNotes( prevNotes =>{
    return prevNotes.filter((noteitems,index) => {
      return index!==id;
     });
   });}
  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote}
      />
     {
       notes.map((noteitems,index)=> {
         return (
           <Note 
           id={index}
           key={index}
           title={noteitems.title} 
           content={noteitems.content} 
           onDelete={deleteNote}
           />);
       })
     }
      <Footer />
    </div>
  );
}

export default App;
