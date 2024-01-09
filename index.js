const express = require('express')
const path = require('path')

const app = express()
app.use(express.static(__dirname + '/'));
app.listen(8080, async ()=>{

    require('./redis-client')();
    console.log('App started')
})


app.get('/dashboard', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/api', async (req, res)=>{
    const client = await require('./redis-client')()
    const findLowest = (l1, l2, l3)=>{
        let lowest = l1
        let lowestIdx = 0
        if(l2 < lowest) {
            lowestIdx = 1
        }
        if(l3 < lowest) {
            lowestIdx = 2
        }
        return lowestIdx
    }
    
    const l1C = await client.get('l1')
    const l2C = await client.get('l2')
    const l3C = await client.get('l3')

    console.log(l1C, l2C, l3C);
    const layout = findLowest(l1C, l2C, l3C)
    console.log(layout);
    
    // updateLayoutCount
    if(layout == 0) client.set('l1', +l1C+1)
    if(layout == 1) client.set('l2', +l2C+1)
    if(layout == 2) client.set('l3', +l3C+1)

    res.send({ layout })
})