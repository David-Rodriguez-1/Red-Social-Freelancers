const { User, Connection } = require('../../models/index')

const connectionController = async ({ user_id, connected_user_id }) => {
  try {
    const newConn = await Connection.create({
      user_id: user_id,
      connected_user_id: connected_user_id
    })

    const followerUser = await User.findByIdAndUpdate(
      user_id,
      {
        $push: { following: newConn.connected_user_id } },
      { new: true }
    )
    const followedUser = await User.findByIdAndUpdate(
      connected_user_id,
      { $push: { followers: user_id } },
      { new: true }
    )

    return { followerUser, followedUser }
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

const unfollowUserController = async ({ user_id, connected_user_id }) => {
  await Connection.findOneAndDelete({
    user_id,
    connected_user_id
  })

  await User.findByIdAndUpdate(
    user_id,
    { $pull: { following: connected_user_id } },
    { new: true }
  )

  await User.findByIdAndUpdate(
    connected_user_id,
    { $pull: { followers: user_id } },
    { new: true }
  )
  return { message: 'Conexión eliminada' }
}

module.exports = { connectionController, unfollowUserController }
