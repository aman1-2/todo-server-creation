//Importing the model because it will only help us in destructuring the data.
const Todo = require("../models/Todo");

//Api Handler for update

exports.updateTodo = async (req,res) => {
    try{
        /*We have to update a particular data therefore we need to go to that particular
        data to update it.*/
        const {id}=req.params;

        /*Now what so ever changes made now the new data from showed be passed and that new
        data with all the changes will be present in the url so again we have to fetch
        and create a object of it and store it back.*/
        const {title,description} = req.body;

        //Now fetching the new data.
        const response = await Todo.findByIdAndUpdate(
            {_id:id},{title,description,updatedAt:Date.now()}
        )

        //Once updated and fetched mark it true.
        res.status(200).json({
            success:true,
            data:response,
            message:`The data is Updated for the id:${id}`
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Internal error in server",
            message:err.message
        })
    }
}