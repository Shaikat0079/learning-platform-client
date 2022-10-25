import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
const CodingLanguage = () => {
    const language = useLoaderData();
    const { name, image_url, description } = language;
    return (
        <div>
            <h4>This is {name}!</h4>
            <Image className='' style={{ height: '500px' }} roundedCircle src={image_url}></Image>
            <h4 className='my-5'>Why to Learn {name}?</h4>
            <h4>{description}</h4>
        </div>
    );
};

export default CodingLanguage;