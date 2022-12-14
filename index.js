let rabotniki = [
    {
        id:1,
        name:"Tony Stark",
        age:50
    },
    {
        id:2,
        name:"Steve Rogers",
        age:45
    },
    {
        id:3,
        name:"Steven Strange",
        age:40
    }
];
const express = require("express");
const app = express();
app.get('/all', function(request,response){
    response.send(rabotniki);
});
app.listen(3000,function(){
    console.log("Сервер запущен на порту под номером 3000");
});