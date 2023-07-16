import React, { useState, useEffect } from 'react';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/solid';
import { deleteData, updateTaskStatus } from '../services/taskApi';
import Loading from './Loading';

export default function ListItem({ task, fetchTasks, openModal }) {
    const { id, title, description, urgency, completed } = task;
    const [isLoading, setIsLoading] = useState(false);

    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    const updateMedia = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

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

    const completeTask = async (id) => {
        try {
            setIsLoading(true);
            await updateTaskStatus(id, { completed: !completed }).then((res) => {
                fetchTasks();
                setIsLoading(false);
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="ListItem" key={id}>
            {isLoading && (
                <Loading />
            )}
            <div className='item-container'>
                <div className='mt-1'>
                    <input 
                        onChange={() => {
                            completeTask(id);
                        }}
                        className='checkbox'
                        type="checkbox" checked={completed} />
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-row items-center gap-5'>
                        <h2 className="title">{title}</h2>
                        <span className={"urgency" + `${
                            urgency === 'URGENT' ? ' urgency-high' : urgency === 'IMPORTANT' ? ' urgency-medium' : ' urgency-low'
                        }`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path d="M3.5 2.75a.75.75 0 00-1.5 0v14.5a.75.75 0 001.5 0v-4.392l1.657-.348a6.449 6.449 0 014.271.572 7.948 7.948 0 005.965.524l2.078-.64A.75.75 0 0018 12.25v-8.5a.75.75 0 00-.904-.734l-2.38.501a7.25 7.25 0 01-4.186-.363l-.502-.2a8.75 8.75 0 00-5.053-.439l-1.475.31V2.75z" />
                            </svg>

                            { !isMobile && <span className='hidden md:block'>{urgency}</span> }
                        </span>
                    </div>
                    <p className="description">{description}</p>
                </div>
            </div>
            <div className="button-container">
                {
                    !completed && (
                        <button className='edit' onClick={() => {
                            openModal(task);
                        }}>
                            { isMobile ? (
                                <PencilIcon className="w-4 h-4" />
                                ) : (
                                <span>Edit</span>
                            )}
                        </button>
                    )
                }
                

                <button className='delete' onClick={() => {
                    deleteTask(id);
                }}
                >
                    { isMobile ? (
                        <TrashIcon className="w-4 h-4" />
                        ) : (
                            <span>Delete</span>
                        )
                    }
                </button>
            </div>
        </div>
        
    )
}