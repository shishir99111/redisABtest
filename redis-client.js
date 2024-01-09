let redis = require('redis')
let client;

module.exports = async ()=>{
    if(!client){
        client = await redis.createClient({port: 6379})
        .on('error', (err)=>{
            console.log('error connecting redis', err)
        })
        .connect()

        await client.set('l1', 0)
        await client.set('l2', 0)
        await client.set('l3', 0)
        // const test = await client.get('l1')
        // console.log(test)
    }else{
        return client
    }

}