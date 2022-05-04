const { bindActionCreators } = require("@reduxjs/toolkit");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
    numberOfIceCreams: 20,
}

const iceCreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers: {
        ordered: state => {
            state.numberOfIceCreams--;
        },
        restocked: (state, action) => {
            state.numberOfIceCreams += action.payload;
        }
    },
});
module.exports = iceCreamSlice.reducer;
module.exports.icecreamActions = iceCreamSlice.actions;