const { Company, ConnCompany } = require('../../models/index')


const connCompanyController = async ({ user_id, company_id }) => {
    const newConnCompany = await ConnCompany.create({
      user_id,
      company_id
    })
    
    const followcompany = await Company.findByIdAndUpdate(
      company_id,
      { $push: { followers: newConnCompany.user_id } },
      { new: true }
    )
    return followcompany
  }


const unfollowCompanyController = async ({ user_id, company_id }) => {
  await ConnCompany.findOneAndDelete({ user_id, company_id })

  await Company.findByIdAndUpdate(
      company_id,
      { $pull: { followers: user_id } },
      { new: true }
  )
  return {mensaje: "Se ha dejado de seguir la empresa"}
}



module.exports = { connCompanyController, unfollowCompanyController }
