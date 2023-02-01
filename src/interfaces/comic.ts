export interface Comic {
  id: number
  characterId: number
  title: string
  issueNumber: number
  description: string
  url: string
  onSaleDate: string
  image: string
}

export interface ComicApi {
  id: number
  title: string
  issueNumber: number
  description: string
  urls: [
    {
      type: string
      url: string
    }
  ]
  dates: [
    {
      type: string
      date: string
    }
  ]
  thumbnail: {
    path: string
    extension: string
  }
}
