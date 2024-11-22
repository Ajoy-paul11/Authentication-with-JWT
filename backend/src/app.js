import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import { errorController } from "./controllers/errorController.js"


const app = express()

// Necessary middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: "*", credentials: true }))
app.use(cookieParser())


// Import routes
import userRoutes from "./routes/user.route.js"


// Export routes
app.use("/api/v1/users", userRoutes)


// error middleware
app.use(errorController)

export { app }