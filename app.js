const express=require(`express`);
const morgan=require(`morgan`);
const cors=require(`cors`);
const app=express();

app.use(morgan(`tiny`));
app.use(cors());


app.get(`/`, (req, res)=>{
    res.send(`Hola mundo`);
});

app.set(`puerto`, process.env.PORT || 3000);

app.listen(app.get(`puerto`), ()=>{
    console.log(`Servidor operando en puerto: ${app.get(`puerto`)}`);
});