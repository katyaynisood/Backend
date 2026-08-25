import express from "express"
const app=express();

// app.get('/',(req,res)=>{
//     res.send("Server is ready")
// });
//now in link write /jokes an api formed named //this is how we make apis
app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Programmer Joke",
            joke: "Why do programmers prefer dark mode? Because light attracts bugs!"
        },
        {
            id: 2,
            title: "JavaScript Joke",
            joke: "Why was the JavaScript developer sad? Because he didn't Node how to Express himself."
        },
        {
            id: 3,
            title: "Computer Joke",
            joke: "Why did the computer go to the doctor? It caught a virus."
        }
    ];

    res.json(jokes);
});
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`);
});