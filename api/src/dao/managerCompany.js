import { Company } from "../models/company.js";
import { conexCompany } from "../models/connectionCompany.js";

export class ManagerCompany {

  static async createCompany(date) {

    try {

      const newCompany = await Company.create(date)
      return newCompany;

    } catch (error) {

      console.log({ mensaje_de_error: error });

    }

  }
  static async ConexCompany(user_id, id_company) {

    const newConexCompany = await conexCompany.create({ user_id, id_company})

    const followcompany = await Company.findByIdAndUpdate(
      id_company,
      { $push: { followers: newConexCompany.user_id } },
      { new: true }
    )

    return followcompany

  }
  static async unfollowCompany( user_id, id_company ) {

    await conexCompany.findOneAndDelete({ user_id, id_company })

    await Company.findByIdAndUpdate(id_company, { $pull: { followers: user_id } }, { new: true })

    return { mensaje: "Se ha dejado de seguir la empresa" }
  }
  static async getCompanies() {
    try {
      const allCompanies = await Company.find({}).populate('PostsCompany')
      return allCompanies
    } catch (error) {
      console.log({ mensaje_de_error: error })
    }
  }

}