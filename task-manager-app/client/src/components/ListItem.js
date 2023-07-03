import React from 'react';
import TickIcon from './TickIcon';
import UrgencyBar from './UrgencyBar';
import { deleteData } from '../services/taskApi';

export default function ListItem({ task, fetchTasks, openModal }) {
    const { id, title, description } = task;

    const deleteTask = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    
        if (confirmDelete) {
            try {
                await deleteData(id).then((res) => {
                    fetchTasks();
                });
            } catch (err) {
                console.log(err)
            }
        }
    };

    return (
        <div className="ListItem" key={id}>
            <div className='item-container'>
                <TickIcon />
                <div className='flex flex-col gap-5'>
                    <h1 className="title">{title}</h1>
                    <p className="description">{description}</p>
                    <div className="flex flex-row">
                        <UrgencyBar urgency={3} />
                    </div>
                </div>
                
            </div>
            <div className="button-container">
                <button className='edit' onClick={() => {
                    openModal(task);
                }}>Edit</button>

                <button className='delete' onClick={() => {
                    deleteTask(id);
                }}
                >Delete</button>
            </div>
        </div>
        
    )
}