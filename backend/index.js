import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv"
dotenv.config({});
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js"



const app = express();



//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOption = {
    origin: [
        "http://localhost:5173",
        "https://job-pportal-v6dq.onrender.com"
    ],
    credentials: true
}
app.use(cors(corsOption));

app.use("/user",userRoute);
app.use("/company",companyRoute);
app.use("/job",jobRoute);
app.use("/application",applicationRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})