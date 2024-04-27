import { User } from "../models/user.models.js";

async function handleUserAndEmail (req,res) {
    const allUser = await User.find({});
    const html = `
        <ul>
        ${allUser.map((user) => 
            `<li> ${user.firstName} : ${user.email}</li>`
        )}
        <ul/>
    `
    res.send(html)
}

async function handleNewEntry (req,res)  {
    const body = req.body;
    if (!body ||
        !body.firstName ||
        !body.lastName ||
        !body.email ||
        !body.gender ||
        !body.jobTitle
    ){
        return res.status(404).json({ msg:"PLz fill all field"})
    }
    const result = await User.create({
        firstName: body.firstName, 
        lastName: body.lastName ,
        email: body.email ,
        gender: body.gender ,
        jobTitle: body.jobTitle,
    });
    // console.log(result);
    res.status(201).json({msg: "Succes"})
}

async function handleDisplayData (req,res) {
    try{
    const allUser = await User.find({});
    res.json(allUser);
    } catch(err){
        res.json("ERR:",err.message);
    }
}

async function handleFindById (req,res) {
    const id = req.params["id"];
    try{
    const allUser = await User.findById(id);
    res.json(allUser);
    } catch(err) {
        res.json("ERR:",err.message)
    }
}

async function handleFindANdUpdate (req,res) {
    const id = req.params["id"]
    const body = req.body;
    try{
    await User.findByIdAndUpdate(id,{
        firstName: body.firstName, 
        lastName: body.lastName ,
        email: body.email ,
        gender: body.gender ,
        jobTitle: body.jobTitle,
    });
    return res.json({ status: "Succes"});
    } catch (err){
        res.json("ERR:" ,err.message)
    }
}

async function handleDeleteData (req,res) {
    const id = req.params["id"];
    try{
    await User.findByIdAndDelete(id);
    return res.json({ status: "Succes"})
    } catch(err){
        res.json(`ERR:${err.message}`)
    }
}

export { handleUserAndEmail,
         handleNewEntry ,
         handleDisplayData,
         handleFindById,
         handleFindANdUpdate,
         handleDeleteData }