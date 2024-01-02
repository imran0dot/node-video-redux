const { createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

const vidoeThunk = createAsyncThunk('video/fetchVideo', async () => {
    const responce = await axios('http://localhost:9000/videos');
    const video = await responce.data;
    return video;
});

module.exports = vidoeThunk;