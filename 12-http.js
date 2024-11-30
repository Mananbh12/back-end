const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
        return; // Arrête l'exécution ici
    } else if (req.url === '/about') {
        res.end('Our story');
        return; // Arrête l'exécution ici
    } else {
        res.end(`
            <h1>Oops!</h1>
            <p>Page not found</p>
        `);
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000...');
});
