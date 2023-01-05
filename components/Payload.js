import Link from "next/link";
import { resolve } from "path";
import React,{useState} from "react";


export default function  Payload () { 
    
    const makePayment = async () => {
        console.log("here...");
        const res = await initializeRazorpay();

         if (!res) {
            alert ("RazorPay SDK Failed to load Check internet connectivity");
            return;
         }
         //make API call to the serverless API
         const data = await fetch("/api/razorpay", {method: "POST" }).then((t) => t.json());
          console.log(data);
          var options = {
            key: process.env.RAZORPAY_KEY, //enter the key id
            key_secret: process.env.RAZORPAY_SECRET, //enter secret key
            name: "Unsplash Arora internation Ltd",
            currency: data.currency,
            amount: data.amount,
            order_id: data.id,
            description: "thanks for your test donations",
            handler: function (response) {
                // validate payment at server using webhooks is a better idea.
                alert(response.razorpay_payment_id);

                alert(response.razorpay_order_id);

                alert(response.razorpay_signature);

                alert ("payment successful");
            },

            prefill : {
                name: "Unsplash Arora",
                email:"davidkings@gmail.com",
                contact: "07063234954"
            },
          };

          const paymentOblect = new window.Razorpay(options);
          paymentOblect.open();
    };

       const initializeRazorpay = () =>{
        return new Promise((resolve) => {
            const script = document.createElement("script");
                script.src = "https://checkout.razorpay.com/v1/checkout.js";
                

                script.onload = () => {
                    resolve(true);
                };
                script.onerror = () => {
                    resolve(false);
                };
                document.body.appendChild(script);
        });
    };

    return (
    
        <div>
            <h1> Make your payments convinently</h1>
            <br/>

            {/* <input type="text" 
                    placeholder="Enter Amount" 
                    value={amount}  
                    onChange ={(e)=>setamount(e.target.value)}
                    /> 
            <br/> <br/>  */}

             <Hero onClick={makePayment} /> 
           
       </div>
    );
};

const Hero = ({onClick}) => {

    return (
        <div>
            <h3> Click below to process payments</h3>
          <button 
                onClick={onClick}
                    > Purchase Now! 
          </button> 


          <br />

          <Link href='/paypalpay'><h5>payments with paypal click here </h5></Link>
          
        </div>    
    );
};


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if(amount === "") {
//             alert("please enter amount");
//         }else {
//             var options = {
//                 key: "rzp_test_fB1sjbtnNp4sNy",
//                 key_secret: "5istOHxA7iKgEXNSyDrSiuRA",
//                 amount: amount *100,
//                 currency:"IVR",
//                 name: "STARTUP_PROJECTS",
//                 description: "TESTING PURPOSE",
//                 handler: function(response){
//                     alert(response.razorpay_payment_id);
//                 },
//                 prefill: {
//                     name:"david Camela Nwachukwu",
//                     email:"davidkings@gmail.com",
//                     contact: "07063234954"
//                 },
//                 notes:{
//                     address:"Razorpay corporate office"
//                 },
//                 theme: {
//                     color:"#3399CC"
//                 }
//             };
//             var pay = new window.Razorpay(options);
//             pay.open();
//         }
//     }