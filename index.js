const app = require('express')()
const express = require('express');
const cors = require('cors');
app.use(cors());


const port=8080

//API link : https://apifg.vercel.app/easyquestions

app.listen(port, ()=> console.log(`it's alive on http://localhost:${8080}`))

app.get('/questions', (req, res)=> {
    res.status(200).send([{

        id:1,
        difficulty:'easy',
        questionText: 'A finger nail is called .. ?',
        questionImage : 'https://i.ibb.co/Ltgjyb7/1.jpg',
        answerOptions : [
            {answerText: 'Abzim', isCorrect:false},
            {answerText: 'Iless', isCorrect:false},
            {answerText: 'Icher', isCorrect:true},
            {answerText: 'Ifden', isCorrect:false}
            ]
        
    }, {
        id:2,
        difficulty:'easy',
        questionText: 'An antique road is called .. ?',
        questionImage : 'https://i.ibb.co/FxxPTdq/2.jpg',
        answerOptions : [
            {answerText: 'Asqif', isCorrect:true},
            {answerText: 'Aghir', isCorrect:false},
            {answerText: 'Achdad', isCorrect:false},
            {answerText: 'Aghrem', isCorrect:false}
            ]
    },{
        id:3,
        difficulty:'easy',
        questionText: 'The color below is .. ?',
        questionImage : 'https://i.ibb.co/8PMpDdk/3.jpg',
        answerOptions : [
            {answerText: 'Amllal', isCorrect:false},
            {answerText: 'Awragh', isCorrect:false},
            {answerText: 'Adal', isCorrect:false},
            {answerText: 'Achhmey', isCorrect:true}
            ]
    },{
        id:4,
        difficulty:'easy',
        questionText: 'A date is known as .. ?',
        questionImage : 'https://i.ibb.co/8PMpDdk/3.jpg',
        answerOptions : [
            {answerText: 'Affar', isCorrect:false},
            {answerText: 'Abrid', isCorrect:false},
            {answerText: 'Aghi', isCorrect:false},
            {answerText: 'Ayniw', isCorrect:true}
            ]
    }])
})
