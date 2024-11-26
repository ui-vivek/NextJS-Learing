import mongoose from "mongoose";

const UsersListModel = new mongoose.Schema({
    Name:String,
    id:Number,
    Email:String,
    userId:Number
})

export const UsersList = mongoose.models.usersLists || mongoose.model("usersLists",UsersListModel)