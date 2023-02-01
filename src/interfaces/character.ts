export interface Character {
  id: number
  name: string
  description: string
  image: string
  comicsUrl: string
  comicsCount: number
}

export interface CharacterApi {
  id: number
  name: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
  comics: {
    available: number
  }
  urls: [
    {
      type: string
      url: string
    }
  ]
}
