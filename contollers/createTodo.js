//Import the module.

const Todo=require("../models/Todo");

//Define route handler.

/*Used async to avaoid main thread distrubenss */
exports.cerateTodod = async(req,res) =>{
    try{
        //Extract Title and description from requests body.
        const{title,description} = req.body;

        /*Create a new Todo object and insert it inside the DB.For inssertion we use the 
        create method to do it*/
        const response =await Todo.create({title,description});

        //Send a json response to indicated done.
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry Created Successfully"
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:"Internal server Error",
                message:err.message
            }
        );
    }

}