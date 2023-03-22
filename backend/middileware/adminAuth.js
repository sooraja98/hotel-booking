const jwt= require('jsonwebtoken')
const JWT_SECRET_ADMIN=process.env.JWT_SECRET_ADMIN
const adminTokenAuth= (req,res,next)=>{

    // verify authentication
    const {authorization} =req.headers
    if(!authorization){
        return res.status(401).json({error:'Authorization token required'})
        console.log('no authorization')
    }

        const token= authorization.split(' ')[1]
        try{
            jwt.verify(token,JWT_SECRET_ADMIN,(err,decodedToken)=>{

                if(err){
                    console.log(err)
                    res.json({
                        error:'Invalid Authorization token'
                    }).status(401)
                }else{
                    console.log('everything ok from the admin token check middile ware');
                   next()
                }
             })

        }catch(err){
            console.log(err)
            res.json({
                error:'Authorization toke required'
            }).status(401)
        }

    
}

module.exports= {adminTokenAuth}