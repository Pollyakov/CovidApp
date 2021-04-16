const path = require('path');
const express = require('express')

const app = express();
const publicDirPath = path.join(__dirname,'../public');

app.use(express.static(publicDirPath));



// app.get('/help', (req, res)=>{
//     res.send({
//         name: 'Ksenia',
//         age: '32'
//     })
// } );

// app.get('/about', (req, res)=>{
//     res.send('<h1>About page</h1>')
// } );
app.get('/weather', (req, res)=>{
    res.send({
        location: "Tyumen",
        temp: 15,
    })
} );
//to start up the server, once
app.listen(3000, () => {
    console.log('Server is up on port 3000')
}
);

