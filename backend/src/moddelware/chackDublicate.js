const movieModel = require("../model/movie.model")

const chackDublicate = async(req,res,next)=>{
try {
    const isExist = await movieModel.findOne({title : req.body.title});
    if(isExist){
       return res.json({"message" : "Movie already prasent in data base"})
    }
    next()
} catch (error) {
    console.log("Internal server error");
    res.status(500).json("Internal server error")
}
}

module.exports = chackDublicate