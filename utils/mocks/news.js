const newsMock = [
  {
    _id: '5f96cf7a4d16f902438ee1c0',
    title: 'Por tiempo se hundiría proyecto de reforma Constitucional para acabar ...',
    subtitle: ' Por falta de tiempo para lograr su trámite legislativo que obliga a t...',
    body: ['ArrayBody1'],
    images: ['ArrayImages1'],
    category: 'Deportes',
    tags: ['ArrayTgas1', 'Einstein'],
    author: 'Colprensa, Bogotá',
    publication_date: '2020-10-19',
    news_url: 'https://www.vanguardia.com/politica/por-tiempo-se-hundiria-proyecto-de...',
    host: 'https://www.vanguardia.com'
  },
  {
    _id: '5f96cf7a4456f902438ee1c0',
    title: 'Crisis de los misiles en Cuba  ',
    subtitle: 'Crisis de los misiles en Cuba Crisis de los misiles en Cuba Crisis de los misiles en Cuba ',
    body: ['ArrayBody2'],
    images: ['ArrayImages2'],
    category: 'Economia',
    tags: ['ArrayTgas2'],
    author: 'Alguien',
    publication_date: '2020-10-19',
    news_url: 'https://www.vanguardia.com/politica/por-tiempo-se-hundiria-proyecto-de...',
    host: 'https://www.vanguardia.com'
  },
  {
    _id: '5f96cf7a4d16f902098ee1c0',
    title: 'Anonymous',
    subtitle: ' AnonymousAnonymousAnonymousAnonymousAnonymous',
    body: ['ArrayBody3'],
    images: ['ArrayImages3'],
    category: 'Política',
    tags: ['ArrayTgas3'],
    author: 'Colprensa, Bogotá',
    publication_date: '2020-10-19',
    news_url: 'https://www.vanguardia.com/politica/por-tiempo-se-hundiria-proyecto-de...',
    host: 'https://www.vanguardia.com'

  }
]

function filteredByTagsMock (tags) {
  return newsMock.filter(news => news.tags.includes(tags))
}
function filteredByCategoryMock (category) {
  return newsMock.filter(news => news.category === category)

}

module.exports = {
  newsMock,
  filteredByTagsMock,
  filteredByCategoryMock
}
