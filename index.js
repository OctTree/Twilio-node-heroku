require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Messaging test!');
})
app.post('/message', (req, res) => {
    const client = require('twilio')(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
    );
    client.messages.create({
      from: '17372141844',
      to: '19174269339',
      body: "Thank you for signing up for text messages from https://sprocketprinters.com. Reply HELP for help and STOP to cancel."
    }).then((messsage) => console.log(message.sid));

})

app.listen(port, () => console.log(`App listening on port ${port}!`));
