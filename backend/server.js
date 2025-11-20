import express from 'express';import cors from 'cors';import db from './database.js';
const app = express();app.use(cors());app.use(express.json());
app.get('/menu',(req,res)=>{db.all("SELECT * FROM meals",[],(e,r)=>res.json(r));});
app.post('/order',(req,res)=>{res.json({ok:true});});
app.listen(3000,()=>console.log("Backend running"));