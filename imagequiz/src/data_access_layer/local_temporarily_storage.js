//import flowers from "../components/data";
import flowers from '../temp_data_repository/flowers';
import data from '../temp_data_repository/data'

let dataService = {
    users: [],
    getFlowers: () => {
        return flowers;
    },
    getQuiz: (name) => {
        let quiz = data.find(flower => flower.name.toLowerCase() === name.toLowerCase());
        return quiz;
    }
}

export default dataService;