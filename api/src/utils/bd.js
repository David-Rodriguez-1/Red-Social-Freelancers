import mongoose from 'mongoose'

export const bdMongo = async (link, bd) => {
  try {
    await mongoose.connect(`${link}, ${bd}`, {
      writeConcern: {
        w: 'majority',
        j: true,
        wtimeout: 1000
      }
    })

    console.log('BD connected')
  } catch (error) {
    return console.log('Error en coneccion de BD')
  }
}
