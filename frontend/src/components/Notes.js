import React from "react";

function Notes({ notes, deleteNoteHandler, editNoteHandler }) {
  const handleDelete = (note) => {
    deleteNoteHandler(note.id);
  };

  const handleEdit = (note) => {
    editNoteHandler(note);
  };

  return (
    <div className="container flex flex-col items-center justify-center">
      <ul className="flex flex-col mt-4">
        {notes.map((note, index) => {
          return (
            <li className="border-gray-400 flex flex-row mb-2" key={index}>
              <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none  rounded-md flex flex-1 items-center p-4">
                <div className="flex-1 pl-1 md:mr-16">
                  <div className="font-medium dark:text-white">
                    {note.content}
                  </div>
                </div>
                <div className="ml-6 flex items-center">
                  <i
                    className="fas fa-trash cursor-pointer"
                    onClick={() => handleDelete(note)}
                  ></i>
                  <i
                    className="fas fa-edit cursor-pointer ml-6"
                    onClick={() => handleEdit(note)}
                  ></i>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Notes;
