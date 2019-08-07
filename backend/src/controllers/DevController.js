const axios = require('axios')
const Dev = require('../models/Dev')

module.exports = {
  async index(req, res) {
    const { user } = req.headers

    const loggedDev = await Dev.findById(user)

    const users = await Dev.find({
      $and: [
        { _id: { $ne: user } },
        { _id: { $nin: loggedDev.likes } },
        { _id: { $nin: loggedDev.dislikes } },
      ],
    })

    return res.json(users)
  },

  async store(req, res) {
    const { username } = req.body // desestruturação, seria igual a req.body.username

    const userExists = await Dev.findOne({ user: username })

    if (userExists) {
      return res.json(userExists)
    }

    const response = await axios.get(`https://api.github.com/users/${username}`)

    const { name, bio, avatar_url: avatar } = response.data

    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar
    })

    return res.json(dev)
  }
}

// O correto é um controller não ultrapassar mais de um que os cinco métodos fundamentais que são:
// INDEX   -> lista do recurso
// SHOW    -> retornar um único do recurso
// STORE   -> criação
// UPDATE  -> atualizar
// DELETE  -> deletar