import flowers from './data';
import './style.css';
import Card from 'react-bootstrap/Card'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const Home = () => {
    return (
        <>
            <div class="main">
                <Row xs={1} md={2} lg={3} className="g-4">
                    {flowers.map((flower, index) => {
                        return (
                            <>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Img src={flower.picture} variant="top"></Card.Img>
                                            <Card.Title align="center">{flower.name}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </>
                        )
                    })}
                </Row>
            </div>
        </>
    );
}

export default Home;