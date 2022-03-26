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
    let [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const [quiz, setQuiz] = useState(undefined);
    let [score, setScore] = useState(0);
    const [answer, setAnswer] = useState("");
    const { id } = useParams();

    useEffect(() => {
        if (!quiz) {
            let x = dataService.getQuiz(id);
            setQuiz(x);
            console.log(x);
        }
        
    });

    return (
        <Container>
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                    {quiz ?
                        <Card className='h-100'>
                            <Card.Img variant="top" src={quiz.questions[currentQuestionNumber].picture}></Card.Img>
                            <Card.Body>
                                <Card.Title align="center">{quiz.questions[currentQuestionNumber].answer}</Card.Title>
                                <Card.Title>
                                    Let's take the quiz now!
                                </Card.Title>
                            </Card.Body>
                            <ListGroup>
                                {quiz.questions[currentQuestionNumber].choices.map(x =>
                                    <ListGroup.Item onClick={() => {
                                        console.log(x);
                                        setAnswer(x);
                                        if(x == quiz.questions[currentQuestionNumber].answer){
                                            
                                            console.log('Correct');
                                            setScore(score+=1);

                                        }else{
                                            console.log('Incorrect');
                                        }
                                        if(currentQuestionNumber < quiz.questions.length-1){
                                            setCurrentQuestionNumber(currentQuestionNumber+=1);
                                        }else{
                                            setCurrentQuestionNumber(currentQuestionNumber=0);
                                        }
                                        console.log(currentQuestionNumber);
                                        console.log(score);
                                    }
                                    }>{x}</ListGroup.Item>
                                )}
                            </ListGroup>
                            <Card.Title>U clicked {answer}</Card.Title>
                            <Card.Title>Answer is {quiz.questions[currentQuestionNumber].answer}</Card.Title>
                            
                            <Card.Title>Ur score: {score}</Card.Title>
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