import React, { useEffect, useState } from "react";
import { deleteNote } from "../api/notesApi";

function Notes({ editNoteHandler, note, fetchNotes }) {
  const [token, setToken] = useState("");
  const [starred, setStarred] = useState(false);

  useEffect(() => {
    const tokenData = localStorage.getItem("token_store");
    if (tokenData) {
      setToken(token);
    }
  }, [token]);

  const handleDelete = async (note) => {
    const token = localStorage.getItem("token_store");
    if (token) {
      await deleteNote(note._id, {
        headers: { Authorization: token },
      });
    }
    fetchNotes();
  };

  const handleEdit = (note) => {
    editNoteHandler(note);
  };

  const handleStarred = () => {
    setStarred(!starred);
  };

  return (
    <div className="container flex flex-col items-center justify-center">
      <ul className="flex flex-col mt-4">
        <li className="border-gray-400 flex flex-row mb-2">
          <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none  rounded-md flex flex-1 items-center p-4">
            <div className="flex-1 pl-1 md:mr-16">
              <div className="font-medium dark:text-white">{note.content}</div>
              <div className="text-gray-400 text-sm">
                {note.date.split("T")[0]}
              </div>
            </div>
            <div className=" flex items-center">
              <i
                className="fas fa-trash cursor-pointer mr-3"
                onClick={() => handleDelete(note)}
              ></i>
              <i
                className="fas fa-edit cursor-pointer mr-2"
                onClick={() => handleEdit(note)}
              ></i>
              <i
                class={
                  starred
                    ? "fas fa-star mr-2 cursor-pointer"
                    : "far fa-star mr-2 cursor-pointer"
                }
                onClick={handleStarred}
              ></i>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Notes;
