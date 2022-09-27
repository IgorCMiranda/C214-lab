const mongoose = require('mongoose');

const uri = `mongodb+srv://admin:admin@cluster0.eh4fipn.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const UserSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    nome: {
        type: String,
        unique: true,
    },
    produtora: String,
    atorprincipal: String,
    ano: String,
});

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = {
    UserModel,
};