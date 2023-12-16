const {Schema ,model } = require("mongoose");

const serviceSchema =new Schema({
    course_id :{type : Number , required :true},
    course_name :{type :String , required :true},
    instructor :{type :String , required :true},
    description :{type :String , required :true},
    duration :{type :String , required :true},
    level :{type :String , required :true},
    price :{type :Number , required :true},
    topics : {type:Array ,required :true}
})

const Service = new model("Service",serviceSchema);

module.exports = Service;