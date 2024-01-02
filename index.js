const store = require('./redux-toolkit/app/store');
const vidoeThunk = require('./redux-toolkit/features/video/videoThunk');
const relatedVideo = require('./redux-toolkit/features/relatedVideo/relatedVideoThunk')

store.subscribe(() =>
    store.getState()
)

// store.dispatch(vidoeThunk())

store.dispatch(relatedVideo({ tag_one: 'javascript', tag_two: 'react' }))