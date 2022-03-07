import flowers from './data';

const Home = () => {
    return (
        <>
        <div>
            {flowers.map(flower => {
                return (
                <>
                <img src={flower.picture}></img>
                <h1>{flower.name}</h1>
                </>
                )
            })}
        </div>
        </>
    );
}

export default Home;