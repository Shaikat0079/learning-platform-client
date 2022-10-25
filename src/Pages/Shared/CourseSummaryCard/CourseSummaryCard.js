import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseSummaryCard = ({ courses }) => {
    const { name, id, description } = courses;
    return (
        <div>
            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description.length > 200 ?
                            <>{description.slice(0, 200) + '...'} <Link to={`/course/${id}`}>Read More</Link></>
                            :
                            <>{description}</>
                        }
                    </Card.Text>
                    {/* <Button variant="dark"><Link className='text-white' to={`/course/${id}`}>Go to</Link></Button> */}
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default CourseSummaryCard;