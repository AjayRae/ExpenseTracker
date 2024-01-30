const {MongoClient} = require('mongodb')

let db
function connectToDb(startServer) {
    MongoClient.connect('mongodb+srv://ajayrayan:9585230579@cluster0.s4cnnan.mongodb.net/newdb?retryWrites=true&w=majority').then(function(client) {
        db = client.db()
        return startServer()
    }).catch(function(error) {
        return startServer(error)
    })
}

function getDb() {
    return db
}

module.exports = {connectToDb, getDb}