import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../slices/counterSlice";

const AllNotes = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.data);

  const deleteHandle = (ele) => {
    dispatch(deleteNote(ele));
  };
  return (
    <div>
      {/* to hide if there is no notes in store */}

      {notes.length === 0 ? (
        <></>
      ) : (
        <div className="mt-4">
          <h4>Your Notes</h4>
          <hr />
          {/* to disply all data */}
          <div className="d-flex justify-content-evenly flex-wrap">
            {notes.map((ele, i) => (
              <div
                key={i}
                className="card text-bg-light mb-3 "
                style={{ width: "18rem" }}
              >
                <div className="card-header">
                  <h5 className="card-title">Note {i + 1}</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">{ele}</p>
                </div>
                <button
                  className="btn btn-danger w-50 p-2 mb-2 ms-2"
                  onClick={() => deleteHandle(ele)}
                >
                  Delete Note
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllNotes;
