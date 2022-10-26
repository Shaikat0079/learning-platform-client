import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const SideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://education-server-three.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div>

            {
                courses.map(course => <p key={course.id}>
                    <Link to={`/course/${course.id}`}>
                        <Button variant='outline-secondary'>{course.name}</Button>
                    </Link>
                </p>)
            }
        </div>
    );
};

export default SideNav;