import { useLocation, useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dataService from "../data_access_layer/local_temporarily_storage";
import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from 'react-router-dom';


const Quiz = () => {
    let [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const [quiz, setQuiz] = useState(undefined);
    let [score, setScore] = useState(0);
    const [answer, setAnswer] = useState("");
    const { id } = useParams();
    let [again, setAgain] = useState("");
    let [test, setTest] = useState(true);
    const navigate = useNavigate();

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
                            <Card.Img style={{height: "200px"}} variant="top" src={quiz.questions[currentQuestionNumber].picture}></Card.Img>
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
                                        if(x == quiz.questions[currentQuestionNumber].answer && test){
                                            console.log('Correct');
                                            setScore(score += 1);

                                        }else{
                                            console.log('Incorrect');
                                        }
                                        if(currentQuestionNumber < quiz.questions.length-1 && test){
                                            setCurrentQuestionNumber(currentQuestionNumber+=1);
                                        }else{
                                            setTest(test = false);
                                            setAgain("Play again?");
                                        }
                                        console.log(currentQuestionNumber);
                                        console.log(score);
                                    }
                                    }>{x}</ListGroup.Item>
                                )}
                            </ListGroup>
                            <Card.Title>Ur score: {score} / {quiz.questions.length}</Card.Title>
                            <Card.Title><span onClick={() => {
                                console.log("again");
                                setTest(test = true);
                                setCurrentQuestionNumber(currentQuestionNumber=0);
                                setScore(score = 0);
                                setAgain(again = "");
                            }} style={{color: "blue"}}>{again}</span>    <span onClick={() => {
                                navigate('/');
                            }}>Back to Menu?</span></Card.Title>
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

//<Card.Title>U clicked {answer}</Card.Title>
//<Card.Title>Answer is {quiz.questions[currentQuestionNumber].answer}</Card.Title>

export default Quiz;