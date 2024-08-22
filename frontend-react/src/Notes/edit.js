import axios from 'axios';
import React, { useState, useEffect } from "react";
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

function NotesForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isEditMode, setIsEditMode] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            setIsEditMode(true);
            axios.get(`${process.env.REACT_APP_API_BACKEND_URL}note/detail?id=${id}`)
                .then(response => {
                    const note = response.data;
                    setTitle(note.title);
                    setContent(note.content);
                })
                .catch(error => {
                    console.error("There was an error fetching the note!", error);
                });
        } else {
            setIsEditMode(false);
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const noteData = { title, content };

        if (isEditMode) {
            axios.post(`${process.env.REACT_APP_API_BACKEND_URL}note/store?id=${id}`, noteData)
                .then(response => {
                    console.log("Note updated successfully:", response.data);
                    toast.success('Note updated successfully', {position: 'top-right'});
                    navigate('/');
                })
                .catch(error => {
                    console.error("There was an error updating the note!", error);
                });
        } else {
            axios.post(`${process.env.REACT_APP_API_BACKEND_URL}note/store`, noteData)
                .then(response => {
                    console.log("New note added successfully:", response.data);
                    toast.success('New note added successfully', {position: 'top-right'});
                    navigate('/');
                })
                .catch(error => {
                    console.error("There was an error adding the note!", error);
                });
        }
    };

    return (
        <div className="container mt-5">
            <h1>{isEditMode ? "Edit Note" : "Add Note"}</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter title"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="content" className="form-label">
                        Content
                    </label>
                    <textarea
                        className="form-control"
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Enter content"
                        rows="5"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                    {isEditMode ? "Save Changes" : "Add Note"}
                </button>
            </form>
        </div>
    );
}

export default NotesForm;