const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://amolnipane123:slWXHsWBcpyBZYPb@cluster0.u4sdn3k.mongodb.net/quiz?retryWrites=true&w=majority&appName=Cluster0'

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log('connected to mongo Successfully')
    })
}

module.exports = connectToMongo;