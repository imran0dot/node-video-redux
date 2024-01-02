const { createSlice } = require('@reduxjs/toolkit');
const initialState = require('./videoInitialState');
const vidoeThunk = require('./videoThunk');

const videoSlice = createSlice({
    name: "video",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(vidoeThunk.pending, (state, action) => {
            state.loading = true,
                state.error = ''
        }),

            builder.addCase(vidoeThunk.fulfilled, (state, action) => {
                state.loading = false,
                    state.error = '',
                    state.video = action.payload
            }),

            builder.addCase(vidoeThunk.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.error.message,
                    state.video = {}
            })
    }
})

module.exports = videoSlice.reducer;