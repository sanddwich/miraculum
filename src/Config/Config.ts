import ConfigInterface from '../Redux/interfaces/AdditionalInterfaces/ConfigInterface'

export const Config: ConfigInterface = {
  // url: 'http://localhost:3000',
  url: 'https://miraculum-rg.ru',
  deeSite: 'https://deedesign.ru',
  nameMinLength: 2,
  phoneMinLength: 11,
  mailSettings: {
    apiPath: '/api/index.php',
    senderMail: 'miraculum@ak30.ru',
    senderMailInfo: 'Miraculum Info',
    senderMailServer: 'ssl://mail.hostland.ru',
    userName: '',
    userPhone: '',
    // recipientMail: 'bck-dkiselev@yandex.ru',
    // recipientMail: 'info@miraculum-rg.ru',
    recipientMail: 'miraculum.rg@mail.ru',
  },
  socialLinks: [
    { url: 'https://vk.com/miraculum_research_group', socialLinkType: 'VK' },
    { url: 'https://t.me/o_kormushin', socialLinkType: 'TELEGRAM' },
    { url: 'https://www.instagram.com/miraculum.rg/', socialLinkType: 'INSTA' },
  ],
  letters: [
    '/img/61.jpg',
    '/img/62.jpg',
    '/img/63.jpg',
    '/img/64.jpg',
    '/img/65.jpg',
    '/img/66.jpg',
    '/img/67.jpg',
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
          text: 'Получение информации, позволяющей определить осведомленность и отношение представителей целевой аудитории к строительным компаниям и их проектам в сфере жилищного строительства Астрахани.',
        },
        {
          icon: '/icons/10_case1_item4.svg',
          title: 'Метод сбора данных',
          text: 'Телефонный опрос по стационарным и мобильным номерам со случайной автоматизированной генерацией телефонных номеров по префиксам Астраханской области.',
        },
        {
          icon: '/icons/10_case1_item2.svg',
          title: '30 рабочих дней',
        },
        {
          icon: '/icons/10_case1_item3.svg',
          title: 'г.Астрахань',
        },
        {
          icon: '/icons/10_case1_task1_item1.svg',
          title: 'Результат',
          text: 'По результатам исследования сделан вывод о здоровье бренда строительной компании, предложены оптимальные сценарии взаимодействия с целевой аудиторией, рассмотрены  наиболее эффективные каналы рекламы, внесены дополнения в маркетинговую стратегию строительной компании.',
        },
        {
          icon: '/icons/10_case1_task1_item2.svg',
          title: 'Целевая аудитория',
          text: 'Респонденты, планирующие приобретать квартиру в ближайшие 2 года (потенциальные покупатели), или купившие квартиру за последние 2 года (реальные покупатели).',
        },
        {
          icon: '/icons/10_case1_task1_item3.svg',
          title: 'Формат отчета',
          text: 'Аналитический отчет, презентация.',
        },
      ],
      tasks: [
        '1. Измерить узнаваемость строительных компаний Астрахани (рейтинг top-of-mind, спонтанная узнаваемость, наведенная узнаваемость) среди потенциальных и реальных покупателей.',
        '2. Оценить степень доверия потенциальных и реальных покупателей к строительным компаниям Астрахани.',
        '3. Проанализировать причины, оказавшие влияние на принятие решения о покупке среди реальных покупателей на рынке жилищного строительства Астрахани.',
        '4. Выявить потребительские предпочтения потенциальных покупателей на рынке жилищного строительства Астрахани.',
        '5. Определить основные для покупателей источники информации о проектах на рынке жилищного строительства Астрахани.',
      ],
    },
    {
      name: 'Связь / телеком',
      icon: '/icons/10_case2.svg',
      isActive: false,
      caseItems: [
        {
          icon: '/icons/10_case1_item1.svg',
          title: 'Цель исследования',
          text: 'Получение информации, позволяющей определить осведомленность и отношение (в т.ч. лояльность) к телекоммуникационной компании жителей Астрахани.',
        },
        {
          icon: '/icons/10_case1_item4.svg',
          title: 'Метод сбора данных',
          text: 'Телефонный опрос по стационарным и мобильным номерам со случайной автоматизированной генерацией телефонных номеров по префиксам Астраханской области.',
        },
        {
          icon: '/icons/10_case1_item2.svg',
          title: '30 рабочих дней',
        },
        {
          icon: '/icons/10_case1_item3.svg',
          title: 'г.Астрахань',
        },
        {
          icon: '/icons/10_case1_task1_item1.svg',
          title: 'Результат',
          text: 'По результатам исследования сделан вывод о здоровье бренда телекоммуникационной компании, рассчитан индекс потребительской лояльности, определена конкурентная среда компании.',
        },
        {
          icon: '/icons/10_case1_task1_item2.svg',
          title: 'Целевая аудитория',
          text: 'Физические лица, проживающие в Астрахани и пользующиеся услугами телекоммуникационных компаний.',
        },
        {
          icon: '/icons/10_case1_task1_item3.svg',
          title: 'Формат отчета',
          text: 'Аналитический отчет, презентация.',
        },
      ],
      tasks: [
        '1. Измерить узнаваемость телекоммуникационной компании (спонтанная узнаваемость, наведенная узнаваемость) среди целевой аудитории.',
        '2. Составить рейтинг top-of-mind среди телекоммуникационных компаний Астрахани.',
        '3. Определить круг основных конкурентов телекоммуникационной компании в Астрахани.',
        '4. Оценить степень доверия жителей Астрахани к телекоммуникационной компании и компаниям – конкурентам.',
        '5. Оценить потребительскую лояльность к телекоммуникационным компаниям Астрахани.',
        '6. Определить соответствие телекоммуникационной компании определённым образам (имидж бренда).',
        '7. Оценить восприятие жителей Астрахани мероприятий, проводимых телекоммуникационной компанией в городе.',
      ],
    },
    {
      name: 'Частная медицина',
      icon: '/icons/10_case3.svg',
      isActive: false,
      caseItems: [
        {
          icon: '/icons/10_case1_item1.svg',
          title: 'Цель исследования',
          text: 'Получение информации, позволяющей определить барьеры и потенциалы для разработки маркетинговой стратегии компании – разработчика программного обеспечения для автоматизации деятельности в частных медицинских учреждениях.',
        },
        {
          icon: '/icons/10_case1_item4.svg',
          title: 'Метод сбора данных',
          text: 'Экспертный опрос.',
        },
        {
          icon: '/icons/10_case1_item2.svg',
          title: '30 рабочих дней',
        },
        {
          icon: '/icons/10_case1_item3.svg',
          title: 'Москва, Санкт – Петербург, Краснодар, Самара',
        },
        {
          icon: '/icons/10_case1_task1_item1.svg',
          title: 'Результат',
          text: 'По результатам исследования найдены потенциалы для выстраивания партнерских отношений разработчиков с представителями частных медицинских учреждений, внесены улучшения и дополнения в функционал программного обеспечения, определены основные направления маркетинговой стратегии.',
        },
        {
          icon: '/icons/10_case1_task1_item2.svg',
          title: 'Целевая аудитория',
          text: 'Руководители и лица, принимающие решения в частных медицинских учреждениях России.',
        },
        {
          icon: '/icons/10_case1_task1_item3.svg',
          title: 'Формат отчета',
          text: 'Аналитический отчет, презентация.',
        },
      ],
      tasks: [
        '1. Изучение потребностей и запросов сотрудников частных медицинских учреждений в процессе автоматизации деятельности.',
        '2. Анализ мнений сотрудников частных медицинских учреждений относительно эффективных схем и форматов взаимодействия (коммерческих, некоммерческих) с разработчиками систем автоматизации деятельности.',
        '3. Исследование барьеров, потенциально препятствующих использованию систем автоматизации решений в частных медицинских учреждениях.',
      ],
    },
    {
      name: 'HoReCa',
      icon: '/icons/10_case4.svg',
      isActive: false,
      caseItems: [
        {
          icon: '/icons/10_case1_item1.svg',
          title: 'Цель исследования',
          text: 'Получение информации, позволяющей оценить опыт посещения и удовлетворенность от визита гостей заведения, а также проанализировать соответствие работы сотрудников стандартам качества обслуживания заведения.',
        },
        {
          icon: '/icons/10_case1_item4.svg',
          title: 'Метод сбора данных',
          text: 'Customer journey map («Путь клиента»).',
        },
        {
          icon: '/icons/10_case1_item2.svg',
          title: '15 рабочих дней',
        },
        {
          icon: '/icons/10_case1_item3.svg',
          title: 'Астрахань',
        },
        {
          icon: '/icons/10_case1_task1_item1.svg',
          title: 'Результат',
          text: 'По результатам исследования сделаны выводы о барьерах и драйверах на всех этапах взаимодействия посетителя с заведением (онлайн и офлайн), найдены разрывы в коммуникации сотрудников заведения с посетителями, определены направления для совершенствования концепции заведения.',
        },
        {
          icon: '/icons/10_case1_task1_item2.svg',
          title: 'Целевая аудитория',
          text: 'Посетили заведений общественного питания определенного сегмента, условно разделенные на группы: По доходу, Частоте посещения заведений, Семейному положению.',
        },
        {
          icon: '/icons/10_case1_task1_item3.svg',
          title: 'Формат отчета',
          text: 'Аналитический отчет, презентация, аудиозаписи визитов.',
        },
      ],
      tasks: [
        '1. Анализ опыта посетителей на разных уровнях взаимодействия с заведением (выбор заведения для посещения, посещение страниц заведения в социальных сетях, телефонный звонок, визит в заведение).',
        '2. Определение степени удовлетворенности гостей посещением заведения.',
        '3. Поиск разрывов в коммуникации сотрудников заведения с посетителями из разных целевых аудиторий.',
        '4. Изучение впечатлений посетителей заведения после визита.',
      ],
    },
    {
      name: 'Электоральные исследования',
      icon: '/icons/10_case5.svg',
      isActive: false,
      caseItems: [
        {
          icon: '/icons/10_case1_item1.svg',
          title: 'Цель исследования',
          text: 'Получение информации, позволяющей оценить субъективное восприятие жителями социально – политической ситуации в регионе и определить электоральную ситуацию перед стартом избирательной кампании.',
        },
        {
          icon: '/icons/10_case1_item4.svg',
          title: 'Метод сбора данных',
          text: 'Комбинирование методов (личное формализованное интервью и серия фокус-групп).',
        },
        {
          icon: '/icons/10_case1_item2.svg',
          title: '30 рабочих дней',
        },
        {
          icon: '/icons/10_case1_item3.svg',
          title: 'Субъект РФ',
        },
        {
          icon: '/icons/10_case1_task1_item1.svg',
          title: 'Результат',
          text: 'По результатам исследования определены актуальная электоральная ситуация и точечное проблемное поле в регионе, уточнена стратегия избирательной кампании, найдены дополнительные темы для работы с избирателями.',
        },
        {
          icon: '/icons/10_case1_task1_item2.svg',
          title: 'Целевая аудитория',
          text: 'Население субъекта РФ старше 18 лет.',
        },
        {
          icon: '/icons/10_case1_task1_item3.svg',
          title: 'Формат отчета',
          text: 'Аналитический отчет, презентация.',
        },
      ],
      tasks: [
        '1. Изучение оценок респондентов динамики ситуации в стране, регионе, городе / районе.',
        '2. Исследование проблемного поля и точечных проблем в социальной сфере, а также фактов и ситуаций, оказывающих влияние на динамику проблемного поля.',
        '3. Анализ отношения и доверия респондентов к власти: региональной, городской / районной.',
        '4. Определение рейтинга и антирейтинга политических партий.',
        '5. Анализ узнаваемости потенциальных кандидатов в депутаты органов законодательной (представительной) власти региона.',
        '6. Определение рейтинга и антирейтинга потенциальных кандидатов в депутаты органов законодательной (представительной) власти региона.',
        '7. Выявление местных лидеров общественного мнения.',
        '8. Определение образа идеального политика, депутата.',
      ],
    },    
  ],
}
