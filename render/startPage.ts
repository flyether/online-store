/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-inner-declarations */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable default-case */
/* eslint-disable @typescript-eslint/no-shadow */
import noUiSlider from 'nouislider';

import { PageRenderer } from './PageRenderer';
import { data, DataCard } from '../data/data';
import {
  TDataCard, FilterObjectArr,
} from '../types/interfaces';

import { FairyCardsSort } from '../types/Sort';
import { FilterData } from '../filter/filterData';

import { TargetElement } from '../slider/noUiSlider/nouislider.d';
import { Cart } from './cart';

const mainFilter = new FilterData({});
mainFilter.load();

const cart = new Cart();

let countInCart = 0;
// cart.addCart;
if (localStorage.getItem('cart')) {
  countInCart = cart.cartArr.length;
}

const StartPage: PageRenderer = {

  render: async () => {
    const view = /* html */`
    <div id="modal-result-wrapper">
      <div id="overlay"></div>
      <div id="modal-window">
         <div id="content">Извините, в клетку не влазит больше 20 существ</div>
         <div id="btn-close">закрыть</div>
       </div>
    </div>
    <header class="header">
      
        
    <div class="title">
      <h1>Интернет магазин существ</h1>
    </div>
   
</header>
  <div class="basket-slider">
     
      <div class=slider-item">
        <div class="bar">
          <div class="label-slider">Мана</div>
          <div id="slider"></div>    
          <div class="bar flex">
            <div id="reset" class="button-r">Сброс</div>
          </div>
        </div>
      
       <div class="bar">
          <div class="label-slider">Количество существ в в наличии</div>
          <div id="slider-count"></div>
          
          <div class="bar flex">
            <div id="reset-count" class="button-r">Сброс</div>
          </div>
        </div>
      </div>
     <div class="cart">
       <span class="cart-svg">
      
         <span class="cart-indicator">${countInCart}</span>
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
          </svg>
       </span>
     </div>
  </div>
<div class="page fairy-page">
    <div class="page fairy-page">
        <div class="blur">
        
          <div class="controls">
            <div class="filters">
                   
              <form id="filter-form">
                <div class="filters-all">
                  <div class="filters-inputs">
                      <div class="controls-title">
                      Фильтры по значению
                      </div>
                      <div class="origin">
                        <p class="filters-text">Происхождение существ:</p>
                        <p class="filters-text"> Сазки &nbsp Мифы &nbsp Комиксы</p>
                        <input  ${mainFilter.data.origin && mainFilter.data.origin!.includes('Сказки') ? 'checked' : ''}  id="checkboxOriginFairyTail" type="checkbox" class="checkbox fairyTail checkboxOrigin" name="origin" value="Сказки">
                        <label for="checkboxOriginFairyTail"></label>
                     
                        <input  ${mainFilter.data.origin && mainFilter.data.origin!.includes('Мифы') ? 'checked' : ''} id="checkboxOriginMyths" type="checkbox" class="checkbox myths checkboxOrigin" name="origin" value="Мифы">
                        <label for="checkboxOriginMyths"></label>
                        <input  ${mainFilter.data.origin && mainFilter.data.origin!.includes('Комиксы') ? 'checked' : ''}  id="checkboxOriginСomics" type="checkbox" class="checkbox comics checkboxOrigin" name="origin" value="Комиксы">
                        <label for="checkboxOriginСomics"></label>
                      </div>
                      <div class="color">
                        <p class="filters-text">Цвет:</p>
                        <input  ${mainFilter.data.color && mainFilter.data.color!.includes('Белый') ? 'checked' : ''} id="checkboxColorWhite" type="checkbox" class="checkbox white checkboxColor" name="color" value="Белый">
                        <label for="checkboxColorWhite"></label>
                        <input  ${mainFilter.data.color && mainFilter.data.color!.includes('Телесный') ? 'checked' : ''}  id="checkboxColorBeige" type="checkbox" class="checkbox beige checkboxColor" name="color" value="Телесный">
                        <label for="checkboxColorBeige"></label>
                        <input ${mainFilter.data.color && mainFilter.data.color!.includes('Зеленый') ? 'checked' : ''}  id="checkboxColorGreen" type="checkbox" class="checkbox green checkboxColor" name="color" value="Зеленый">
                        <label for="checkboxColorGreen"></label>
                  
                        <input ${mainFilter.data.color && mainFilter.data.color!.includes('Серый') ? 'checked' : ''}  id="checkboxColorGrey" type="checkbox" class="checkbox grey checkboxColor" name="color" value="Серый">
                        <label for="checkboxColorGrey"></label>
                       
                        <input ${mainFilter.data.color && mainFilter.data.color!.includes('Золотой') ? 'checked' : ''}  id="checkboxColorGold" type="checkbox" class="checkbox gold checkboxColor" name="color" value="Золотой">
                        <label for="checkboxColorGold"></label>
                      </div>
                      <div class="size">
                        <p class="filters-text">Выбирите Размер: </p>
                     
                        <input  ${mainFilter.data.size && mainFilter.data.size!.includes('Огромный') ? 'checked' : ''}id="checkboxSizeBig" type="checkbox" class="checkbox checkbox-size-big" name="size" value="Огромный">
                        <label for="checkboxSizeBig"></label>
                        <input ${mainFilter.data.size && mainFilter.data.size!.includes('С лошадь') ? 'checked' : ''}  id="checkboxSizeMedium" type="checkbox" class="checkbox checkbox-size-medium" name="size" value="С лошадь">
                        <label for="checkboxSizeMedium"></label>
                        <input ${mainFilter.data.size && mainFilter.data.size!.includes('С человека') ? 'checked' : ''} id="checkboxSizeSmall" type="checkbox" class="checkbox checkbox-size-small" name="size" value="С человека">
                        <label for="checkboxSizeSmall"></label>
                      </div>
                </div>
                  <div class="filters-fs">
                     <p class="title-tx"> Поиск по названию </p>
                     <div class="search-box" id="search-container">
                   
                       <input id="input-search" type="text" class="serch-txt" name="name" placeholder="искать" autocomplete="off" autofocus > <button type="button"  class="button-cross"><i class="fa-regular fa-cross"></i></button>
                       <label for="checkboxSizeSmall"></label>
                     </div>
                 
                  
                     <div class="favorite-container">
                        <div class="input-wrap">
                          <p>Популярные: </p>
                          <div class="form-group">
                           
                             <input  ${mainFilter.data.favorite && (mainFilter.data.favorite === true) ? 'checked' : ''} type="checkbox" class="favorite-input" id="checkboxFavorite" name="favorite">
                             <label for="checkboxFavorite" class="favorite-input-label"></label>
                          </div>
                        </div>
                     </div>
                     <div class="filters-inputs">
                       <div class="filters-all">
                         <button id="a-z" type="button"  class="button-m reset-filter">Сортировка А-Я</button>
                         <button id="z-a" type="button"  class="button-m sort-button">Сортировка Я-А</button>
                       </div>
                       <div class="filters-all">
                         <button id="mana-max" type="button"  class="button-m reset-filter">Сортировка маны по возрастанию</button>
                         <button id="mana-min" type="button"  class="button-m sort-button">Сортировка маны по убывнию</button>
                     </div>
                    <button type="button"  id="reset-filter-button" class="button-m reset-filter">Сброс фильтров</button>
                    <button type="button"  id="reset-All-button" class="button-m reset-filter">Сброс всего вообще, даже боженька память потеряет</button>
                      
                  </div>
               
                </div>
              </form>  
            </div>                               
          </div>
          
            <div class="fairy-card-container">
                
            </div>
        </div>
     </div>
     <footer>
     <div class ="footer-container footer-shadow" >
        <div>  ©  2022 </div>
        <a href="https://github.com/flyether/">github</a> 
        <a class="logo-rss" href="https://rs.school/js/" > </a>
      </div>  
    </footer>
  
    `;

    return view;
  },

  after_render: async () => {
    let saveDataForm: HTMLFormElement;

    const filterChanged = function ():void {
      const formData = new FormData(saveDataForm);
      const filterActual:FilterObjectArr = {};

      filterActual.count = (sliderCount.noUiSlider!.get(true) as number[]);
      filterActual.mana = slider.noUiSlider!.get(true) as number[];

      if (mainFilter.data.sort) { filterActual.sort = mainFilter.data.sort; }

      const keys = Array.from(formData.keys()) as (keyof FilterObjectArr)[];
      keys.forEach((elem) => {
        if (['size', 'color', 'origin'].includes(elem)) {
          (filterActual[elem] as string[]) = formData.getAll(elem) as string[];
        } else if (['name'].includes(elem)) {
          const nn = formData.get(elem) as string;
          // eslint-disable-next-line @typescript-eslint/quotes
          if (nn !== "") {
            filterActual.name = nn;
          }
        } else if (['favorite'].includes(elem)) {
          if (formData.get(elem)) { (filterActual[elem] as boolean) = true; }
        }
      });

      mainFilter.data = filterActual;
      mainFilter.save();
      cardRenderWithFilter();
    };

    // сортировка
    const sortData = new FairyCardsSort(currentCardArr);

    const aToZButton = document.getElementById('a-z');
    aToZButton!.addEventListener('click', sortAtoZfunc);
    function sortAtoZfunc():void {
      sortData.sortAtoZ();
      mainFilter.data.sort = 'a-z';
      mainFilter.save();
      cardRenderWithFilter();
    }

    const zToAButton = document.getElementById('z-a');
    zToAButton!.addEventListener('click', sortZtoAfunc);
    function sortZtoAfunc():void {
      sortData.sortZtoA();
      mainFilter.data.sort = 'z-a';
      mainFilter.save();
      cardRenderWithFilter();
    }

    const manaMaxButton = document.getElementById('mana-max');
    manaMaxButton!.addEventListener('click', sortMax);
    function sortMax():void {
      sortData.sortManaMax();
      mainFilter.data.sort = 'mana-max';
      mainFilter.save();
      cardRenderWithFilter();
    }

    const manaMinButton = document.getElementById('mana-min');
    manaMinButton!.addEventListener('click', sortMin);
    function sortMin():void {
      sortData.sortManaMin();
      mainFilter.data.sort = 'mana-min';
      mainFilter.save();
      cardRenderWithFilter();
    }

    // сброс reset-filter-button

    const restButton = document.getElementById('reset-filter-button');
    restButton!.addEventListener('click', restlocalStorageFilter);

    function restlocalStorageFilter():void {
      sliderCount.noUiSlider!.reset();
      slider.noUiSlider!.reset();
      if (mainFilter.data.sort) {
        mainFilter.data = { sort: mainFilter.data.sort };
      } else {
        mainFilter.data = {};
      }
      mainFilter.save();
      const r = document.querySelectorAll('input[type="checkbox"]');
      for (let i = 0; i < r.length; i++) { (r[i] as HTMLInputElement).checked = false; }
      cardRenderWithFilter();
    }

    const restButtonAll = document.getElementById('reset-All-button');
    restButtonAll!.addEventListener('click', restLocalStorageAll);

    function restLocalStorageAll():void {
      sliderCount.noUiSlider!.reset();
      slider.noUiSlider!.reset();
      mainFilter.data = {};
      mainFilter.save();
      cart.cartArr = [];
      cart.save();
      sortData.sortAtoZ();
      cardRenderWithFilter();
      document.querySelector('.cart-indicator')!.innerHTML = '0';
      const r = document.querySelectorAll('input[type="checkbox"]');
      for (let i = 0; i < r.length; i++) { (r[i] as HTMLInputElement).checked = false; }
    }
    const searchInput = document.getElementById('input-search') as HTMLInputElement;

    const cross = document.querySelector('.button-cross') as HTMLButtonElement;
    if (searchInput) {
      cross.addEventListener('click', () => {
        (searchInput).value = '';
        mainFilter.data.name = '';
        mainFilter.save();
        cardRenderWithFilter();
      });
    }

    if (mainFilter.data.sort === 'a-z') { sortData.sortAtoZ(); }
    if (mainFilter.data.sort === 'z-a') { sortData.sortZtoA(); }
    if (mainFilter.data.sort === 'mana-max') { sortData.sortManaMax(); }
    if (mainFilter.data.sort === 'mana-min') { sortData.sortManaMin(); }

    cardRenderWithFilter();

    saveDataForm = document.getElementById('filter-form') as HTMLFormElement;
    saveDataForm.addEventListener('input', filterChanged);

    const slider = document.getElementById('slider') as TargetElement;
    const sliderCount = document.getElementById('slider-count') as TargetElement;

    let start = 0;
    let end = 2000;

    let start1 = 0;
    let end1 = 2000;

    if (mainFilter.data.mana) { start = mainFilter.data.mana[0]; end = mainFilter.data.mana[1]; }
    if (mainFilter.data.count) { start1 = mainFilter.data.count[0]; end1 = mainFilter.data.count[1]; }
    if (slider && sliderCount) {
      noUiSlider.create(slider, {
        start: [start, end],
        connect: true,
        range: {
          min: 0,
          max: 2000,
        },
        step: 10,
        tooltips: [true, true],
        margin: 5,

      });
      noUiSlider.create(sliderCount, {
        start: [start1, end1],
        connect: true,
        range: {
          min: 0,
          max: 100,
        },
        step: 20,
        tooltips: [true, true],
        margin: 5,

      });
      sliderCount.noUiSlider!.on('set', (values, handle) => {
        filterChanged();
      });

      const resetButtonCount = document.getElementById('reset-count');
      resetButtonCount!.onclick = (e) => {
        mainFilter.data.count = [0, 100];
        sliderCount.noUiSlider!.set([0, 100]);
        filterChanged();
      };

      slider.noUiSlider!.on('set', (values, handle) => {
        filterChanged();
      });

      const resetButton = document.getElementById('reset');
      resetButton!.onclick = (e) => {
        mainFilter.data.mana = [0, 2000];
        slider.noUiSlider!.set([0, 2000]);
        filterChanged();
      };
    }
  },
};

