/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-undef */
// eslint-disable-next-line import/no-named-as-default
import { TDataCard } from '../types/interfaces';
import { FairyCardsSort } from '../types/Sort';

const currentCardArr: TDataCard[] = [{
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
}];

const sortData = new FairyCardsSort(currentCardArr);

describe('sortManaMin()', () => {
  test('it should sort by mana min to max', () => {
    const filtered = sortData.sortManaMin();
    expect(filtered).toEqual([currentCardArr[0], currentCardArr[1], currentCardArr[2], currentCardArr[3]]);
  });

  test('it should sort by mana max to min', () => {
    expect(sortData.sortManaMax()).not.toBe([currentCardArr[0], currentCardArr[1], currentCardArr[2], currentCardArr[3]]);
  });

  test('it should sort by name atoz', () => {
    expect(sortData.sortAtoZ()).toEqual([currentCardArr[0], currentCardArr[1], currentCardArr[2], currentCardArr[3]]);
  });
  test('it should include the correct name', () => {
    expect(currentCardArr[2].name).toMatch(/Кельпи/);
  });

  test('it should contains an array element with the expected structure', () => { expect(currentCardArr[3]).not.toContainEqual({ count: 1 }); });

  test('it should the length property of the object is as expected', () => { expect(currentCardArr).toHaveLength(4); });

  test('it should contains an array or iterable value', () => { expect(currentCardArr).toHaveLength(4); });
});
