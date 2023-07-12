import { createSlice } from '@reduxjs/toolkit';
import { IPlaylistSlice } from 'core/interfeces/soundcloud.interfece';

const playlistSlice = createSlice({
  name: 'playList',
  initialState: {
    isPlaying: false,
  } as IPlaylistSlice,
  reducers: {
    setPlaylist(state, action) {
      state.description = action.payload.playListData.description;
      state.id = action.payload.playListData.id;
      state.artworkUrl = action.payload.playListData.artworkUrl;
      state.likesCount = action.payload.playListData.likesCount;
      state.durationText = action.payload.playListData.durationText;
      state.title = action.payload.playListData.title;
      state.tracks = action.payload.playList;
      state.currentTrackIndex = action.payload.count;
    },
    addAudio(state, action) {
      state.tracks[state.currentTrackIndex].audio = action.payload.audio;
    },
    setIsPlaying(state, action) {
      state.isPlaying = action.payload;
    },
    nextTrack(state) {
      if (state.currentTrackIndex >= state.tracks.length - 1) {
        state.currentTrackIndex = 0;
      } else {
        state.currentTrackIndex++;
      }
    },
    previousTrack(state) {
      if (state.currentTrackIndex >= 0) {
        state.currentTrackIndex = state.tracks.length - 1;
      } else {
        state.currentTrackIndex--;
      }
    },
  },
});

export const { setPlaylist, addAudio, previousTrack, nextTrack, setIsPlaying } = playlistSlice.actions;
export default playlistSlice.reducer;