import solo from '../../asets/songs/blanka_-_solo_evrovidenie.mp3';
import tattooSweden from '../../asets/songs/loreen_-_tattoo_sweden.mp3';
import image from '../../asets/images/cover.jpg';
import { ISong } from '../interfeces/song.interfece';
export const tracks:ISong[] = [
  {
    title: 'Solo',
    src: solo,
    author: 'Blanka',
    thumbnail: image,
  },
  {
    title: 'tattoo sweden',
    src: tattooSweden,
    author: 'Loreen',
    thumbnail: image,
  },
];