import ConfigInterface from '../Redux/interfaces/AdditionalInterfaces/ConfigInterface'

export const Config: ConfigInterface = {
  url: 'http://localhost:3000/',
  deeSite: 'https://deedesign.ru',
  socialLinks: [
    { url: 'https://vk.com', socialLinkType: 'VK' },
    { url: 'https://www.instagram.com/', socialLinkType: 'INSTA' },
  ],
  letters: [
    '/img/61.jpg',
    '/img/61.jpg',
    '/img/61.jpg',
    '/img/61.jpg',
    '/img/61.jpg',
    '/img/61.jpg',
    '/img/61.jpg',
    '/img/61.jpg',
    '/img/61.jpg',
  ],
  partners: [
    { name: 'ПРОГРЕСС ДЕВЕЛОПЕРСКАЯ КОМПАНИЯ', img: '/img/71.png' },
    { name: 'Реал', img: '/img/72.png' },
    { name: 'АМ-HOUSE', img: '/img/73.png' },
    { name: 'ГБУ АО «Центр стратегического анализа и управления проектами»', img: '/img/74.png' },
    { name: 'Мой Бизнес', img: '/img/75.png' },
    { name: 'ВЦИОМ', img: '/img/76.png' },
    { name: 'СТРОЙЛАНДИЯ', img: '/img/77.png' },
    { name: 'ФОМ', img: '/img/78.png' },
  ],
}
