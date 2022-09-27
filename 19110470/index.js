const express = require('express');
const app = express();
const PORT = 5000;

const {mygroup} = require('./models/models.mygroup');
const {friendRequest, listfriend} = require('./controllers/controllers.mygroupcontroller');
const friendReq = require('./routes/routes.mygroup');
const mssv = require('./routes/routes.19110470');
const message = require('./routes/routes.message');
const e = require('express');

app.use(express.json());


app.use((req,res,next)=> {
    console.log(`${req.method} ${req.url}`);
    next();
});



app.use((req,res,next)=> {
    switch(req.url){
        case '/':
            app.use('/', friendReq);
            break;
        case '/19110470':
            if(req.method == 'POST'){
                app.post('/19110470',((req,res)=> {
                    console.log(`${req.body}`);
                    if (!req.body.name) {
                        return res.status(400).json({
                            error:'must have username'
                        });
                    }
                    const friend = {name: req.body.name,id:mygroup.length};
                    mygroup.push(friend);
                    res.status(200).json(friend);
                }))
                
            }
            else{
                app.use('/19110470',mssv);
                break;
            }
        case '/message':
            app.use('/message',message);
            break;
        // default :
        //     res.statusCode = 404;
        //     res.setHeader('Content-Type','text/html');
        //     res.write('Not valid');
    }
    next();
});




app.listen(PORT);