const app = require('express')()
const express = require('express');
const cors = require('cors');
app.use(cors());


const port=8080

//API link : https://apifg.vercel.app/easyquestions

app.listen(port, ()=> console.log(`it's alive on http://localhost:${8080}`))

app.get('/easyquestions', (req, res)=> {
    res.status(200).send([{
        id:1,
        difficulty:'easy',
        question: 'madass 9arn stmazight (easy)?',
        correct_answer : 'aghnja',
        incorrect_answers: ['aydi', 'moch', 'l3afyte'],
        isClicked:false
    }, {
        id:2,
        difficulty:'easy',
        question: 'madass 9arn stmazight (easy)2?',
        correct_answer : 'aghnja2',
        incorrect_answers: ['aydi2', 'moch2', 'l3afyte2'],
        isClicked:false
    },{

    }])
})

app.get('/mediumquestions', (req,res) => {
    res.status(200).send([{
        id:11,
        difficulty:'medium',
        question: 'madass 9arn stmazight (medium)?',
        correct_answer : 'yadou',
        incorrect_answers: ['tasghount','afdjaj','idilinnate'],
        isClicked:false
    }, {id:12,
        difficulty:'medium',
        question: 'madass 9arn stmazight (medium) 2 ?',
        correct_answer : 'yadou2',
        incorrect_answers: ['tasghount2','afdjaj2','idilinnate2'],
        isClicked:false}
])
})

app.get('/hardquestions', (req,res) => {
    res.status(200).send([{
        id:21,
        difficulty:'hard',
        question: 'madass 9arn stmazight (hard)?',
        correct_answer : 'afounass',
        incorrect_answers: ['tili','tizmrte','aghoun'],
        isClicked:false
    },{
        id:22,
        difficulty:'hard',
        question: 'madass 9arn stmazight (hard) 3?',
        correct_answer : 'tyazite',
        incorrect_answers: ['fouss','dar','aghyoul'],
        isClicked:false
    }])
})