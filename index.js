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
        questionImage : 'https://i.ibb.co/R7hmw4f/4.png',
        answerOptions : [
            {answerText: 'Affar', isCorrect:false},
            {answerText: 'Abrid', isCorrect:false},
            {answerText: 'Aghi', isCorrect:false},
            {answerText: 'Ayniw', isCorrect:true}
            ]
    },{
        id:5,
        difficulty:'easy',
        questionText: 'A fava bean is known as .. ?',
        questionImage : 'https://i.ibb.co/nzLkwhT/5.jpg',
        answerOptions : [
            {answerText: 'Tawghilt', isCorrect:false},
            {answerText: 'Taâqayte', isCorrect:true},
            {answerText: 'Tchourdass', isCorrect:false},
            {answerText: 'Tamemte', isCorrect:false}
            ]
    },{
        id:6,
        difficulty:'easy',
        questionText: 'In an agricultural field, a planting bed is called .. ?',
        questionImage : 'https://i.ibb.co/TrsGXYZ/6.jpg',
        answerOptions : [
            {answerText: 'Affar', isCorrect:false},
            {answerText: 'Aghemm', isCorrect:false},
            {answerText: 'Aferdou', isCorrect:false},
            {answerText: 'Aymmoun', isCorrect:true}
            ]
    },{
        id:7,
        difficulty:'easy',
        questionText: 'An irrigation canal is called .. ?',
        questionImage : 'https://i.ibb.co/yy2JZHz/7.jpg',
        answerOptions : [
            {answerText: 'Targa', isCorrect:true},
            {answerText: 'Tachdift', isCorrect:false},
            {answerText: 'Tittarte', isCorrect:false},
            {answerText: 'Tasghounte', isCorrect:false}
            ]
    },{
        id:8,
        difficulty:'easy',
        questionText: 'This traditional Abaya worn by women is ..?',
        questionImage : 'https://i.ibb.co/t819cQK/8.jpg',
        answerOptions : [
            {answerText: 'Aztta', isCorrect:false},
            {answerText: 'Achdad', isCorrect:false},
            {answerText: 'Asmmired', isCorrect:true},
            {answerText: 'Tajlabyte', isCorrect:false}
            ]
    },{
        id:9,
        difficulty:'easy',
        questionText: 'This tower is called .. ?',
        questionImage : 'https://i.ibb.co/V2YRgvq/9.jpg',
        answerOptions : [
            {answerText: 'Amensi', isCorrect:false},
            {answerText: 'Aytcha', isCorrect:false},
            {answerText: 'Aghir', isCorrect:false},
            {answerText: 'Aferdou', isCorrect:true}
            ]
    },{
        id:10,
        difficulty:'easy',
        questionText: 'The dish below is known as .. ?',
        questionImage : 'https://i.ibb.co/mvqp5Hf/10.jpg',
        answerOptions : [
            {answerText: 'Aghrom Ntfante', isCorrect:false},
            {answerText: 'Aghrom Nbsl', isCorrect:true},
            {answerText: 'Aghrom Insn', isCorrect:false},
            {answerText: 'Aghrom Amqor', isCorrect:false}
            ]
    },{
        id:11,
        difficulty:'medium',
        questionText: 'This tool is called .. ?',
        questionImage : 'https://i.ibb.co/zF8snXg/11.jpg',
        answerOptions : [
            {answerText: 'Ayelzim', isCorrect:false},
            {answerText: 'Aquerdash', isCorrect:true},
            {answerText: 'Oussou', isCorrect:false},
            {answerText: 'Tisghnass', isCorrect:false}
            ]
    },{
        id:12,
        difficulty:'medium',
        questionText: 'This traditional oven is called .. ?',
        questionImage : 'https://i.ibb.co/Vtk7VBS/12.jpg',
        answerOptions : [
            {answerText: 'Tafqounte', isCorrect:true},
            {answerText: 'Tamrmite', isCorrect:false},
            {answerText: 'Afrran', isCorrect:false},
            {answerText: 'Qazal', isCorrect:false}
            ]
    },{
        id:13,
        difficulty:'medium',
        questionText: 'Someone who lost a teeth is called ..?',
        questionImage : 'https://i.ibb.co/YyKX3nZ/13.png',
        answerOptions : [
            {answerText: 'Ilich', isCorrect:false},
            {answerText: 'Adhdoh', isCorrect:false},
            {answerText: 'Fardass', isCorrect:false},
            {answerText: 'Faghmass', isCorrect:true}
            ]
    },{
        id:14,
        difficulty:'medium',
        questionText: 'The downhill road is known as .. ?',
        questionImage : 'https://i.ibb.co/6wn2Hz4/14.jpg',
        answerOptions : [
            {answerText: 'Asbilow', isCorrect:false},
            {answerText: 'Aslham', isCorrect:false},
            {answerText: 'Asehnanay', isCorrect:true},
            {answerText: 'Asqif', isCorrect:false}
            ]
    },{
        id:15,
        difficulty:'medium',
        questionText: 'The young palm is called .. ?',
        questionImage : 'https://i.ibb.co/w047Z3W/15.jpg',
        answerOptions : [
            {answerText: 'Affar', isCorrect:false},
            {answerText: 'Ayniw', isCorrect:false},
            {answerText: 'Azday', isCorrect:false},
            {answerText: 'Aghemm', isCorrect:true}
            ]
    },{
        id:16,
        difficulty:'medium',
        questionText: 'Tweezers are .. ?',
        questionImage : 'https://i.ibb.co/wdgDpqD/16.jpg',
        answerOptions : [
            {answerText: 'Ighyal', isCorrect:false},
            {answerText: 'Ighmdan', isCorrect:true},
            {answerText: 'Ighndar', isCorrect:false},
            {answerText: 'Ighrbaben', isCorrect:false}
            ]
    },{
        id:17,
        difficulty:'medium',
        questionText: 'The act of showing one eye only is called .. ?',
        questionImage : 'https://i.ibb.co/GQpcSM6/17.jpg',
        answerOptions : [
            {answerText: 'Asbinguer', isCorrect:true},
            {answerText: 'Asbillow', isCorrect:false},
            {answerText: 'Adsi', isCorrect:false},
            {answerText: 'Asqirrow', isCorrect:false}
            ]
    },{
        id:18,
        difficulty:'medium',
        questionText: 'The tool we use to stop water from flowing is called .. ?',
        questionImage : 'https://i.ibb.co/qdY2vKJ/18.jpg',
        answerOptions : [
            {answerText: 'Tamjrte', isCorrect:false},
            {answerText: 'Tasghounte', isCorrect:true},
            {answerText: 'Tsaylalte', isCorrect:false},
            {answerText: 'Tazkkourte', isCorrect:false}
            ]
    },{
        id:19,
        difficulty:'medium',
        questionText: 'The traditional milk churn is knwon as .. ?',
        questionImage : 'https://i.ibb.co/GR9PrtK/19.png',
        answerOptions : [
            {answerText: 'Tazdayte', isCorrect:false},
            {answerText: 'Tayndouboute', isCorrect:true},
            {answerText: 'Tawghilte', isCorrect:false},
            {answerText: 'Tamzzayte', isCorrect:false}
            ]
    },{
        id:20,
        difficulty:'medium',
        questionText: 'A thumb is known as .. ?',
        questionImage : 'https://i.ibb.co/YP750bP/20.jpg',
        answerOptions : [
            {answerText: 'Imez', isCorrect:true},
            {answerText: 'Ifden', isCorrect:false},
            {answerText: 'Icher', isCorrect:false},
            {answerText: 'Ighed', isCorrect:false}
            ]
    }
    ,{
        id:21,
        difficulty:'hard',
        questionText: 'Yeast (used to make bread) .. ?',
        questionImage : 'https://i.ibb.co/WKgYDRm/21.jpg',
        answerOptions : [
            {answerText: 'Takhmirt', isCorrect:false},
            {answerText: 'Azrar', isCorrect:false},
            {answerText: 'Anrar', isCorrect:false},
            {answerText: 'Tamtounte', isCorrect:true}
            ]
    },{
        id:22,
        difficulty:'hard',
        questionText: 'A sheep hoof is called .. ?',
        questionImage : 'https://i.ibb.co/fxMwPdW/22.jpg',
        answerOptions : [
            {answerText: 'Tifnzte', isCorrect:true},
            {answerText: 'Tawghilt', isCorrect:false},
            {answerText: 'Lhafer', isCorrect:false},
            {answerText: 'Tifdnte', isCorrect:false}
            ]
    },{
        id:23,
        difficulty:'hard',
        questionText: 'This technique is called ..?',
        questionImage : 'https://i.ibb.co/xH12R0D/23.jpg',
        answerOptions : [
            {answerText: 'Anrar', isCorrect:true},
            {answerText: 'Aslkz', isCorrect:false},
            {answerText: 'Amday', isCorrect:false},
            {answerText: 'Affar', isCorrect:false}
            ]
    },{
        id:24,
        difficulty:'hard',
        questionText: 'These knitting tools are known as .. ?',
        questionImage : 'https://i.ibb.co/Kz6NZyZ/24.jpg',
        answerOptions : [
            {answerText: 'Tiwinass', isCorrect:false},
            {answerText: 'Tissass', isCorrect:false},
            {answerText: 'Tisghnass', isCorrect:true},
            {answerText: 'Tighmass', isCorrect:false}
            ]
    },{
        id:25,
        difficulty:'hard',
        questionText: 'the food below is .. ?',
        questionImage : 'https://i.ibb.co/Mp3sPVV/25.jpg',
        answerOptions : [
            {answerText: 'Yalouz', isCorrect:false},
            {answerText: 'Tirfass', isCorrect:false},
            {answerText: 'Oudi', isCorrect:false},
            {answerText: 'Iberssa', isCorrect:true}
            ]
    },{
        id:26,
        difficulty:'hard',
        questionText: 'Carob is known as .. ?',
        questionImage : 'https://i.ibb.co/x89QWKc/26.jpg',
        answerOptions : [
            {answerText: 'Taghla', isCorrect:false},
            {answerText: 'Tazarte', isCorrect:false},
            {answerText: 'Tasmmoumt', isCorrect:false},
            {answerText: 'Tasliwgha', isCorrect:true}
            ]
    },{
        id:27,
        difficulty:'hard',
        questionText: 'A thumb is known as .. ?',
        questionImage : 'https://i.ibb.co/vwf5f8R/27.jpg',
        answerOptions : [
            {answerText: 'Imez', isCorrect:true},
            {answerText: 'Ifden', isCorrect:false},
            {answerText: 'Icher', isCorrect:false},
            {answerText: 'Ighed', isCorrect:false}
            ]
    },{
        id:28,
        difficulty:'hard',
        questionText: 'this animal is .. ?',
        questionImage : 'https://i.ibb.co/dbm3cdh/28.jpg',
        answerOptions : [
            {answerText: 'Ik3eb', isCorrect:true},
            {answerText: 'Ifiss', isCorrect:false},
            {answerText: 'Ouchen', isCorrect:false},
            {answerText: 'Aydi', isCorrect:false}
            ]
    },{
        id:29,
        difficulty:'hard',
        questionText: 'This plant is ..?',
        questionImage : 'https://i.ibb.co/v4VjS9L/29.jpg',
        answerOptions : [
            {answerText: 'Lfdam', isCorrect:false},
            {answerText: 'Chennoud', isCorrect:true},
            {answerText: 'Affar', isCorrect:false},
            {answerText: 'Aghemm', isCorrect:false}
            ]
    },{
        id:30,
        difficulty:'hard',
        questionText: 'This tool used in spinning yarn is called ..?',
        questionImage : 'https://i.ibb.co/b3Xt2Mk/30.jpg',
        answerOptions : [
            {answerText: 'Tazdayte', isCorrect:true},
            {answerText: 'Tisghness', isCorrect:false},
            {answerText: 'Tizanzaghte', isCorrect:false},
            {answerText: 'Tamkhdayte', isCorrect:false}
            ]
    }])
})
