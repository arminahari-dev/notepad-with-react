const ShowNotes = ({ sortby, notes, deleteHandler, onCheckHandler }) => {
  let sortednotes = notes;
  if (sortby == "earliest") {
    sortednotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  } //a-b

  if (sortby == "latest") {
    sortednotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  } //b-a

  if (sortby == "completed") {
    sortednotes = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );
  }
  return sortednotes.map((note) => {
    return (
      <>
        {
          <Noteitem
            key={note.id}
            note={note}
            deleteHandler={deleteHandler}
            onCheckHandler={onCheckHandler}
          />
        }
      </>
    );
  });
};

export default ShowNotes;

let options = { year: "numeric", month: "long", day: "numeric" };

const Noteitem = ({ note, deleteHandler, onCheckHandler }) => {
  return (
    <div className="show flex flex-col  gap-[1.3rem]">
      <div className="notebox">
        <div class="px-4 bg-white p-6 rounded-lg shadow-md w-[37rem] flex flex-col gap-2">
          <div className="content-manage flex justify-center gap-[28rem] items-center">
            <div
              className={`note-content max-w-[2rem] ${
                note.completed == true ? "line-through" : ""
              }`}
            >
              <h2 className="font-black text-xl">{note.title}</h2>
              <p class="text-[#a5a5a5] font-semibold">{note.desc}</p>
            </div>
            <div className="actions flex justify-center gap-8">
              <button onClick={() => deleteHandler(note.id)}>x</button>
              <input
                type="checkbox"
                name=""
                id=""
                checked={note.completed}
                onClick={() => onCheckHandler(note.completed, note.id)}
              />
            </div>
          </div>
          <hr className="my-0 mx-auto w-[100%] h-0.5 self-center bg-gray-300" />
          <div className="footer">
            <p className="text-[#b6b6b6] font-semibold">
              {new Date(note.createdAt).toLocaleDateString("en-US", options)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
