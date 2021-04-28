import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation, faFlag, faFutbol, faVenus, faMars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {faYoutube, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { useParams } from 'react-router';

import genderImgFemale from './female.png';
import genderImgMale from './male.png'



import './TeamDetailes.css';

import { Link } from 'react-router-dom';


const TeamDetailes = () => {
    const { teamId } =useParams();
    const [ team, setTeam] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    }, [teamId])
    const {strTwitter, strYoutube, strFacebook, strAlternate, intFormedYear, strCountry, strGender, strTeamBanner, strStadiumThumb, strDescriptionEN, strStadiumDescription} = team;
    console.log(team)
    let genderImg;
    let genderIcon;
if (strGender === 'Male') {
    genderImg = genderImgMale;
    genderIcon = faMars;
}
else {
    genderImg = genderImgFemale;
    genderIcon = faVenus;
}


const socialUrlFb = `http://${strFacebook}`
const socialUrlTw = `http://${strTwitter}`
const socialUrlYt = `http://${strYoutube}`
    return (
        <div className= "body">
            <div className="head-banner">
                <Card className="bg-dark text-white">
                    <Card.Img src={strStadiumThumb} style={{height: '400px'}} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title> <img className="team-badge" alt="" src={strTeamBanner}  /> </Card.Title>   
                    </Card.ImgOverlay>
                </Card>
            </div>
            <Container>
                <div className="teamDetail">
                <Row>
                <Col md={7}><div className="teamDetail-text">
                    <h3>{strAlternate}</h3>
                    <h5><FontAwesomeIcon icon={faSearchLocation} /> Founded: {intFormedYear}</h5>
                    <h5><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h5>
                    <h5><FontAwesomeIcon icon={faFutbol} /> Sport Type: Football</h5>
                    <h5><FontAwesomeIcon icon={genderIcon} /> Gender: {strGender}</h5>
                    </div>
                </Col>
                <Col md={5}><img className="gender-img" src={genderImg} alt="" /></Col>
                </Row>
                </div>
            </Container>
            <Container>
                <p>{strDescriptionEN}</p>
                <br/>
                <p>{strStadiumDescription}</p>
            </Container>
            <Container>
            <Link to ={`/home`}><Button variant="primary"><FontAwesomeIcon icon={faArrowLeft} /> Back Home</Button></Link>
            </Container>
            <Container>
                <div className="social-media d-flex justify-content-center">
                    <a href={socialUrlFb}><FontAwesomeIcon icon={faFacebook} size="3x" /></a>
                    <a href={socialUrlTw}><FontAwesomeIcon icon={faTwitter} size="3x" /></a>
                    <a href={socialUrlYt}><FontAwesomeIcon icon={faYoutube} size="3x" /></a>
                </div>
            </Container>
        </div>
    );
};

export default TeamDetailes;