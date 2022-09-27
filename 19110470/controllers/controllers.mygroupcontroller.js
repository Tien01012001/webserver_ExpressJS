const e = require('express');
const {mygroup} = require('../models/models.mygroup');
function KTmygroup(id,group){
    if(id<group.length){return true}
    else {return false}
}
function KTExist(id){
    for(i=0;i<mygroup.length;i++){
        if(mygroup[i].id==id ){return false}
        else{return true}
    }

}
function friendRequest (req, res) {
    if(KTExist(Number(req.params.friendID))){
        const ID = Number(req.params.friendID);
        const friend = mygroup[ID];
        if (friend) {
            res.status(200).json(friend);
        }
        else {
            res.status(400).json({error:'not valid'});
        }
    }
    else{
        res.status(400).json({error:'not valid'});
    }
}
function listfriend (req, res) {
    res.status(200).json(mygroup);
}
function message (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    for(i=0;i<mygroup.length;i++){
        res.write(`<meta charset="utf-8"><div><ul><li>${mygroup[i].name}</li></ul></div>`);
    }
    res.end();

}
function mygroupRequest (req, res) {
  if(KTExist(Number(req.params.myID))){
        const ID = Number(req.params.myID);
        const friend = mygroup[ID];
        if (friend) {
            res.statusCode = 200;
            res.setHeader('Content-Type','text/html');
            res.write(`<meta charset="utf-8"><div><ul><li>${friend.name}</li></ul></div>`);
            res.end();
        }
        else {
            res.statusCode = 404;
            res.setHeader('Content-Type','text/html');
            res.write('Not valid');
        }
    }
    else{
        res.statusCode = 404;
        res.setHeader('Content-Type','text/html');
        res.write('Not valid');
    }
}
module.exports = {
    friendRequest,
    listfriend,
    message,
    mygroupRequest
}