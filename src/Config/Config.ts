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
  cases: [
    {
      name: 'Строительство / Девелопмент',
      icon: '/icons/10_case1.svg',
      isActive: true,
      caseItems: [
        {
          icon: '/icons/10_case1_item1.svg',
          title: 'Цель исследования',
          text: 'Получение информации, позволяющей определить осведомленность и отношение представителей целевой аудитории к строительным компаниям и их проектам в сфере жилищного строительства Астрахани. ',
        },
        {
          icon: '/icons/10_case1_item2.svg',
          title: '30 рабочих дней',
        },
        {
          icon: '/icons/10_case1_item3.svg',
          title: 'г. Астрахань',
        },
      ],
      tasks: [
        {
          name: 'Здоровье бренда',
          isActive: true,
          taskItems: [
            {
              title: 'Результат',
              icon: '/icons/10_case1_task1_item1.svg',
              text: 'По результатам исследования сделан вывод о здоровье бренда строительной компании, предложены оптимальные сценарии взаимодействия с целевой аудиторией,  рассмотрены  наиболее эффективные каналы рекламы, внесены дополнения в маркетинговую стратегию строительной компании. ',
            },
            {
              title: 'Целевая аудитория',
              icon: '/icons/10_case1_task1_item2.svg',
              text: 'Респонденты, планирующие приобретать квартиру в ближайшие 2 года, или купившие квартиру за последние 2 года.',
            },
            {
              title: 'Формат отчета',
              icon: '/icons/10_case1_task1_item3.svg',
              text: 'Аналитический отчет, презентация.',
            },
          ],
        },
      ],
    },
    {
      name: 'Тестовый кейс',
      icon: '/icons/10_case1.svg',
      isActive: false,
      caseItems: [
        {
          icon: '/icons/10_case1_item1.svg',
          title: 'Цель исследования',
          text: 'Тестовый кейс ЦЕЛИ',
        },
        {
          icon: '/icons/10_case1_item2.svg',
          title: 'Тестовый кейс ВРЕМЯ',
        },
        {
          icon: '/icons/10_case1_item3.svg',
          title: 'Тестовый кейс ГОРОД',
        },
      ],
      tasks: [
        {
          name: 'Тестовый кейс Здоровье бренда',
          isActive: true,
          taskItems: [
            {
              title: 'Тестовый кейс Результат',
              icon: '/icons/10_case1_task1_item1.svg',
              text: 'Тестовый кейс По результатам исследования сделан вывод о здоровье бренда строительной компании, предложены оптимальные сценарии взаимодействия с целевой аудиторией,  рассмотрены  наиболее эффективные каналы рекламы, внесены дополнения в маркетинговую стратегию строительной компании. ',
            },
            {
              title: 'Тестовый кейс Целевая аудитория',
              icon: '/icons/10_case1_task1_item2.svg',
              text: 'Тестовый кейс Респонденты, планирующие приобретать квартиру в ближайшие 2 года, или купившие квартиру за последние 2 года.',
            },
            {
              title: 'Тестовый кейс Формат отчета',
              icon: '/icons/10_case1_task1_item3.svg',
              text: 'Тестовый кейс Аналитический отчет, презентация.',
            },
          ],
        },
      ],
    },
  ],
}
