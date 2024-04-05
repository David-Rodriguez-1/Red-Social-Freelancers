const { Router } = require('express')
const { createCompanyHandler } = require('../handlers/createCompanyHandler')
const { getCompanyHandler } = require('../handlers/getCompanyHandler')
const { followCompanyHandler, unfollowCompanyHandler } = require('../handlers/followCompanyHandler')

const company = Router()

company.post('/', createCompanyHandler)
company.get('/', getCompanyHandler)
company.post('/follow', followCompanyHandler)
company.put('/follow', unfollowCompanyHandler)
// company.put('/', putCompanyHandler)

module.exports = company