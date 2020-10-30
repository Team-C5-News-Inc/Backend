const newsMock = [
  {
    _id: '5f96cf7a4d16f902438ee1c0',
    title: 'Por tiempo se hundiría proyecto de reforma Constitucional para acabar ...',
    subtitle: ' Por falta de tiempo para lograr su trámite legislativo que obliga a t...',
    images: ['ArrayImages1'],
    body: ['ArrayBody1'],
    tags: ['ArrayTgas1', 'Einstein'],
    author: 'Colprensa, Bogotá',
    host: 'https://www.vanguardia.com',
    news_url: 'https://www.vanguardia.com/politica/por-tiempo-se-hundiria-proyecto-de...',
    publication_date: '2020-10-19',
    category: 'Deportes',
  },
  {
    _id: '5f96cf7a4456f902438ee1c0',
    title: 'Crisis de los misiles en Cuba  ',
    subtitle: 'Crisis de los misiles en Cuba Crisis de los misiles en Cuba Crisis de los misiles en Cuba ',
    images: ['ArrayImages2'],
    body: ['ArrayBody2'],
    tags: ['ArrayTgas2'],
    author: 'Alguien',
    host: 'https://www.vanguardia.com',
    news_url: 'https://www.vanguardia.com/politica/por-tiempo-se-hundiria-proyecto-de...',
    publication_date: '2020-10-19',
    category: 'Economia',
  },
  {
    _id: '5f96cf7a4d16f902098ee1c0',
    title: 'Anonymous',
    subtitle: ' AnonymousAnonymousAnonymousAnonymousAnonymous',
    images: ['ArrayImages3'],
    body: ['ArrayBody3'],
    tags: ['ArrayTgas3'],
    author: 'Colprensa, Bogotá',
    host: 'https://www.vanguardia.com',
    news_url: 'https://www.vanguardia.com/politica/por-tiempo-se-hundiria-proyecto-de...',
    publication_date: '2020-10-19',
    category: 'Política',
    
  }
]

function filteredByTagsMock (tags) {
  return newsMock.filter(news => news.tags.includes(tags))
}
function filteredByCategoryMock (category) {
  return newsMock.filter(news => news.category === category)
}
function filterById (_id) {
  return newsMock[0]
}

class NewsServiceMock {
  async getNews ({ tags, category, page = 1 }) {
    let response
    if (tags) {
      response = await filteredByTagsMock('Einstein')
    } else if (category) {
      response = await filteredByCategoryMock('Política')
    } else {
      response = await newsMock
    }
    return response
  }

  async getOne (_id) {
    return filterById(_id)
  }
}

module.exports = {
  newsMock,
  filteredByTagsMock,
  filteredByCategoryMock,
  NewsServiceMock,
}

