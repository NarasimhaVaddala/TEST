const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())

app.get('/' , (req,res)=>{
    return res.send("TEST WORKED")
})


app.listen( port ,'0.0.0.0',()=>{
    console.log("Ruuning on ", port);
    
})
