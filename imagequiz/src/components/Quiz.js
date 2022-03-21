import { useLocation, useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dataService from "../data_access_layer/local_temporarily_storage";
import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";

const Quiz = () => {
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const [quiz, setQuiz] = useState(undefined);
    const { id } = useParams();


    useEffect(() => {
        if(!quiz){
            let x = dataService.getQuiz(id);
            setQuiz(x);
            console.log(x);
        } 
    });
    
    var score = 0;
    
    return (
        <Container>
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                {quiz ? 
                    <Card className='h-100'>
                        <Card.Img variant="top" src={quiz.questions[currentQuestionNumber].picture}></Card.Img>
                        <Card.Body>
                            <Card.Title align="center">{quiz.name}</Card.Title>
                            <Card.Title>
                                Let's take the quiz now!
                            </Card.Title>
                        </Card.Body>
                        <ListGroup>
                            {quiz.questions[currentQuestionNumber].choices.map(x =>
                                <ListGroup.Item>{x}</ListGroup.Item>
                            )}
                        </ListGroup>
                    </Card>
                    :
                    <Spinner animation="border" relo="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default Quiz;