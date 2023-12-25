import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function AddNewNote({ setNotes }) {
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState("");
  const notify = () =>
    toast.error(" ! ریدی داداش", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  let onclickalert = !title || !desc ? notify : "";
  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !desc) {
    } else {
      const newNote = {
        title,
        desc,
        id: Date.now(),
        completed: false,
        createdAt: new Date().toISOString(),
      };
      setdesc("");
      setTitle("");
      setNotes((prevnotes) => [...prevnotes, newNote]);
    }
  };
  return (
    <form
      className="add-new flex flex-col items-center gap-[1.3rem]"
      onSubmit={submitHandler}
    >
      <h1 className="text-xl font-semibold">Add New Note</h1>
      <div className="add-new-titel pt-[5px]">
        <input
          type="text"
          name=""
          id=""
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="note titel ..."
          className="px-12 py-3 rounded-lg font-bold bg-white focus:outline-none"
        />
      </div>
      <div className="add-new-desc">
        <input
          type="text"
          name=""
          id=""
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
          placeholder="note descreption ..."
          className="px-12 py-3 rounded-lg font-bold bg-white focus:outline-none"
        />
      </div>
      <button
        href="#"
        type="submit"
        onClick={onclickalert}
        className="px-20 py-3 rounded-lg font-bold bg-indigo-600 text-emerald-50 w-72"
      >
        Add New Note
      </button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </form>
  );
}

export default AddNewNote;
