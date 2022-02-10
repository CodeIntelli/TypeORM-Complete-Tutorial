module.exports = {
    // configuration code for databse
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "Typeorm_CRUD",
    "logging": true,
    "synchronize": true,
    "entities": [
        "src/entity/*.js"
    ]
}