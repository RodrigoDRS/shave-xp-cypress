const { Pool } = require('pg')

const dbConfig = {
    host: 'motty.db.elephantsql.com',
    user: 'evdscstf',
    password: 'JIfYBlzNMd1RelycrFDLv7dpuHCqb8pX',
    database: 'evdscstf',
    port: 5432
}

module.exports = {
    removeUser(email) {
        return new Promise(function (resolve) {
            const pool = new Pool(dbConfig)

            pool.query('DELETE FROM users WHERE email = $1', [email], function (error, result) {
                if (error) {
                    throw error
                }
                resolve({ sucess: result })
            })

        })
    }
}