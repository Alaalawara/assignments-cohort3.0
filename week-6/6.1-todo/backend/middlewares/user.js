import jwt from 'jsonwebtoken';
const JWT_SECRET = "randomstring";

export async function auth(req, res, next) {
    const token = req.headers.token;
     
    if(token){
        jwt.verify(token, JWT_SECRET,(err,decode)=>{
            if(err){
                res.status(401).json({
                    message:"unauthorized"
                })
            }else{
                req.user= decode;
                next()
            }
        })
    }else{
        res.status(401).json({
            message:"unauthorized"
        })
    }
}