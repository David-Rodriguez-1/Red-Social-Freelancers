import mongoose from "mongoose";

export const bdMongo = async (link , bd) => {

  try {

    await mongoose.connect(`${link}, ${bd}`);
    console.log("BD connected")

  } catch (error) {

    return console.log("Error en coneccion de BD")
  }
};
