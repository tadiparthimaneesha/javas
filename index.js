const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const Register=require("./registerSchema.js")
const port=2000
app.use(bodyParser.urlencoded({
	extended:true
}))
app.use(bodyParser.json())
app.use(cors())
mongoose.connect("mongodb+srv://tadiparthimaneesha:ammulu2003@cluster0.votgp5h.mongodb.net/firstdb?retryWrites=true&w=majority")
.then(()=>{
	console.log("Connection established")
})
.catch((err)=>{
	console.log(err)
})
app.get("/",(req,res)=>{
	console.log("dummy")
})
app.post("/register",(req,res)=>{
	//const {email,passcode}=req.body;
	const email="deepu@gmail.com",passcode="4634"
	const newFrontendUser=new Register({
		username:email,
		password:passcode
	})
	newFrontendUser.save()
})
app.listen(port,()=>console.log("Server is running on port",port))