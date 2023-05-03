import Express from 'express';
import * as dotenv from 'dotenv' ;
import cors from 'cors' ;

import connectDB from './mongodb/connect.js'

dotenv.config() ;
const app = Express() ;
app.use(cors()) ;
app.use(Express.json({limit: '50mb'})) ;

app.get("/", async (req,res)=> {
    res.send('Hello from DALL-E') ;
})


const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL) ;
        app.listen(8080, ()=> console.log("listening on http://localhost:8080/")) ;
    }
    catch(err) {
        console.log(err) ;
    }
}

startServer() ;