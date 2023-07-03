import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState, useEffect, useContext } from "react";
import { postData, updateData } from "../services/taskApi";

import { AuthContext } from "../context/AuthContext.ts";

export default function Modal({ task, mode, setIsModalOpen, fetchTasks }) {
    const { user } = useContext(AuthContext);
    const [isEdit, setIsEdit] = useState(mode === "edit" ? true : false);

    const [data, setData] = useState({
        username: isEdit ? task.username : user.username,
        title: isEdit ? task.title : "",
        description: isEdit ? task.description : "",
        urgency: isEdit ? task.urgency : 1,
        date: isEdit ? task.date : new Date().toISOString().slice(0, 10),
    });

    useEffect(() => {
        if (mode === "edit") {
            setIsEdit(true);
        }
    }, [mode]);

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        setData({
            ...data,
            [name]: value,
        });
    }

    const submitUpdate = (id, data) => {
        try {
            updateData(id, data).then(() => {
                setIsModalOpen(false);
                fetchTasks();
            });
        } catch (error) {
            console.error(error);
        }
    }

    const submitCreate = (data) => {
        try {
            postData(data).then(() => {
                setIsModalOpen(false);
                fetchTasks();
            });
        } catch (error) {
            console.error(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!isEdit) {
            console.log("We'll create a new task!", fetchTasks);
            submitCreate(data);
        } else {
            console.log("We'll update the task!", fetchTasks);
            submitUpdate(task.id, data);
        }
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
                        <textarea 
                            onChange={(e) => handleChange(e)}
                            value={data.description}
                            id="description" 
                            name="description" 
                            className="form-input border-2 border-gray-300 p-2" 
                            rows={5}
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

                        <button type="submit">{isEdit ? "Update Task" : "Create task"}</button>
                    </form>
                </div>
                
                
            </div>
        </div>
    )
}