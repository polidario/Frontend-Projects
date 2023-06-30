import Modal from './Modal';
import React, { useState } from 'react';
export default function Navigation() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <nav className='flex justify-between w-full pt-3 mb-16'>
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

                <div className="sm:flex hidden">
                    <div className='flex gap-3'>
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

                        <button className="button button-secondary">
                            <span className="button-body">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                    </svg>
                                </span>
                                Logout
                            </span>
                        </button>
                    </div>
                </div>

                <div className="sm:hidden flex relative">
                    <div className='flex'>
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

                        <button className="button button-secondary">
                            <span className="button-body">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                    </svg>
                                </span>
                                Logout
                            </span>
                        </button>
                    </div>
                </div>
            </nav>

            {isModalOpen && <Modal mode="create" setIsModalOpen={setIsModalOpen} />}
        </>
    )
}