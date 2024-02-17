//Importing the Todo model for destructuring.
const Todo = require("../models/Todo");

exports.deleteTodo = async (req,res) => {
    try{
        //For deleting a particular data we first need to reach till that data.
        const {id} = req.params;

        await Todo.findByIdAndDelete({_id:id});

        //once the data gets deleted mark it true.
        res.status(200).json({
            success:true,
            message:`Data of id:${id} is been deleted.`
        })

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Internal Error in the server.",
            message:err.message
        })
    }
}