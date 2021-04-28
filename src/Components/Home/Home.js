import React, { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import Teams from '../Teams/Teams';
import img from './head-img.png';
import './Home.css'
const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(()=>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    }, [])
   return (
        <div>
            <div>
                <Card className="bg-dark text-white">
                    <Card.Img src={img} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title><h1 style={{textAlign: 'center', color: 'red', marginTop: '25px'}}>Team selector</h1></Card.Title>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <div className="main-body">
                <Container>
                    <Row>
                        {
                            teams.map( teams => <Teams key={teams.idTeam} teams={teams}></Teams>)
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;