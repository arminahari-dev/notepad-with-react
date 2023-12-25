import Toast from "./Toast";

import { RocketLaunchIcon } from "@heroicons/react/24/solid";

const NotesStatus = ({ notes }) => {
  const allNotes = notes.length;
  //   const completedNotes = notes.filter((n) => {
  //     n.completed == tr;
  //     console.log(n.completed);
  //   }).length;
  const completedNotes = notes.filter((n) => n.completed).length;
  const openNotes = allNotes - completedNotes;
  if (notes.length == 0) {
    return (
      <Toast>
        <p>write something!</p>
        <RocketLaunchIcon style={{ width: "30px" }} />
      </Toast>
    );
  }
  return (
    <div className="badge flex flex-row justify-around max-w-[38rem]">
      <div className="all flex flex-row items-center justify-center gap-4">
        <p className="text-yellow-50">All</p>
        <span className="bg-gray-500 p-1 rounded-full text-yellow-50">
          {allNotes}
        </span>
      </div>
      <div className="completed flex flex-row items-center justify-center gap-4">
        <p className="text-yellow-50">completed</p>
        <span className="bg-gray-500 p-1 rounded-full text-yellow-50">
          {completedNotes}
        </span>
      </div>
      <div className="open flex flex-row items-center justify-center gap-4">
        <p className="text-yellow-50">open</p>
        <span className="bg-gray-500 p-1 rounded-full text-yellow-50">
          {openNotes}
        </span>
      </div>
    </div>
  );
};

export default NotesStatus;
