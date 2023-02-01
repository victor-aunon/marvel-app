import type { CharacterApi } from '../../interfaces'

interface CharactersApiResponse {
  data: {
    results: CharacterApi[]
    total: number
  }
}

export const mockCharactersApiResponse: CharactersApiResponse = {
  data: {
    total: 2,
    results: [
      {
        id: 1,
        name: 'Taylor Test',
        description: 'Taylor Test is a villain',
        thumbnail: {
          path: 'https://picsum.photos/id/111/200/200',
          extension: 'jpg',
        },
        urls: [
          {
            type: 'comiclink',
            url: 'https://taylortest.com',
          },
        ],
        comics: { available: 5 },
      },
      {
        id: 2,
        name: 'Tracy Test',
        description: 'Tracy Test is a heroine',
        thumbnail: {
          path: 'https://picsum.photos/id/222/200/200',
          extension: 'jpg',
        },
        urls: [
          {
            type: 'comiclink',
            url: 'https://tracytest.com',
          },
        ],
        comics: { available: 10 },
      },
    ],
  },
}
