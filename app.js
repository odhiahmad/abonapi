require("dotenv").config();
const express = require('express');
const app = express();
const userRouter = require("./api/users/user.router")
const pegawaiRouter = require("./api/pegawai/pegawai.router")
const absenRouter = require("./api/absen/absen.router")
const statistikRouter = require("./api/statistik/statistik.router")
const cors = require('cors');

app.use(express.json());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    next();
})
app.use(cors());

app.use("/api/users",userRouter);
app.use("/api/pegawai",pegawaiRouter);
app.use("/api/absen",absenRouter);
app.use("/api/statistik",statistikRouter);

app.listen(process.env.APP_PORT,()=>{
    console.log("Server sedang berjalan",process.env.APP_PORT);
});