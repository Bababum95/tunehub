export interface IItem {
    id: string
    description: string
    artworkUrl: string
    title: string
}
export interface IHomeData {
    title: string
    id: string
    items: IItem[]
}
export interface IPlaylistst {
    description: string
    name: string
    id: string
    images: {url: string}[]
    primary_color: string
}