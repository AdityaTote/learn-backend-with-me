import { db } from "../db/confing.db.js"

async function handleVisitedCountryDisplay(req,res)  {
    let countries = [];
    const result = await db.query("SELECT country_code FROM visted_countries");
    result.rows.forEach((country) => {
        countries.push(country.country_code);
    });
    const count = countries.length;

    return res.render("index.ejs",{
        countries: countries,
        total: count
    });
}

async function handleNewCountryAdd(req,res){
    const countryInput = req.body["country"];
    const codeArr = await db.query(`
    SELECT country_code
    FROM countries
    where country_name = $1
    `, [`${countryInput}`])
    codeArr.rows.forEach(async (codeObj) => {
        const code = codeObj.country_code;
        await db.query(`
        INSERT INTO visted_countries (country_code)
        VALUES ($1)
        `, [`${code}`])
    })
    return res.redirect("/")
}

export {
    handleVisitedCountryDisplay,
    handleNewCountryAdd
}