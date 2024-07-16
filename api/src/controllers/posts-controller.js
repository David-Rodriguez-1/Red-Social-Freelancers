
export class Postsontroller {

    static async getPosts(req, res) {
        try {
            const postsUsers = await getPosts()
            res.status(200).json(postsUsers)
        } catch (error) {
            res.status(500).json({ mensaje_de_error: error.message })
        }
    }
    static async addPostUser(req, res) {
        console.log(req.body);
        const post = req.body
        try {
            const newPost = await addPostUser(post)
            res.status(201).json(newPost)
        } catch (error) {
            res.status(500).json({ mensaje_de_error: error.message })
        }
    }

}