let currentCardArr: TDataCard[] = [];
for (let index = 0; index < data.length; index++) {
  currentCardArr.push(data[index]);
}
// рендер карточек
function cardRenderWithFilter() {
  const cardsArr: TDataCard[] = currentCardArr;
  const filter: FilterObjectArr = mainFilter.data;
  let countCard = 0;

  const modalResultWrapper = document.getElementById('modal-result-wrapper');
  modalResultWrapper!.style.display = 'none';

  const parentDiv = document.querySelector('.fairy-card-container');
  parentDiv!.innerHTML = '';
  for (let i = 0; i < cardsArr.length; i++) {
    let ok = true;
    for (const diсk in filter) {
      const fallosfromObjectArr = diсk as keyof FilterObjectArr;
      const fallosfromCardArr = diсk as keyof TDataCard;
      if (['size', 'color', 'origin'].includes((diсk) as string)) {
        if ((filter[fallosfromObjectArr] as string[]).includes(cardsArr[i][fallosfromCardArr] as string) === false) {
          ok = false;
        }
      } else if (diсk === 'favorite' && filter[fallosfromObjectArr] === true) {
        if ((cardsArr[i][fallosfromCardArr] as boolean) === false) {
          ok = false;
        }
      } else if (diсk === 'mana' || diсk === 'count') {
        if ((cardsArr[i][fallosfromCardArr]!) < (filter[fallosfromObjectArr] as number[])[0] || (cardsArr[i][fallosfromCardArr]!) > ((filter[fallosfromObjectArr] as number[])[1])) { ok = false; }
      } else if (diсk === 'name') {
        const ff = (filter[fallosfromObjectArr] as string).toLowerCase();
        const ca = (cardsArr[i][fallosfromCardArr] as string).toLowerCase();
        if ((ca).includes(ff) === false) { ok = false; }
      }
    }
    if (ok) {
      const newCard: DataCard = new DataCard(cardsArr[i]);

      newCard.createCard();
      countCard++;
    }
  }
  if (countCard > 0) {
    for (let i = 0; i < cart.cartArr.length; i++) {
      cart.changeCart(cart.cartArr[i]);
    }
  }

  const cartClick = document.querySelectorAll('.button-cart') as NodeListOf<Element>;
  for (let i = 0; i < cartClick.length; i++) {
    cartClick[i].addEventListener('click', (event) => cart.addCart((event.target! as HTMLElement).dataset.num as string));
  }

  if (countCard === 0) {
    const parent = document.querySelector('.fairy-card-container');
    const cardVoid = document.createElement('div');
    cardVoid.classList.add('fairy-card-void');
    cardVoid.innerHTML = `Извините, у нас нет подходящих сущностей для ваших параметров.
   Хотите бесплатно вислоухую кошку?`;
    const cardImg = document.createElement('img');
    cardImg.classList.add('fairy-card-img');
    cardImg.src = '../assets/img/cat.jpg';
    cardVoid.appendChild(cardImg);
    parent!.append(cardVoid);
  }
}

export { StartPage };
