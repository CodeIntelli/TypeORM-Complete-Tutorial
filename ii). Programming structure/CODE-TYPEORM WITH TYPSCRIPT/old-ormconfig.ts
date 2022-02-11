module.exports = {
    "type": "mysql",
    "host": "127.0.0.1",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "Typeorm_CRUD",
    "logging": false,
    "synchronize": true,
    "entities": [
        "src/entity/*.js"
    ]
}