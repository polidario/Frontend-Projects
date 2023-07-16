import React from 'react';
import { useLoaderData } from '@remix-run/react';

export async function loader({ context }) {
    console.log(context.storefront);

    const { language, country } = context.storefront.i18n;

    return {
        language,
        country
    }
}

export function meta() {
    return [
      {title: 'Hydrogen'},
      {description: 'A custom storefront powered by Hydrogen'},
    ];
}

export default function Index() {
    const { language, country } = useLoaderData();

    return (
        <div>
            <h1>Hello World</h1>
            <div className='language'>
                <span>Country: {country}</span>
                <span>Language: {language}</span>
            </div>
        </div>
    )
}