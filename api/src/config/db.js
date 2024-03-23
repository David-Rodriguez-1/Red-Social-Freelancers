// const { connect } = require('http2');
// const mongoose = require('mongoose');


//mongodb://localhost:27017

const mongoose = require('mongoose')

const DB_URI = 'mongodb://localhost:27017/AppFreelancers'

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(DB_URI);
  console.log("db conectada");
}
// module.exports = () => {
//   const connect = () => {
//     mongoose.connect(
//       DB_URI,
//       {
//         keepAlive: true,
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//       },
//       (err) => {
//         if (err) {
//           console.log('DB: ERROR !!')
//         } else {
//           console.log('Conexion correcta!!')
//         }
//       }
//     )
//   }
//   connect()
// }