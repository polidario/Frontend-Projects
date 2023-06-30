import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { postData, updateData } from "../services/taskApi";

export default function Modal({ mode, setIsModalOpen }) {
    const [isEdit, setIsEdit] = useState(false);

    const [data, setData] = useState({
        username: "helloworld",
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

    const handleChange = (e) => {
        e.preventDefault();
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    const submitUpdate = (data) => {
        updateData(data.id, data);
    }

    const submitCreate = (data) => {
        postData(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        isEdit ? submitUpdate(data) : submitCreate(data);
        console.log(data);
    }

    return (
        <div className="Modal">
            <div className="modal-container">
                <div className="modal-header">
                    <h2 className="modal-title">{isEdit ? "Edit task" : "Create a new task"}</h2>
                    <XMarkIcon className="icon" onClick={() => setIsModalOpen(false)} />
                </div>

                <div className="modal-content">
                    <form className="modal-form" onSubmit={handleSubmit}>
                        <label htmlFor="title" className="form-label">Title</label>
                        <input 
                            onChange={(e) => handleChange(e)}
                            value={data.title}
                            type="text" 
                            id="title" 
                            name="title" 
                            className="form-input" 
                            required />

                        <label htmlFor="description" className="form-label">Description</label>
                        <input 
                            onChange={(e) => handleChange(e)}
                            value={data.description}
                            type="text" 
                            id="description" 
                            name="description" 
                            className="form-input" 
                            required />

                        <label htmlFor="urgency" className="form-label">Urgency</label>
                        <input 
                            onChange={(e) => handleChange(e)}
                            value={data.urgency}
                            type="range" 
                            id="urgency" 
                            name="urgency" 
                            min="1" max="5"
                            className="form-input" 
                            required/>

                        <button type="submit">Add task</button>
                    </form>
                </div>
                
                
            </div>
        </div>
    )
}