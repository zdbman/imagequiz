import flowers from './data';
import './style.css';

const Home = () => {
    return (
        <>
        <div class="main">
            {flowers.map((flower, index) => {
                return (
                <>
                <div className='flwr'>
                    <img src={flower.picture} style={{width: "90%"}}></img>
                    <h1 style={{paddingBottom: "20%", textAlign: 'center'}}>{flower.name}</h1>
                </div>
                </>
                )
            })}
        </div>
        </>
    );
}

export default Home;