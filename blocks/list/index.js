import Handlebars from 'handlebars';

const items = [
  {
    id: 'footer-lists',
    items: [
      {
        heading: 'Возможности',
        id: 'possibilities',
        items: [
          {
            name: 'Движение денежных средств',
            href: '#',
          },
          {
            name: 'Прибыль и убытки',
            href: '#',
          },
          {
            name: 'Баланс',
            href: '#',
          },
          {
            name: 'Учет обязательств',
            href: '#',
          },
          {
            name: 'Анализ расходов',
            href: '#',
          },
          {
            name: 'Бюджетирование',
            href: '#',
          },
          {
            name: 'Согласование платежей',
            href: '#',
          },
          {
            name: 'Учет товаров и запасов',
            href: '#',
          },
          {
            name: 'Робот-помощник и AI',
            href: '#',
          },
          {
            name: 'Интеграции',
            href: '#',
          },
        ],
      },
      {
        heading: 'Adesk для бизнеса',
        id: 'adeskForBusiness',
        items: [
          {
            name: 'Digital-агентства',
            href: '#',
          },
          {
            name: 'Маркетинговые агентства',
            href: '#',
          },
          {
            name: 'Стартапы',
            href: '#',
          },
          {
            name: 'Кафе и рестораны',
            href: '#',
          },
          {
            name: 'Строительные компании',
            href: '#',
          },
          {
            name: 'Юридические фирмы',
            href: '#',
          },
          {
            name: 'Фрилансеры',
            href: '#',
          },
        ],
      },
      {
        heading: 'Ресурсы',
        id: 'resources',
        items: [
          {
            name: 'Журнал о финансах',
            href: '#',
          },
          {
            name: 'Базовый курс о финансах',
            href: '#',
          },
          {
            name: 'Расширенный курс по учету',
            icon: '../../public/footer/course.svg',
            href: '#',
          },
          {
            name: 'Шаблон финансовой модели',
            href: '#',
          },
          {
            name: 'Внедрение под ключ',
            href: '#',
          },
          {
            name: 'Партнерская программа',
            href: '#',
          },
          {
            name: 'Бонусы от партнеров',
            href: '#',
          },
        ],
      },
      {
        heading: 'Информация',
        id: 'information',
        items: [
          {
            name: 'Документация по API',
            href: '#',
          },
          {
            name: 'Отзывы пользователей',
            href: '#',
          },
          {
            name: 'Помощь',
            href: '#',
          },
        ],
      },
      {
        heading: 'Контакты:',
        id: 'contacts',
        items: [
          {
            name: 'support@adesk.ru',
            href: '#',
          },
          {
            name: '+7 (495) 106-21-00',
            href: '#',
          },
        ],
      },
      {
        heading: 'Предложения и сотрудничество:',
        id: 'offersAndCooperation',
        items: [
          {
            name: 'inbox@adesk.ru',
            href: '#'
          }
        ]
      }
    ]
  }
]

const mainTemplate = Handlebars.compile(`
<li
  class="list"
  id="{{id}}"
>
  <div class="list__heading-container">
    <h4 class="list__heading">{{heading}}</h4>
    <img
      class="list__arrow-down"
      src="../../public/chevronDown.svg"
      alt="Стрелка вниз"
    />
  </div>
  <div class="list__content-container">
    <ul class="list__content" id="list-{{id}}">
      
    </ul>
  </div>
</li>
`);
const itemTemplate = Handlebars.compile(`
<li
  class="list__item"
>
  <a href="{{href}}">
  {{name}}
  {{#if icon}}
    <img src={{icon}} alt="Иконка" />
  {{/if}}
  </a>
</li>
`);

const insertItems = (items, template, id) => {
  const parsedItems = items.map(i => template({ ...i }));
  document.getElementById(id).innerHTML = parsedItems.join(" ");
}

const render = () => {
  items.forEach((item) => {
    insertItems(item.items, mainTemplate, item.id);

    item.items.forEach((subitem) => {
      const element = document.getElementById(subitem.id);

      if (!element) {
        return;
      };
      if (window.innerWidth > 600) {
        element.classList.add('list_opened');
      } else {
        element.addEventListener('click', () => {
          element.classList.toggle('list_opened');
        });
      }

      insertItems(subitem.items, itemTemplate, `list-${subitem.id}`);
    })
  })
};

render();

window.addEventListener('resize', render);