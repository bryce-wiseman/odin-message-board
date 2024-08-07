
export let posts = [
    {
        user: "@normalguy",
        text: "This is the very first post. Hello world.",
        posted: new Date(),
        id: 1
    },
    {
        user: "@wranglerricky",
        text: "This is the second post on this here site. Howdy world.",
        posted: new Date(),
        id: 2
    },
    {
        user: "@sirarchibaldthefourth",
        text: "I do believe this is the third post. Greetings world.",
        posted: new Date(),
        id: 3
    }
]

// @desc gets all posts
// @route GET /
export const getPosts = (req, res, next) => {
    res.render('index', {postList: posts})
}

// @desc gets one post
// @route GET /post/:id
export const getPostDetails = (req, res, next) => {
    let id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)

    if (post) {
        res.render('details', post)
    } else {
        const error = new Error('A post with that ID not found')
        error.status = 404
        return next(error)
    }
}

// @desc gets form to create new post
// @route GET /new
export const getForm = (req, res, next) => {
    res.render('form')
}

// @desc creates new post and redirects to index
// @route POST /new
export const newPost = (req, res, next) => {
    console.log(req.body)
    posts.push({
        user: req.body.postUser,
        text: req.body.postBody,
        posted: new Date(),
        id: posts.length + 1
    })
    res.redirect('/')
}