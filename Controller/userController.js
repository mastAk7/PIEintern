import prisma from "../DB/db.config.js";

export const newUser = async (req,res) => {
    const {username, avatarURL} = req.body;

    const findUser = await prisma.user.findUnique({
        where:{
            username
        }
    })

    if(findUser){
        return res.json({status:400, msg:"Username already exists"})
    }

    const newUser = await prisma.user.create({
        data:{
            username,
            avatarURL
        }
    })

    return res.json({status:200, data:newUser, msg: "User created"})
}

export const fetchUsers = async (req,res) => {
    const users = await prisma.user.findMany({
        include: {
            videos:{
                select: {
                    title: true,
                    videoUrl: true,
                    metaData:{
                        select:{
                            label: true,
                            thumbnailURL: true,
                        }
                    }
                }
            },
            comments:{
                select:{
                    content: true,
                }
            }
        }
    })
    return res.json({status: 200, data: users});
}

export const fetchUser = async (req,res) => {
    const user = await prisma.user.findFirst({
        where:{
            id: Number(req.params.id)
        },
        include: {
            videos:{
                select: {
                    title: true,
                    videoUrl: true,
                    metaData:{
                        select:{
                            label: true,
                            thumbnailURL: true,
                        }
                    }
                }
            },
            comments:{
                select:{
                    content: true,
                }
            }
        }
    })
    return res.json({status: 200, data: user});
}