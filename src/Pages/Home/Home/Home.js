import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../../Shared/CourseSummaryCard/CourseSummaryCard';
import './Home.css'

const Home = () => {
    const allCourses = useLoaderData();
    return (
        <div className='m-4'>
            <h2>Total Courses {allCourses.length}</h2>
            <div className='box-style'>
                {
                    allCourses.map(courses => <CourseSummaryCard key={courses.id} courses={courses}></CourseSummaryCard>)
                }
            </div>
        </div>
    );
};

export default Home;