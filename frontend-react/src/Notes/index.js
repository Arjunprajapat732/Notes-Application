import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Notes() {
  const [notes, setNotes] = useState([]);
  // console.log(process.env.REACT_APP_API_BACKEND_URL);
  useEffect(() => {
    // Fetch notes from API when the component mounts
    const fetchNotes = async () => {
      try {
        axios.get(`${process.env.REACT_APP_API_BACKEND_URL}notes`).then(response => {
          // console.log(response.data);
          setNotes(response.data);
        })
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      try {
        await axios.delete(`${process.env.REACT_APP_API_BACKEND_URL}note/delete?id=${id}`);
        setNotes(notes.filter(note => note.id !== id));
        toast.success('Note delete successfully', {position: 'top-right'});
      } catch (error) {
        console.error("Error deleting note:", error);
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Notes</h2>
      <table className="table table-striped table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Content</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note, index) => (
            <tr key={note.id}>
              <td>{index + 1}</td>
              <td>{note.title}</td>
              <td>{note.content}</td>
              <td>
                <Link className="btn btn-primary btn-sm" to={`/edit/${note.id}`}>Edit</Link>
                <button
                  className="btn btn-danger btn-sm mx-1"
                  onClick={() => handleDelete(note.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Notes;
