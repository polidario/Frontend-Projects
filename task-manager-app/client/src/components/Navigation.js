import Modal from './Modal';
import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth.ts';
import profile from '../assets/images/profile.png';

export default function Navigation({ fetchTasks }) {
    const { logout } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [profileToggleDropdown, setProfileToggleDropdown] = useState(false);

    const Logout = () => {
        logout();
    }

    return (
        <>
            <nav className='flex justify-between items-center w-full pt-3 mb-16'>
                <a href="/" className='flex items-center gap-2'>
                    <img
                        src="/assets/images/logo.svg"
                        alt="Reminisce Logo"
                        width={50}
                        height={50}
                        className="object-contain"
                    />
                    <p className="logo_text">Task Managr</p>
                </a>

                <div className="sm:flex hidden relative">
                    <div className='flex items-center gap-5'>
                        <button 
                            onClick={() => {
                                setIsModalOpen(true);
                            }}
                            className="button button-primary">
                            <span className="button-body">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </span>
                                New task
                            </span>
                        </button>

                        <img 
                            onClick={() => { 
                                setProfileToggleDropdown((prevState) => !prevState)}
                            }
                            src={profile} alt="Avatar" 
                            className="w-10 h-10 rounded-full" />

                        {profileToggleDropdown && (
                            <div className="dropdown">
                                <a
                                    href="/profile"
                                    className="dropdown_link"
                                    onClick={() => setProfileToggleDropdown(false)}
                                >
                                    My Profile
                                </a>

                                <button
                                    className="dropdown_link"
                                    onClick={() => {
                                        setProfileToggleDropdown(false);
                                        Logout();
                                    }}
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="sm:hidden flex relative">
                    <div className='flex items-center gap-5'>
                        <button 
                            onClick={() => {
                                setIsModalOpen(true);
                            }}
                            className="button button-primary">
                            <span className="button-body">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </span>
                                <span className='hidden md:block'>New task</span>
                            </span>
                        </button>

                        <img 
                            onClick={() => { 
                                setProfileToggleDropdown((prevState) => !prevState)}
                            }
                            src={profile} alt="Avatar" 
                            className="w-10 h-10 rounded-full" />

                        {profileToggleDropdown && (
                            <div className="dropdown">
                                <a
                                    href="/profile"
                                    className="dropdown_link"
                                    onClick={() => setProfileToggleDropdown(false)}
                                >
                                    My Profile
                                </a>

                                <button
                                    className="dropdown_link"
                                    onClick={() => {
                                        setProfileToggleDropdown(false);
                                        Logout();
                                    }}
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {isModalOpen && <Modal mode="create" setIsModalOpen={setIsModalOpen} fetchTasks={fetchTasks}/>}
        </>
    )
}