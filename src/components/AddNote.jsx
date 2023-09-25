import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { addNote } from "../slices/counterSlice";

const AddNote = () => {
  const [notes, setNotes] = useState("");
  const dispatch = useDispatch();

  //   to handle changes of user input
  const changeHandler = (event) => {
    let note = event.target.value;
    setNotes(note);
  };

  //   save note in store
  const handleClick = () => {
    if (notes.length === 0) {
      alert("Please write a note first!");
    } else {
      dispatch(addNote(notes));
      setNotes("");
    }
  };
  return (
    <div>
      <div>
        <h4>Add Note</h4>

        <Box
          sx={{
            width: 2000,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="Write Note Here.."
            id="fullWidth"
            multiline
            rows={4}
            onChange={changeHandler}
            value={notes}
          />
        </Box>
        <br />
        <button className="btn btn-primary" onClick={handleClick}>
          Add Note
        </button>
      </div>
    </div>
  );
};

export default AddNote;
