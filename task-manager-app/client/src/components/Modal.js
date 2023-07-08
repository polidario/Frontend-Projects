import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState, useEffect, useContext } from "react";
import { postData, updateData } from "../services/taskApi";

import { AuthContext } from "../context/AuthContext.ts";
import Loading from "./Loading";

export default function Modal({ task, mode, setIsModalOpen, fetchTasks }) {
    const { user } = useContext(AuthContext);
    const [isEdit, setIsEdit] = useState(mode === "edit" ? true : false);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        username: isEdit ? task.username : user.username,
        title: isEdit ? task.title : "",
        description: isEdit ? task.description : "",
        urgency: isEdit ? task.urgency.toUpperCase() : "CASUAL",
        date: isEdit ? task.date : new Date().toISOString().slice(0, 10),
    });

    useEffect(() => {
        if (mode === "edit") {
            setIsEdit(true);
        }
    }, [mode]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData({
            ...data,
            [name]: value,
        });
    }

    const submitUpdate = (id, data) => {
        try {
            setIsLoading(true);
            updateData(id, data).then(() => {
                setIsModalOpen(false);
                fetchTasks();
                setIsLoading(false);
            });
        } catch (error) {
            console.error(error);
        }
    }

    const submitCreate = (data) => {
        try {
            setIsLoading(true);
            postData(data).then(() => {
                setIsModalOpen(false);
                fetchTasks();
                setIsLoading(false);
            });
        } catch (error) {
            console.error(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!isEdit) {
            submitCreate(data);
        } else {
            submitUpdate(task.id, data);
        }
    }
    if(isLoading) {
        return <Loading />
    }

    return (
        <>
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
                                className="form-input" 
                                rows={5}
                                required />

                            
                            <div className="flex flex-col gap-2 items-start p-4 border border-gray-200 rounded">
                                <div className="flex items-center">
                                    <input 
                                        onChange={(e) => handleChange(e)} 
                                        {...(isEdit && data.urgency === "CASUAL" && {checked: true})}
                                        id="casualCategory" 
                                        type="radio" 
                                        defaultValue="CASUAL"
                                        name="urgency" 
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 checked:bg-purple-700" />
                                    <label htmlFor="casualCategory" className="w-full ml-2 text-sm text-gray-900 font-normal">Casual</label>
                                </div>
                                <div className="flex items-center">
                                    <input 
                                        onChange={(e) => handleChange(e)}
                                        {...(isEdit && data.urgency === "IMPORTANT" && {checked: true})}
                                        id="importantCategory" 
                                        type="radio" 
                                        defaultValue="IMPORTANT"
                                        name="urgency" 
                                        className="w-4 h-4 text-blue-600 bg-purple-100 border-purple-300 checked:bg-purple-700" />
                                    <label htmlFor="importantCategory" className="w-full ml-2 text-sm text-gray-900 font-normal">Important</label>
                                </div>
                                <div className="flex items-center">
                                    <input 
                                        onChange={(e) => handleChange(e)} 
                                        {...(isEdit && data.urgency === "URGENT" && {checked: true})}
                                        id="urgentCategory" 
                                        type="radio" 
                                        defaultValue="URGENT"
                                        name="urgency" 
                                        className="w-4 h-4 text-blue-600 bg-purple-100 border-purple-300 checked:bg-purple-700" />
                                    <label htmlFor="urgentCategory" className="w-full ml-2 text-sm text-gray-900 font-normal">Urgent</label>
                                </div>
                            </div>

                            <button className='button button-primary' type="submit">{isEdit ? "Update Task" : "Create task"}</button>
                        </form>
                    </div>
                    
                    
                </div>
            </div>
        </>
        
    )
}