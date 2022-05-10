const configureStore = require("@reduxjs/toolkit").configureStore;

// const reducerLogger = require("redux-logger");

// const logger = reducerLogger.createLogger();

const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/iceCreamSlice")

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), 
});

module.exports = store;