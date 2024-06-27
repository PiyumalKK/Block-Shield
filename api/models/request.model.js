import mongoose from "mongoose";

const requestSchema = mongoose.Schema({

    userId: {
        type: String,
        required: true,
    },

    GitHubRepositoryLink: {
        type: String,
        required: true,
        unique: true,
    },

    Documentation: {
        type: String,
        default: null,
    },

    scdi: {
        type: String,
        default: null,
    },

    file:{
        type: String,
        default: null,
    },

    ate: {
        type: String,
        default: null,
    },

    psar: {
        type: String,
        default: null,
    },

    ratm: {
        type: String,
        default: null,
    },

    pd: {
        type: String,
        default: null,
    },

    em: {
        type:String,
        required:true,
        unique:true,
        
    },

    su: {
type: String,
default: null,
    },

    tu: {
        type: String,
        default: null,
    },

    Aom: {
        type: String,
        default: null,
    },
    slug:{
        type: String,
        required: true,
        unique: true,
    },
},{timestamps:true});

const Request = mongoose.model('request',requestSchema);

export default Request;