import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../../Shared/CourseSummaryCard/CourseSummaryCard';
import SideNav from '../../SideNav/SideNav';
import './Home.css'

const Home = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <div>
                <div className='flexible'>
                    <div>
                        <SideNav></SideNav>
                    </div>
                    <div >
                        <div className='box-style'>
                            {
                                allCourses.map(courses => <CourseSummaryCard key={courses.id} courses={courses}></CourseSummaryCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;