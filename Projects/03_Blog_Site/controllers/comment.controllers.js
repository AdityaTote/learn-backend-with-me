import { Comment } from "../models/comment.models.js";

// Send the comment to db  
async function handleComment(req,res){
    const content  = req.body.content;
    const comment = await Comment.create({
        content,
        blogId: req.params.blogId,
        createdBy: req.user._id,
    });
    return res.redirect(`/blogs/${ req.params.blogId }`)
};



export { handleComment }