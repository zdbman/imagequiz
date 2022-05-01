//import flowers from './data';
import './style.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
//import dataService from '../data_access_layer/local_temporarily_storage';
import { useNavigate } from 'react-router-dom';
import Quiz from './Quiz';
import { useEffect, useState } from 'react';
import apiAccess from '../communication/APIAccess';

const Home = () => {
    const [flowers, setFlowers] = useState([]);
    const navigate = useNavigate();

    let takeTheQuiz = (flowerName) => {
        navigate('/quiz/' + flowerName);
    }

    useEffect(() => {
        apiAccess.getFlowers()
            .then(x => {
                setFlowers(x);
            })
            .catch(e => {
                alert('Something went wrong');
            });
    }, []);
    //console.log(apiAccess.getFlowers());
    return (
        <>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {flowers.map((flower, index) =>
                        <>
                            <Col>
                                <Card className='h-100' onClick={() => takeTheQuiz(flower.name)}>
                                    <Card.Body>
                                        <Card.Img style={{ height: "200px" }} src={flower.picture} variant="top"></Card.Img>
                                        <Card.Title align="center">{flower.name}</Card.Title>
                                        <Card.Title>

                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </>
                    )}
                </Row>
            </Container>
        </>
    );
}

export default Home;