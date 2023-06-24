import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

export default function Modal({ mode }) {
    const [isEdit, setIsEdit] = useState(false);

    const [data, setData] = useState({
        username: "",
        title: "",
        description: "",
        urgency: 1,
        date: isEdit ? "" : new Date().toISOString().slice(0, 10),
    });

    useEffect(() => {
        if (mode === "edit") {
            setIsEdit(true);
        }
    }, [mode]);

    return (
        <div className="Modal">
            <div className="modal-container">
                <div className="modal-header">
                    <h2 className="modal-title">{isEdit ? "Edit task" : "Create a new task"}</h2>
                    <XMarkIcon className="icon" />
                </div>
                
                <form className="modal-form">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" id="title" name="title" className="form-input" required />

                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" id="description" name="description" className="form-input" required/>

                    <label htmlFor="urgency" className="form-label">Urgency</label>
                    <input type="range" id="urgency" name="urgency" min="1" max="5" defaultValue="1" className="form-input" required/>

                    <button type="submit">Add task</button>
                </form>
            </div>
        </div>
    )
}