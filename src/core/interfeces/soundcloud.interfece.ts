export interface ISelection {
    id: string
    type:'selection'
    title: string
    description: string
    items: (IPlaylist | IStation | IUser)[]
}

export interface IPlaylistSlice extends IPlaylist {
    currentTrackIndex: number
    tracks: ITrack[]
    isPlaying: boolean
}

export interface IPlaylist {
    type: 'playlist'
    id: number
    likesCount: number
    title: string
    description: string
    createdAt: string
    artworkUrl: string
    durationText: string
    user: IUser
}

export interface IStation {
    type: 'station'
    id: string
    likesCount: number
    title: string
    description: string
    createdAt: string
    artworkUrl: string
    durationText: string
    user: IUser
}

export interface IUser {
    type: 'user'
    followerCount: number
    avatarUrl: string
    id: number
    name: string
}

export interface ITrack {
    type: 'track'
    id: number
    title: string
    caption: string
    createdAt: string
    artworkUrl: string
    description: string | null
    durationMs: number
    publisher: IPublisher
    audio?: string
}
export interface IPublisher {
    albumTitle: string | null
    artist: string
    writerComposer: string
    upcOrEan: string
    isrc: number
}
