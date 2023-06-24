import React from 'react';
import TickIcon from './TickIcon';

export default function ListItem({ id, title, description}) {
    return (
        <div className="ListItem" key={id}>
            <div className='item-container'>
                <TickIcon />
                <h1 className="title">{title}</h1>
                <p className="description">{description}</p>
            </div>
            <div className="button-container">
                <button className='edit'>Edit</button>
                <button className='delete'>Delete</button>
            </div>
        </div>
        
    )
}