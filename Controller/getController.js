import prisma from '../DB/db.config.js'

export const fetchVideos = async(req,res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    if(page<=0){
        page = 1;
    }
    if(limit<=0 || limit>100){
        limit = 10;
    }
    const skip = (page-1) * limit;
    const videos = await prisma.video.findMany({
        skip,
        take: limit,
        include:{
            user: {
                select: {
                    username: true,
                }
            },
            metaData: {
                select: {
                    thumbnailURL: true,
                    label: true
                }
            },
            comments : {
                include : {
                    user: {
                        select: {
                            username: true
                        }
                    }
                }
            }
        }
    });

    const totalVideos = await prisma.video.count();
    const totalPages = Math.ceil(totalVideos/limit);
    return res.json({status: 200, data: videos, meta:{
        totalPages,
        currentPage: page,
        limit
    }});
}