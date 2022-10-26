import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { MdOutlineStar } from "react-icons/md";
import { MdMonetizationOn } from "react-icons/md";

const CourseSummaryCard = ({ courses }) => {
    const { name, id, description, image_url, rating, price } = courses;
    return (
        <div>
            <Card className="text-center">
                <Card.Header>WELCOME to {name}</Card.Header>
                <Card.Body>
                    <Card.Img style={{ height: '250px', width: '250px' }} variant="top" src={image_url} />
                    <Card.Text>
                        {description.length > 30 ?
                            <>{description.slice(0, 30) + '...'} <Link to={`/course/${id}`}>Read More</Link></>
                            :
                            <>{description}</>
                        }
                    </Card.Text>
                    {/* <Button variant="dark"><Link className='text-white' to={`/course/${id}`}>Go to</Link></Button> */}
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <div><MdOutlineStar /><span>{rating}</span></div>
                    <div>< MdMonetizationOn /><span>{price} TK</span></div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CourseSummaryCard;