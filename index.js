
const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.post("/first", function(request, response) {
    const { Arg1, Arg2, oper } = request.body; 

    if (oper === '+') {
        response.status(200).json(Arg1 + Arg2);


    } else if (oper === '-') {
        response.status(200).json(Arg1 - Arg2);


    } else if (oper === '/') {
        response.status(200).json(Arg1 / Arg2);


    } else if (oper === '*') {
        response.status(200).json(Arg1 * Arg2);


    } else if (oper === '^') {
        response.status(200).json(Math.pow(Arg1, Arg2));


    } else if (oper === '%') {
        response.status(200).json((Arg1*Arg2)/100);
    } 
    });


app.post("/second", function(request, response) {
const {arg,operation} = request.body;

 if (operation === 'sqrt') {
    response.status(200).json(Math.sqrt(arg));

} else if (operation === 'sin') {
    response.status(200).json(Math.sin(arg));

} else if (operation === 'cos') {
    response.status(200).json(Math.cos(arg));

} else if (operation === 'tan') {
    response.status(200).json(Math.tan(arg));
    
} else if (operation === 'ctan') {
    response.status(200).json(1/(Math.tan(arg)));
}

});

app.listen(2121);