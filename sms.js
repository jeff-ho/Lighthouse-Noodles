require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const randomId = require('./idGenerator');

const sendTextToUser = function(total) {
  client.messages
  .create({
     body: `Hang tight! Your order number is: ${randomId.generateRandomString()}. Your order total is: $${total}. Please give us approximately 20 minutes to prepare your order!  `,
     from: process.env.OUR_PHONE_NUMBER,
     to: process.env.PHONE_NUMBER
   })
  .then(message => console.log(message.sid));
}

// const sendTextToRestaurant = function(total, itemList) {
//   client.messages
//   .create({
//      body: `New Order! Order:   Your order total is: $${total}.   `,
//      from: process.env.OUR_PHONE_NUMBER,
//      to: process.env.PHONE_NUMBER
//    })
//   .then(message => console.log(message.sid));
// }

module.exports = { sendTextToUser }





