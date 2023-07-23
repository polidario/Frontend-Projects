import React from 'react';

export default function Footer() {
    return (
        <footer className="sticky bottom-0 flex justify-center items-center h-16 bg-gray-900 text-white z-40">
            <p className="text-sm">Made with <span style={{ color: "#e25555" }}>&hearts;</span> by <a href='https://github.com/polidario' className='underline'>Bernard Polidario</a> &copy; 2023</p>
        </footer>
    )
}