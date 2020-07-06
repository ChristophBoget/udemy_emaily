/*
module.exports = {
  googleClientID: '864738094914-ujk1vnf38mq8cc9f6hnnloskef5q2dt1.apps.googleusercontent.com',
  googleClientSecret: '4i_TO92RrpkINClPX2Mfywnn',
  mongoURI: 'mongodb+srv://emailyProd:emaily1234-prod@cluster0.ptszr.gcp.mongodb.net/emaily-prod?retryWrites=true&w=majority',
  cookieKey: 'asdfwertq'
};
*/
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY
};
