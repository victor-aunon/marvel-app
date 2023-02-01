import type { ComicApi } from '../../interfaces'

interface ComicsApiResponse {
  data: {
    results: ComicApi[]
    total: number
  }
}

export const mockComicsApiResponse1: ComicsApiResponse = {
  data: {
    total: 1,
    results: [
      {
        id: 1,
        issueNumber: 11,
        title: 'The advertures of Taylor Test',
        description: 'The advertures of Taylor Test volume 11',
        thumbnail: {
          path: 'https://picsum.photos/id/111/200/200',
          extension: 'jpg',
        },
        urls: [
          {
            type: 'detail',
            url: 'https://google.com',
          },
        ],
        dates: [
          {
            type: 'onsaleDate',
            date: new Date('1990-04-13').toISOString(),
          },
        ],
      },
    ],
  },
}

export const mockComicsApiResponse2: ComicsApiResponse = {
  data: {
    total: 1,
    results: [
      {
        id: 2,
        issueNumber: 22,
        title: 'The adventures of Tracy Test',
        description: 'The adventures of Tracy Test volume 22',
        thumbnail: {
          path: 'https://picsum.photos/id/222/200/200',
          extension: 'jpg',
        },
        urls: [
          {
            type: 'detail',
            url: 'https://google.com',
          },
        ],
        dates: [
          {
            type: 'onsaleDate',
            date: new Date('2000-01-31').toISOString(),
          },
        ],
      },
    ],
  },
}
