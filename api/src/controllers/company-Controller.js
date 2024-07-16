import { Company } from "../models/company.js"
import { user } from "../models/user.js"
import { ManagerCompany } from "../dao/managerCompany.js"

export class ControllerCompany {

  static async createCompany(req, res) {

    const data = JSON.parse(req.body)

    const checkName = Company.findOne({ company_name: data.name })
    if (!checkName) return res.status(400).json("El nombre esta en uso")

    const prop = ['name', 'password', 'industry', 'description', 'logoUrl']
    const checkProp = prop.filter(x => { !(x in data) })
    if (checkProp.length < 0) return res.status(404).json("Propiedades incorrectas o no pedidas")

    const dataType = {

      name: String,
      password: String,
      industry: String,
      description: String,
      logoUrl: String

    }

    const checkType = Object.entries(dataType).reduce((acc, [date, type]) => {

      if (data[date] !== undefined) {

        if (typeof data[date] !== type) {

          acc.push(date)
        }
      }

      if (acc.length > 0) return res.status(400).json("Tipo de datos incorrecto")
    })
    let followers = []
    let post_company = []

    const dateCompany = {
      ...data,
      followers,
      post_company
    }
    try {

      const newCompany = await ManagerCompany.createCompany(dateCompany)
      return res.status(201).json(newCompany)

    } catch (error) {

      res.status(400).json({ error: error.message })

    }
  }
  static async followCompany(req, res) {

    const data = req.body

    const checkUser = await user.findOne({ _id: data.user })
    if (!checkUser) return res.status(400).json("Usuario no encontrado")

    const checkCompany = await Company.findOne({ _id: data.company })
    if (!checkCompany) return res.status(400).json("Company no encontrado")

    try {

      const newConnCompany = await ManagerCompany.ConexCompany(checkUser, checkCompany)
      return res.status(201).json(newConnCompany)

    } catch (error) {

      res.status(400).json({ error: error.message })

    }
  }
  static async unfollowCompany(req, res) {

    const data = req.body

    const checkUser = await user.findOne({ _id: data.user })
    if (!checkUser) return res.status(400).json("Usuario no encontrado")

    const checkCompany = await Company.findOne({ _id: data.company })
    if (!checkCompany) return res.status(400).json("Company no encontrado")


    try {

      const unfollow = await ManagerCompany.unfollowCompany(data.user, data.company)
     return res.status(201).json(unfollow) 

    } catch (error) {

      res.status(400).json({ error: error.message })

    }
  }
  static async getCompany(req, res) {
    
    try {

      const companies = await ManagerCompany.getCompanies()
      res.status(200).json(companies)

    } catch (error) {

      res.status(500).json({ error: error.message })

    }
  }



}

