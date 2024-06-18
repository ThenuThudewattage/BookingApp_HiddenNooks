import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs_iQNjQgYf_ByHLS8S4LwhiIE23WURey2sw&s',
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
