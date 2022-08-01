import './style.scss';
import { Error404 } from '../render/Error404';
import { PageRenderer } from '../render/PageRenderer';
import { StartPage } from '../render/startPage';

const currentPage = 'StartPage';
const routes = new Map<string, PageRenderer>([
  ['StartPage', StartPage],
  ['Error404', Error404],
]);

async function router() {
  const pageContent = document.querySelector('body');
  const page = routes.has(currentPage) ? routes.get(currentPage) : Error404;
  pageContent!.innerHTML = await page!.render();

  await page!.after_render();
}

// eslint-disable-next-line @typescript-eslint/no-use-before-define
window.addEventListener('load', windowsOnLoad);
async function windowsOnLoad() {
  await router();
}

export { currentPage };

console.log(`
Score: 200/ 200:

Соблюдены пункты начального ипродвинутого руководства.
Главная страница содержит все товары магазина а также фильтры, строку поиска, поле для сортировки. Выполняются требования к вёрстке +10
Карточка товара содержит его изображение, название, количество данного товара на складе, год выхода на рынок, цвет, производитель и т.д., находится ли товар в корзине +10
Карточки товаров добавляются динамически средствами JavaScript (на кросс-чеке этот пункт не проверяется)
Добавление товаров в корзину +20
кликая по кнопке , товар можно добавлять в корзину или удалять. Карточки добавленных в корзину товаров внешне отличаются от остальных +10
на странице отображается количество добавленных в корзину товаров. При попытке добавить в корзину больше 20 товаров, выводится всплывающее уведомление с текстом "Извините, все слоты заполнены" +10 (модальное окно блокирует дальнейшее допабления)
Сортировка +20
Сортируются только те товары, которые в данный момент отображаются на странице
сортировка товаров по названию в возрастающем и убывающем порядке +10
сортировка товаров по мане у существ в возрастающем и убывающем порядке +10
Фильтры в указанном диапазоне от и до +30
фильтры по количеству +10
фильтры по году выпуска на рынок ( по мане у существ) +10
для фильтрации в указанном диапазоне используется range slider с двумя ползунками При перемещении ползунков отображается их текущее значение, разный цвет слайдера до и после ползунка +10 (noUiSlider).
Range slider можно создать на основе input[type=range] - [пример]
Фильтры по значению +30
Выбранные фильтры выделяются стилем.
фильтры по производителю +5 (происхождение)
фильтры по цвету +5
фильтры по размеру (в случае с Демо - по количеству камер) +5
можно отобразить только популярные товары +5
можно отфильтровать товары по нескольким фильтрам одного типа +10
Можно отфильтровать товары по нескольким фильтрам разного типа +20
Для нескольких фильтров разного типа отображаются только те товары, которые соответствуют всем выбранным фильтрам.
Если товаров, соответствующих всем выбранным фильтрам нет, на странице выводится уведомление в человекочитаемом формате, например, "Извините, совпадений не обнаружено"
Сброс фильтров +20
есть кнопка reset для сброса фильтров +10
Кнопка reset сбрасывает только фильтры, не влияя на порядок сортировки или товары, добавленные в избранное (корзину).
После использования кнопки reset фильтры остаются работоспособными
при сбросе фильтров кнопкой reset, ползунки range slider сдвигаются к краям, значения ползунков возвращаются к первоначальным, range slider закрашивается одним цветом +10
Сохранение настроек в local storage +30
выбранные пользователем фильтры, порядок сортировки, добавленные в избранное товары сохраняются при перезагрузке страницы. Есть кнопка сброса настроек, которая очищает local storage +10
Поиск +30
при открытии приложения курсор находится в поле поиска +2
автозаполнение поля поиска отключено (нет выпадающего списка с предыдущими запросами) +2
есть placeholder +2
в поле поиска есть крестик, позволяющий очистить поле поиска +2 
если нет совпадения последовательности букв в поисковом запросе с названием товара, выводится уведомление в человекочитаемом формате, например "Извините, совпадений не обнаружено" +2
при вводе поискового запроса на странице остаются только те товары, в которых есть указанные в поиске буквы в указанном порядке. При этом не обязательно, чтобы буквы были в начале слова. Регистр символов при поиске не учитывается +10
Поиск ведётся только среди товаров, которые в данный момент отображаются на странице.
если очистить поле поиска, на странице отображаются товары, соответствующие всем выбранным фильтрам и настройкам сортировки +10 `);
