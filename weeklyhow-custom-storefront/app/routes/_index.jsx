import React from 'react';

export function meta() {
    return [
      {title: 'Hydrogen'},
      {description: 'A custom storefront powered by Hydrogen'},
    ];
}

export default function Index() {
    return (
        <div>
            <h1>Hello World</h1>
            <div>This is an example homepage</div>
        </div>
    )
}