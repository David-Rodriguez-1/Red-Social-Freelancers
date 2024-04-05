const { Company, ConnCompany } = require('../../models/index')


const connCompanyController = async ({ user_id, id_company }) => {
  console.log(id_company);
    const newConnCompany = await ConnCompany.create({
      user_id,
      id_company
    })
    
    const followcompany = await Company.findByIdAndUpdate(
      id_company,
      { $push: { followers: newConnCompany.user_id } },
      { new: true }
    )
    return followcompany
  }


const unfollowCompanyController = async ({ user_id, id_company }) => {
  await ConnCompany.findOneAndDelete({ user_id, id_company })

  await Company.findByIdAndUpdate(
      id_company,
      { $pull: { followers: user_id } },
      { new: true }
  )
  return {mensaje: "Se ha dejado de seguir la empresa"}
}



module.exports = { connCompanyController, unfollowCompanyController }
