import React, { useState } from "react";

function CreateArea(props) {
    const [note,setNote] = useState({
        title: "",
        content: ""
 
    });
    function handleClick(event){
        
        props.onAdd(note);
        setNote({
            title: "",
           content: ""
        })
        event.preventDefault();

    }

    function handleChange(event){
        const{name,value} =event.target;
        setNote(preValue =>{
            return{
                ...preValue,
                [name]:value} });}
  return (
    <div>
      <form>
        <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;