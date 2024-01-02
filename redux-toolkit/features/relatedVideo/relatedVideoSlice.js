const { createSlice } = require('@reduxjs/toolkit');
const initialState = require('./relatedInitialState');
const relatedVideos = require('./relatedVideoThunk');

const relatedVideoSlice = createSlice({
    name: 'relatedVideo',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(relatedVideos.pending, (state, action) => {
            state.loading = true,
                state.error = ''
        }),

            builder.addCase(relatedVideos.fulfilled, (state, action) => {
                state.loading = false,
                    state.error = '',
                    state.videos = action.payload
            }),

            builder.addCase(relatedVideos.error, (state, action) => {
                state.loading = false,
                    state.error = action.error.message,
                    state.videos = []
            })
    }
});

module.exports = relatedVideoSlice;