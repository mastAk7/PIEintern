import prisma from '../DB/db.config.js'

export const createVideo = async(req,res) => {
    const {title, description, videoUrl, userId, thumbnailURL, label} = req.body;

    const newVideo = await prisma.video.create({
        data:{
            userId: Number(userId),
            title,
            description,
            videoUrl
        }
    })

    const metaItem = await prisma.metaItem.create({
        data:{
            videoId: newVideo.id,
            thumbnailURL,
            label
        }
    })

    return res.json({status:200, data: {newVideo, metaItem}, msg:"Video created"})
}