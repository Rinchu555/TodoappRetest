//1.importing express
const express=require('express');
const todoModel = require('./model/addtodo');

//2.Initialization
const app = new express();

//3.middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());


//Api creation
//to post data

app.post('/addtodo',async (req,res)=>{
    console.log(req.body);
    var data = await todoModel(req.body);
    data.save();
    res.send({status:"movie added"})
})

//view data
app.get('/viewtodos',async(req,res)=>{
    var data=await todoModel.find();
    res.json(data);
})

//to delete data
app.delete('/deletetodos/:id',async(req,res)=>{
    console.log("delete")
    console.log(req.params)
    let id=req.params.id;
    await todoModel.findByIdAndDelete(id);
    res.json({status:"deleted"})

})
//to update
app.put('/edit/:id',async(req,res)=>{
    let id = req.params.id
    try{
        await todoModel.findByIdAndUpdate(id,req.body)
        res.json({status:"updated"})
    }
    catch(err){
        res.status(500).send(err)
    }
    })
    // app.get('/*',function(req,res){
    //     res.sendFile(path.join(__dirname,'/build/index.html'));
    // });

//4.port
app.listen(3001,()=>{
    console.log("port 3001 is up and running!!!!")
})