const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const userModel = require("../models/user.model")



async function connectToDB() {

    try {
        await mongoose.connect(process.env.MONGO_URI)

        const demoUser = await userModel.findOne({ email: "test@gmail.com" })
        const demoPassword = await bcrypt.hash("test123@", 10)
        if (!demoUser) {
            await userModel.create({
                username: "Test User",
                email: "test@gmail.com",
                password: demoPassword
            })
        } else {
            demoUser.password = demoPassword
            await demoUser.save()
        }

        console.log("Connected to Database")
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = connectToDB