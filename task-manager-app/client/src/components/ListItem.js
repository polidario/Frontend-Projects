import React from 'react';
import TickIcon from './TickIcon';
import UrgencyBar from './UrgencyBar';

export default function ListItem({ task, fetchTasks, openModal }) {
    const { id, title, description } = task;

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
                    if (window.confirm("Are you sure you want to delete this task?")) {
                        fetchTasks();
                    }
                }}
                >Delete</button>
            </div>
        </div>
        
    )
}