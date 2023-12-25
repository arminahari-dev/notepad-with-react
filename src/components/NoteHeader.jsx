const NoteHeader = ({ notescount, sortby, onsort }) => {
  return (
    <div className="header h-32 flex items-center justify-center">
      <div className="header-content flex justify-center gap-64 max-[590px]:gap-26 max-[500px]:gap-20">
        <h1 className="text-3xl max-[850px]:text-2xl max-[590px]:text-xl font-black">
          My Notes({notescount})
        </h1>
        <select
          value={sortby}
          onChange={onsort}
          className="px-3 py-0.5 rounded-lg border-gray-400 border-2 font-bold bg-gray-300 text-center max-[850px]:w-32  max-[590px]:w-20"
        >
          <option value="latest">sort based on latest</option>
          <option value="earliest">sort based on earliest</option>
          <option value="completed">sort based on completed</option>
        </select>
      </div>
    </div>
  );
};

export default NoteHeader;
