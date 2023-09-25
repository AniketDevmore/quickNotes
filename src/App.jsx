import "./App.css";
import AddNote from "./components/AddNote";
import AllNotes from "./components/AllNotes";

function App() {
  return (
    <div>
      <h4 className="text-center text-danger">Quick Notes</h4>
      <hr />
      <AddNote />
      <AllNotes />
    </div>
  );
}

export default App;
