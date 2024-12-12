import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const users = { usersList: [] }
//We will can api and store that data in userList.
export const apiUsers = createAsyncThunk("apiUsers", async () => { //Name will always createAsyncThunk
    const usersData = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            console.log("Api called");
            return json
        })
    return usersData
})

const Sclice = createSlice({
    name: "usersList",
    initialState: users,
    reducers: {
        //we will wirte the function for the action what we need.
        getUsers: (state: any, action: any) => {

            return users //How can we retuen the users.
        },
        addUser: (state: any, action: { payload: { user: any } }) => {
            const user = {
                id: nanoid(),
                name: action.payload.user.name,
                age: action.payload.user.age,

            }
            state.usersList.push(user)
        }
    },
    extraReducers: (builder) => { //Name is always extraReducers and also builder, we can not make another name for both.
        builder.addCase(apiUsers.fulfilled, (state: any, action: any) => {
            state.isloading = false,
                state.usersList = action.payload
        })
    }
})
export const { addUser } = Sclice.actions;
export default Sclice.reducer;