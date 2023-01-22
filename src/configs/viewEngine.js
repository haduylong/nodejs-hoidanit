import express from "express"

const configViewEngine = (app) => {
    app.use(express.static('./src/public')) // cau hinh static file 

    app.set("view engine", "ejs"); // cau hinh ejs cho view angine
    app.set("views", "./src/views") // tim file ejs trong views
}

export default configViewEngine