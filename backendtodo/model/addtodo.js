const mongoose=require ("mongoose");
mongoose.connect("mongodb+srv://rinchu555:rinchu123@cluster0.nbwsfby.mongodb.net/todoappdb?retryWrites=true&w=majority")
.then(()=>{
    console.log("Db connected")
})
.catch(err=>console.log(err))

let Schema=mongoose.Schema;

const todoSchema=new Schema({
    itemname:String
});

var todoModel=mongoose.model("todos",todoSchema)
module.exports=todoModel;