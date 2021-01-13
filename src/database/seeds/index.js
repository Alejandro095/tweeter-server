const faker = require("faker");

const setEnviromentVariables = require("./../../config/env")();
const { Pool } = require("pg");

const database = new Pool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    ssl: process.env.NODE_ENV == "production" ? { rejectUnauthorized: false } : undefined
});

for(let i = 0; i <= 10; i++) {

    const data = {
        username: faker.internet.userName(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email()
    }

    const text = `INSERT INTO users(username, first_name, last_name, email) VALUES ('${data.username}', '${data.firstName}', '${data.lastname}', '${data.email}');`;

    database.query("DELETE FROM users;").then(() => {
        database.query(text).then(()=>console.log(`[ADD] Usuario, username:${data.username},correo: ${data.email}`));
    }).catch((err) => console.log(err))
    
}
