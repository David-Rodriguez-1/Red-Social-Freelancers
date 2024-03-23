const mongoose = require('mongoose')
require('dotenv').config()
const DB_URI = process.env.DB_URI;

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