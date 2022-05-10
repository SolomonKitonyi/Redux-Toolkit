const { bindActionCreators } = require("@reduxjs/toolkit");
const { cakeActions } = require("../cake/cakeSlice");

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
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numberOfIceCreams--;
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered,state => {
            state.numberOfIceCreams--;
        })
    }
});
module.exports = iceCreamSlice.reducer;
module.exports.icecreamActions = iceCreamSlice.actions;