const http = new EasyHTTP();

// Get users
// http.get('https://api.github.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// User data
const data = {
    name: 'John Doe',
    username: 'jdoe',
    email: 'john@doe.com'
}

// Create post 
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// Update put
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// Delete post
http.delete('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(err => console.log(err));

