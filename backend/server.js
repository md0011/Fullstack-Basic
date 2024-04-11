import express from "express";

const app = express();

// Serve frontend:
// app.use(express.static('dist'))

app.get('/', (req, res) => {
    res.send('Server is ready!');
})

// Get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A Joke',
            content: 'This is first joke'
        },
        {
            id: 2,
            title: 'B Joke',
            content: 'This is second joke'
        },
        {
            id: 3,
            title: 'C Joke',
            content: 'This is third joke'
        },
        {
            id: 4,
            title: 'D Joke',
            content: 'This is fourth joke'
        },
        {
            id: 5,
            title: 'E Joke',
            content: 'This is fifth joke'
        }
    ]
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})