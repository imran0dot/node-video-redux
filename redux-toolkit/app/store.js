const { configureStore } = require('@reduxjs/toolkit');
const { createLogger } = require('redux-logger')
const videoSlice = require('../features/video/videosSlice');
const logger = createLogger();

const store = configureStore({
    reducer: {
        video: videoSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

module.exports = store;