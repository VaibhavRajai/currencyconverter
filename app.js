const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const currencyRoutes=require('./routes/currencyRoutes')

dotenv.config()

const app=express()

app.use(cors())
app.use(express.json())

app.use('/api/currency',currencyRoutes)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});