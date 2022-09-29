const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const myfunctions=require("firebase-functions");
const express= require("express");
const cors=require("cors");
const stripe=require("stripe")("sk_test_51LjfiWBexdSCV5yftF5uobDVAPTHAYArGOe9dS1U1KqD3JG35fB7ZFz1WFu8iJ1mO7parXS8MYyYfonRPool6DlP00O4B8E122")
//API

//App config
const app=express();

//middlewares
app.use(cors({origin:true}));
app.use(express.json());

//api routes
app.get('/',(req,rep)=>rep.status(200).send("Hello from express"));

app.post('/payment/create', async(req,rep)=>{
    const total =req.query.total;
    //console.log("payment recieved for the total amount:",total);
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,// submits the currency
        currency:"usd",
    });
    //ok response code 201
    rep.status(200).send({
        clientSecret:paymentIntent.client_secret,
    });

})

//listen comands
exports.api=functions.https.onRequest(app);
// example api end point
//http://localhost:5001/clone-4b926/us-central1/api