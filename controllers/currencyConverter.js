const axios=require('axios')
const NodeCache=require('node-cache')

const cache=new NodeCache({stdTTL:36000})

exports.convert=async(req,res)=>{
    const {amount,from,to}=req.body;
    if(!amount || !from || !to) {
        return res.status(400).json({message:"all fields are required"})
    }
    const source=from.toUpperCase();
    const target=to.toUpperCase();
    try{
        const cachekey=`${source}_${target}`;
        let rate=cache.get(cachekey)

        if(!rate){
            const response=await axios.get('https://api.exchangerate.host/latest',{
                params:{
                    base:source,
                    symbols:target
                },headers:{
                'apikey':process.env.API_KEY
                }
            });
            if(!response.data || !response.data.rates || !response.data.rates[target]){
                return res.status(400).json({ message: 'Invalid currency code or no rate available.' });
            }
            rate=response.data.rates[target]
            cache.set(cachekey,rate)
        }
        const convertedAmount=amount*rate

        res.json({
            amount,from:source,to:target,rate,convertedAmount
        });

    }catch(error){
        return res.status(500).json({message:error.message})
    }
}