//Importing model for destructing what we need to fetch out.
const Todo=require('../models/Todo');

//Define a getTodo Route handler

exports.getTodo = async (req,res) => {
    try{
        //Fetch all the todo from my Db
        const response= await Todo.find({});

        //Once got the data mark it Succesful.
        res.status(200).json({
            success:true,
            data:response,
            message:"Complete Data is fetched out succesfully."
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Internal server Error",
            message:err.message
        })

    }
}

exports.getSingleTodo = async (req,res) => {
    try{
        //Extracting out the id of the particular data.
        const id = req.params.id;

        //Now extract the id of that particular id.
        const response = await Todo.findById({_id:id});

        //There is possibility that we get a worng id in that case no data will be given.
        if(!response){
            return res.status(500).json({
                success:false,
                data:`No data found for the particular id:${id}`,
                message:err.message
            })
        }

        //Marking a Success once fetched a data out of the server.
        res.status(200).json({
            success:true,
            data:response,
            message:`Data of ${id} fetched succesfully`
        });
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Internal server Error",
            message:err.message
        })
    }
}