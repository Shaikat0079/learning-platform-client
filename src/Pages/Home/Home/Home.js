import React from 'react';
import { useState } from 'react';

const Home = () => {
    const [course, setCourse] = useState();

    return (
        <div>
            <h2>This is Home Component!</h2>
        </div>
    );
};

export default Home;