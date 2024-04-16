import express from "express"
import axios from "axios"
import { configDotenv } from "dotenv"
import cors from "cors"

configDotenv()

const app = express()
const port = 8000

app.use(cors())

app.get("/apidata", async (req, res) => {
    const NASA_KEY = process.env.VITE_NASA_API_KEY
    const url = "https://api.nasa.gov/planetary/apod"

    try {
        const response = await axios.get(url, {
            params: {
                api_key: NASA_KEY,
            },
        })
        res.json(response.data)
    } catch (error) {
        console.error(error)
        res.status(500).send("Internal Server Error")
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
