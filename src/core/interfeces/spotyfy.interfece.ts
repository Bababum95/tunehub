interface IImage {
    height: number
    width: number
    url: string
}
export interface IArtist {
    id: string
    name: string
}
export interface IAlbum {
    artists: IArtist[]
    release_date: string
    name: string
    id: string
    images: IImage[]
}
export interface ITrack {
    artists: IArtist[]
    id: string
    name: string
    album: IAlbum
    duration_ms: number
    track_number: number
}
export interface IPlaylist {
    description: string
    current_track_index: number
    name: string
    id: string
    images: IImage[]
    primary_color: string
    tracks: {
        items: {track: ITrack}[]
    }
}