import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Teams = (props) => {
    const {strTeamBadge, strAlternate, idTeam} = props.teams;
    return (
        <Col sm={4}>
            <Card style={{ width: '18rem', margin: '6px' }}>
            <Card.Img variant="top" src={strTeamBadge} />
            <Card.Body>
                <Card.Title>{strAlternate}</Card.Title>
                <Card.Text> Sport Type: Football</Card.Text>
                <Link to ={`/team/${idTeam}`}><Button variant="primary">View Detailes <FontAwesomeIcon icon={faArrowRight} /></Button></Link>
            </Card.Body>
            </Card>
        </Col>
    );
};

export default Teams;