import { createSlice } from '@reduxjs/toolkit';
import { IPlaylist } from 'core/interfeces/spotyfy.interfece';

const playlistSlice = createSlice({
  name: 'playList',
  initialState: {

  } as IPlaylist,
  reducers: {
    setPlaylist(state, action) {
      state.description = action.payload.playList.description;
      state.id = action.payload.playList.id;
      state.images = action.payload.playList.images;
      state.name = action.payload.playList.name;
      state.primary_color = action.payload.playList.primary_color;
      state.tracks = action.payload.playList.tracks;
      state.current_track_index = action.payload.count;
    },
    setCurrentTrackIndex(state, action) {
      state.current_track_index = action.payload.count;
    },
  },
});

export const {setPlaylist, setCurrentTrackIndex} = playlistSlice.actions;
export default playlistSlice.reducer;