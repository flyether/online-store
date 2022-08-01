/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */

import { TDataCard } from '../types/interfaces';

const data: TDataCard[] = [
  {
    id: 1,
    num: '1',
    name: 'Единорог',
    count: 12,
    mana: 150,
    origin: 'Сказки',
    color: 'Белый',
    size: 'С лошадь',
    favorite: true,
  },
  {
    id: 2,
    num: '2',
    name: 'Кракен',
    count: 1,
    mana: 50,
    origin: 'Мифы',
    color: 'Зеленый',
    size: 'Огромный',
    favorite: false,
  },
  {
    id: 3,
    num: '3',
    name: 'Кельпи',
    count: 6,
    mana: 15,
    origin: 'Мифы',
    color: 'Черный',
    size: 'С лошадь',
    favorite: false,
  },
  {
    id: 4,
    num: '4',
    name: 'Джокер',
    count: 4,
    mana: 0,
    origin: 'Комиксы',
    color: 'Телесный',
    size: 'С человека',
    favorite: true,
  },

  {
    id: 5,
    num: '5',
    name: 'Веном',
    count: 7,
    mana: 0,
    origin: 'Комиксы',
    color: 'Черный',
    size: 'С человека',
    favorite: false,
  },
  {
    id: 6,
    num: '6',
    name: 'Дракон',
    count: 3,
    mana: 1200,
    origin: 'Сказки',
    color: 'Золотой',
    size: 'Огромный',
    favorite: true,
  },
  {
    id: 7,
    num: '7',
    name: 'Банши',
    count: 17,
    mana: 30,
    origin: 'Мифы',
    color: 'Серый',
    size: 'С человека',
    favorite: false,
  },
  {
    id: 8,
    num: '8',
    name: 'Монстр',
    count: 22,
    mana: 40,
    origin: 'Комиксы',
    color: 'Серый',
    size: 'Огромный',
    favorite: false,
  },
  {
    id: 9,
    num: '9',
    name: 'Фея',
    count: 85,
    mana: 456,
    origin: 'Сказки',
    color: 'Телесный',
    size: 'С человека',
    favorite: true,
  },
  {
    id: 10,
    num: '10',
    name: 'Джин',
    count: 73,
    mana: 865,
    origin: 'Мифы',
    color: 'Серый',
    size: 'С человека',
    favorite: false,
  },
  {
    id: 11,
    num: '11',
    name: 'Оборотень',
    count: 24,
    mana: 30,
    origin: 'Сказки',
    color: 'Серый',
    size: 'С человека',
    favorite: true,
  },
  {
    id: 12,
    num: '12',
    name: 'Йети',
    count: 12,
    mana: 10,
    origin: 'Сказки',
    color: 'Белый',
    size: 'С человека',
    favorite: false,
  },
  {
    id: 13,
    num: '13',
    name: 'Леприкон',
    count: 52,
    mana: 230,
    origin: 'Мифы',
    color: 'Зеленый',
    size: 'С человека',
    favorite: true,
  },
  {
    id: 14,
    num: '14',
    name: 'Виверна',
    count: 6,
    mana: 15,
    origin: 'Сказки',
    color: 'Зеленый',
    size: 'Огромный',
    favorite: false,
  },
  {
    id: 15,
    num: '15',
    name: 'Кицунэ',
    count: 34,
    mana: 530,
    origin: 'Мифы',
    color: 'Белый',
    size: 'С человека',
    favorite: false,
  },
  {
    id: 16,
    num: '16',
    name: 'Халк',
    count: 17,
    mana: 0,
    origin: 'Комиксы',
    color: 'Зеленый',
    size: 'Огромный',
    favorite: false,
  },
  {
    id: 17,
    num: '17',
    name: 'Антилопа',
    count: 6,
    mana: 15,
    origin: 'Сказки',
    color: 'Золотой',
    size: 'С лошадь',
    favorite: false,
  },
  {
    id: 18,
    num: '18',
    name: 'Ехидна',
    count: 89,
    mana: 1400,
    origin: 'Мифы',
    color: 'Золотой',
    size: 'С человека',
    favorite: false,
  },
  {
    id: 19,
    num: '19',
    name: 'Нага',
    count: 16,
    mana: 20,
    origin: 'Сказки',
    color: 'Серый',
    size: 'С человека',
    favorite: false,
  },
  {
    id: 20,
    num: '20',
    name: 'Кэп Марвел',
    count: 22,
    mana: 0,
    origin: 'Комиксы',
    color: 'Телесный',
    size: 'С человека',
    favorite: false,
  },
  {
    id: 21,
    num: '21',
    name: 'Гидра',
    count: 31,
    mana: 170,
    origin: 'Мифы',
    color: 'Серый',
    size: 'Огромный',
    favorite: false,
  },
];

class DataCard {
  data: TDataCard;

  // eslint-disable-next-line max-len
  constructor(newdata: TDataCard) {
    this.data = newdata;
  }

  createCard() {
    const parent = document.querySelector('.fairy-card-container');
    const card = document.createElement('div');
    card.classList.add('fairy-card');
    card.dataset.num = this.data.num;
    // card.style.opacity = '0';

    const heading = document.createElement('h2');
    heading.classList.add('fairy-card-title');
    heading.textContent = this.data.name;

    const cardImg = document.createElement('img');
    cardImg.classList.add('fairy-card-img');
    cardImg.src = `../assets/img/${this.data.num}.jpg`; // уточнить путь
    cardImg.alt = this.data.name;
    cardImg.dataset.number = this.data.num;
    const cardID = document.createElement('id');
    cardID.dataset.id = this.data.id!.toString();

    const cardDescription = document.createElement('div');
    cardDescription.classList.add('fairy-card-description');

    const count = this.addDescriptionParent('count', 'Количество на складе: ', this.data.count.toString());
    const mana = this.addDescriptionParent('mana', 'mana: ', this.data.mana.toString());
    const origin = this.addDescriptionParent('origin', 'происхождение: ', this.data.origin);
    const color = this.addDescriptionParent('color', 'Цвет: ', this.data.color);
    const size = this.addDescriptionParent('size', 'Размер: ', this.data.size);

    cardDescription.append(count, mana, origin, color, size);

    const ribbon = document.createElement('div');
    ribbon.id = `ribbon${this.data.num}`;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.data.favorite ? ribbon.classList.add('ribbon-favorite') : ribbon.classList.add('ribbon');
    const favoriteFairy = document.createElement('div');
    favoriteFairy.classList.add('ribbon-favorite-fairy');
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.data.favorite ? ribbon.append(favoriteFairy) : this.data.favorite = false;

    const buttonCart = document.createElement('button');
    buttonCart.classList.add('button-cart');
    buttonCart.classList.add('button');
    buttonCart.textContent = 'корзина';
    buttonCart.dataset.num = this.data.num;

    card.append(heading, cardImg, cardDescription, ribbon, buttonCart);
    parent!.append(card);
  }

  addDescriptionParent(className: string, content: string, value: string) {
    const elem = document.createElement('p');
    elem.classList.add(`${className}`);
    elem.textContent = content;
    const span = document.createElement('span');
    elem.append(span);
    span.textContent = value;
    return elem;
  }
}
export { data, DataCard, TDataCard };
