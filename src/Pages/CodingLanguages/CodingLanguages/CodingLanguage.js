import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useLoaderData } from 'react-router-dom';
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
            <Button className='my-3' variant="outline-secondary"><Link to='/checkout'>Get Premium Access!</Link></Button>
        </div>
    );
};

export default CodingLanguage;