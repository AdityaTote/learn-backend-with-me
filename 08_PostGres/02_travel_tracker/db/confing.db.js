import pg from "pg";

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "world",
    password: "12345",
    port: 5432
})

export { db }