const { createAsyncThunk } = require('@reduxjs/toolkit');
const { default: axios } = require('axios');

const relatedVideos = createAsyncThunk('relatedvideos/fetchrelatedVideos', async ({ tag_one, tag_two }) => {
    const relatedVideoResponce = await axios(`http://localhost:9000/videos?tags_like=${tag_one}&tags_like=${tag_two}`);
    const videos = await relatedVideoResponce.data;
    return videos;
});

module.exports = relatedVideos;