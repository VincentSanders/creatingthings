// Pull the http in
const http = require('http');

// Create Node.JS Server in ES16 way
const server = http.createServer((req, res) => {
    const url = req.url;
    
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<h3>Please enter your username:');
        res.write('<form action="/create-user" method="POST"><input type="text" name="userName" placeholder="Username"><button type="submit">Submit</button><form>');
        return res.end(); // Returning the res.end() makes sure you can use res.write() later again
    }
    if(url === '/users' && method === 'POST'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<ul>');
        res.write('<li>John</li>');
        res.write('<li>Peter</li>');
        res.write('<li>Michael</li>');
        res.write('<li>Ben</li>');
        res.write('<li>Jonathan</li>');
        res.write('</ul>');
        return res.end();
    }
    if(url === '/create-user'){
        const body = []; 
        req.on('data', (chunk) => {
            body.push(chunk)
            console.log(body);
        }); 
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.statusCode = 302; 
        res.setHeader('Location', '/');
        res.end();
    };
    //if(url === ''){
        
    //}

})

// Server starts to listen to input
server.listen(3000);