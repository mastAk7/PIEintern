import prisma from "../DB/db.config.js";

export const createComment = async (req,res) => {
    const {videoId, userId, content} = req.body; 

    const newComment = await prisma.comment.create({
        data:{
            userId: Number(userId),
            videoId: Number(videoId),
            content
        }
    })

    await prisma.video.update({
        where: {
            id:Number(videoId),
        },
        data:{
            commentCounter: {
                increment: 1,
            }
        }
    })

    return res.json({status:200, data: newComment, msg:":Comment created"})
}