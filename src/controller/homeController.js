import pool from "../configs/connectDB";

let getIndexPage = async (req, res) => {
    // logic
    const [rows, fields] = await pool.execute(`select * from users`);
    return res.render('index.ejs', {dataUser: rows});
}

let getDetailUser = async (req, res) => {
    let userID = req.params.id;
    let [rows, fields] =  await pool.execute(`select * from users where id = ?`, [userID]);
    rows.forEach(element => {
        console.log(element.firstName, element.lastName);
    });
    return res.send(JSON.stringify(rows));
}

let deleteUser = async (req, res) => {
    let userID = req.body.userID;
    await pool.execute(`delete from users where id = ?`, [userID]);
    return res.redirect('/');
}

module.exports = {
    getIndexPage, deleteUser, getDetailUser
}