const express = require('express');
const app = express();



// app.get('/posy', (res, req)=>{
//     req.send('this is posy');
// });

// app.post('/posypost', (res, req) => {
//     req.send('this is posy');
//     const { meat, qty } = req.body;
//     res.send(`OK, here are your ${qty} ${meat} tacos`)
// })


// app.get('/tacos', (req, res) => {
//     res.send("GET /tacos response")
// })

// app.post('/tacos', (req, res) => {
//     const { meat, qty } = req.body;
//     res.send(`OK, here are your ${qty} ${meat} tacos`)
// })

// console.log(app);
// app.use(()=>{
//     console.log("this is use");
// });

// app.get('/himmat/:kumar',(req, res, result)=>{
//     return res.send(result);
// });

// app.get('*',(req, res, result)=>{
//     return res.send(result);
// });

app.listen(3000, () => {
    console.log("Server is running");
})

