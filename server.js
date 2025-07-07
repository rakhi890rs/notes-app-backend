const express = require('express');
const app = express();
let notes = [];
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, RAKHI');
});

app.get('/notes', (req, res) => {
    res.send(notes);
});

app.post('/notes', (req, res) => {
    console.log(req.body);
    notes.push(req.body);
    res.json({
        message: "note created successfully"
    });
});
app.delete('/notes/:index',(req,res)=>{
    const index= req.params.index;
    delete notes[index];
    res.json({
        message:"note deleted successfully",
    })
})

app.patch('/notes/:index',(req,res)=>{
    const index = req.params.index;
    const {title}=req.body
    notes[index].title=title;
    res.json({
        message:"note updated successfully",
    })
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
});



// GET /notes → returns all saved notes

// POST /notes → adds a new note and confirms with JSON response