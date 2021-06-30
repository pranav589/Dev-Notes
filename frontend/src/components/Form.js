import React from "react";

function InputField({
  addNoteHandler,
  isEdit,
  text,
  setText,
  updateNoteHandler,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    addNoteHandler({
      id: Math.floor(Math.random() * 100000),
      content: text,
    });

    setText("");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateNoteHandler();
  };

  return (
    <div>
      <form className="pt-7 flex justify-center">
        <input
          className="input pl-1 rounded-l-lg border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="Enter your Note"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {isEdit ? (
          <button
            className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r"
            onClick={handleUpdate}
          >
            Update
          </button>
        ) : (
          <button
            className="px-7 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r"
            onClick={handleSubmit}
          >
            Add
          </button>
        )}
      </form>
    </div>
  );
}

export default InputField;
