const accountSid = 'AC8168bbcd682ad33d96e7d837b3383906'; 
const authToken = '32faec5a3ba2d065895ee58374bf5f68'; 
const user = require('twilio')(accountSid, authToken); 

console.log(accountSid);
 
user.messages 
      .create({ 
         body: 'Hello! this is mk.', 
         from: 'whatsapp:+14155238886', 
        
         mediaUrl: ['https://getwallpapers.com/wallpaper/full/1/1/f/1312859-free-download-hi-wallpaper-1920x1080.jpg'],      
         to: 'whatsapp:+919205530192' 
       }) 
      .then((message) => console.log(message))
      .catch((err)=> console.log(err));
     