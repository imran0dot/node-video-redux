const store = require('./redux-toolkit/app/store');
const vidoeThunk = require('./redux-toolkit/features/video/videoThunk');

store.subscribe(() =>
    store.getState()
)

store.dispatch(vidoeThunk())