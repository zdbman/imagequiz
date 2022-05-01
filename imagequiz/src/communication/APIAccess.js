<<<<<<< HEAD
//let backendAddress = 'https://zdbman-imagequiz-api.herokuapp.com/';
=======
>>>>>>> parent of c7cc345... update
let backendAddress = 'http://localhost:4002';

let apiAccess = {
    addCustomer: (name, email, password) => {
        fetch(`${backendAddress}/register`, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        })
        .then(x => x.json())
        .then(x => {
            console.log(x);
            return x;
        });
    }
}

export default apiAccess;