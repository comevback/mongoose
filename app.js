import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/nameList");

const listSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must input name"]
    },
    age: {
        type: Number,
        min:0,
        max:120
    }
});

const Human = mongoose.model("Human", listSchema);

const john = new Human({
    name: "John",
    age: 37
});

const shepard = new Human({
    name: "Shepard",
    age: 24
});

const ash = new Human({
    name: "Ash",
    age: 27
});

const beal = new Human({
    name: "Beal",
    age: 30
});

const sean = new Human({
    name: "Sean",
    age: 50
});

/*Human.insertMany([john, shepard, ash, beal])
.then(function(){
    console.log("success");
})
.catch(function(err){
    console.log(err);
});*/

/*Human.insertMany([sean])
.then(function(){
    console.log("success");
})
.catch(function(err){
    console.log(err);
});*/

await Human.deleteOne({name:"Sean"});

console.log(await Human.find({}, { name: 1}));
Human.find().then