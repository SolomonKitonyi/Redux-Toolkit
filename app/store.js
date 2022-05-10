const configureStore = require("@reduxjs/toolkit").configureStore;

// const reducerLogger = require("redux-logger");

// const logger = reducerLogger.createLogger();

const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/iceCreamSlice");
const userReducer = require("../features/user/userSlice");

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), 
});

module.exports = store;