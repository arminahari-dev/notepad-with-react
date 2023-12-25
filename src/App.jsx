import { useState } from "react";
import AddNewNote from "./components/AddNewNote";
import ShowNotes from "./components/ShowNotes";
import NotesStatus from "./components/NotesStatus";
import NoteHeader from "./components/NoteHeader";

function App() {
  const [notes, setNotes] = useState([]);
  const [sortby, setsortby] = useState("latest");

  const deleteHandler = (id) => {
    // const filterNotes = notes.filter((n) => n.id !== id);
    // setNotes(filterNotes);
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };

  const onCheckHandler = (completed, id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id
          ? {
              ...note,
              completed: !completed,
            }
          : note
      )
    );
  };

  return (
    <div className="bg-hello h-screen">
      <NoteHeader
        notescount={notes.length}
        sortby={sortby}
        onsort={(e) => setsortby(e.target.value)}
      />
      <hr className="my-0 mx-auto w-3/4 h-0.5 self-center bg-gray-700" />
      <div className="content max-[1360px]:flex-col max-[1360px]:items-center max-[1360px]:gap-28 flex justify-center gap-80 pt-12 pb-12">
        <div>
          <AddNewNote setNotes={setNotes} />
        </div>
        <div className="Show flex flex-col gap-16">
          <NotesStatus notes={notes} />
          <ShowNotes
            notes={notes}
            sortby={sortby}
            deleteHandler={deleteHandler}
            onCheckHandler={onCheckHandler}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
