interface IItem {
    id: string
    description: string
    images: [{ url: string }[]]
    name: string
}
export interface IHomeData {
    name: string
    id: string
    contents: {
        items: IItem[]
    }
}
