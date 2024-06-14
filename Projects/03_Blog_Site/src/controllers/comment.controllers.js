import { Comment } from "../models/comment.models.js";

// Send the comment to db  
async function handleComment(req,res){
    const content  = req.body.content;
    if(!content){
        return res.json("Entre comment")
    }
    try {
        const comment = await Comment.create({
            content,
            blogId: req.params.blogId,
            createdBy: req.user._id,
        });
        return res.redirect(`/blogs/${ req.params.blogId }`)
    } catch (error) {
        return res.json("unable to add commment")
    }
};

export { handleComment }