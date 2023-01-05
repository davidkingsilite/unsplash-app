const RazorPay = require ("razorpay");
const shortid = require ("shortid");

export default async function handler (req, res){
    if (req.method === "POST") {
        // initialize razorpay
        const razorpay = new RazorPay({
            key_id: process.env.RAZORPAY_KEY,
            key_secret: process.env.RAZORPAY_SECRET,
        });
        //create an order 

        const payment_capture = 1;
        const amount = 399;
        const currency = "INR";
        const options = {
            amount : (amount * 100).toString(),
            currency,
            receipt: shortid.generate(),
            payment_capture,
        };

        try {
            const response = await razorpay.orders.create(options);
            res.status(200).json({
                id: response.id,
                currency: response.currency,
                amount: response.amount,
            });
        } catch (err){
            console.log(err);
            res.status(400).json(err);
        }

    } else {
        //handle any other HTTP method
    }
}