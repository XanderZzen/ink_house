const countriesBtn = document.querySelector('.catalog__countries');
const catalogCards = document.querySelector('.catalog__cards');
const country = document.querySelector('.catalog__country');

const france = [
  {
    cardArt: 'img/france/1.jpg',
    cardAuthor: 'Марсель Руссо',
    cardArticle: 'Охота Амура',
    cardDescription: 'Холст, масло (50х80)',
    cardPrice: '14 500 руб',
  },
  {
    cardArt: 'img/france/2.jpg',
    cardAuthor: 'Анри Селин',
    cardArticle: 'Дама с собачкой',
    cardDescription: 'Акрил, бумага (50х80)',
    cardPrice: '16 500 руб',
  },
  {
    cardArt: 'img/france/3.jpg',
    cardAuthor: 'Франсуа Дюпон',
    cardArticle: 'Процедура',
    cardDescription: 'Цветная литография (40х60)',
    cardPrice: '20 000 руб',
  },
  {
    cardArt: 'img/france/4.jpg',
    cardAuthor: 'Луи Детуш',
    cardArticle: 'Роза',
    cardDescription: 'Бумага, акрил (50х80)',
    cardPrice: '12 000 руб',
  },
  {
    cardArt: 'img/france/5.jpg',
    cardAuthor: 'Франсуа Дюпон',
    cardArticle: 'Птичья трапеза',
    cardDescription: 'Цветная литография (40х60)',
    cardPrice: '22 500 руб',
  },
  {
    cardArt: 'img/france/6.jpg',
    cardAuthor: 'Пьер Моранж',
    cardArticle: 'Пейзаж с рыбой',
    cardDescription: 'Цветная литография (40х60)',
    cardPrice: '20 000 руб',
  },
];
const germany = [
  {
    cardArt: 'img/germany/1.jpg',
    cardAuthor: 'Курт Вернер',
    cardArticle: 'Над городом',
    cardDescription: 'Цветная литография (40х60)',
    cardPrice: '16 000 руб',
  },
  {
    cardArt: 'img/germany/2.jpg',
    cardAuthor: 'Макс Рихтер',
    cardArticle: 'Птенцы',
    cardDescription: 'Холст, масло (50х80)',
    cardPrice: '14 500 руб',
  },
  {
    cardArt: 'img/germany/3.jpg',
    cardAuthor: 'Мартин Майер',
    cardArticle: 'Среди листьев',
    cardDescription: 'Цветная литография (40х60)',
    cardPrice: '20 000 руб',
  },
  {
    cardArt: 'img/germany/4.jpg',
    cardAuthor: 'Герман Беккер',
    cardArticle: 'Яркая птица',
    cardDescription: 'Цветная литография (40х60)',
    cardPrice: '13 000 руб',
  },
  {
    cardArt: 'img/germany/5.jpg',
    cardAuthor: 'Вульф Бауэр',
    cardArticle: 'Дятлы',
    cardDescription: 'Бумага, акрил (50х80)',
    cardPrice: '20 000 руб',
  },
  {
    cardArt: 'img/germany/6.jpg',
    cardAuthor: 'Вальтер Хартманн',
    cardArticle: 'Большие воды',
    cardDescription: 'Бумага, акрил (50х80)',
    cardPrice: '23 000 руб',
  },
];
const england = [
  {
    cardArt: 'img/england/1.jpg',
    cardAuthor: 'Пол Смит',
    cardArticle: 'Дикий зверь',
    cardDescription: 'Акварель, бумага (50х80)',
    cardPrice: '19 500 руб',
  },
  {
    cardArt: 'img/england/2.jpg',
    cardAuthor: 'Джон Уайт',
    cardArticle: 'Скалистый берег',
    cardDescription: 'Цветная литография (40х60)',
    cardPrice: '17 500 руб',
  },
  {
    cardArt: 'img/england/3.jpg',
    cardAuthor: 'Джим Уотсон',
    cardArticle: 'Река и горы',
    cardDescription: 'Акварель, бумага (50х80)',
    cardPrice: '20 500 руб',
  },
  {
    cardArt: 'img/england/4.jpg',
    cardAuthor: 'Юджин Зиллион',
    cardArticle: 'Белый попугай',
    cardDescription: 'Цветная литография (40х60)',
    cardPrice: '15 500 руб',
  },
  {
    cardArt: 'img/england/5.jpg',
    cardAuthor: 'Эрик Гиллман',
    cardArticle: 'Ночная рыба',
    cardDescription: 'Бумага, акрил (50х80)',
    cardPrice: '12 500 руб',
  },
  {
    cardArt: 'img/england/6.jpg',
    cardAuthor: 'Альфред Барр',
    cardArticle: 'Рыжий кот',
    cardDescription: 'Цветная литография (40х60)',
    cardPrice: '21 000 руб',
  },
];

console.log(countriesBtn);
console.log(catalogCards);

// отрисовка карточек

countriesBtn.addEventListener('click', (event) => {
  const country = event.target.textContent;

  if (country === 'Франция') {
    country.classList.add('active');
    catalogCards.replaceChildren();
    catalogCards.innerHTML = france
      .map((art) => {
        return `<div class="catalog__card">
            <div class="catalog__card-wrapper">
              <img src="${art.cardArt}" class="catalog__card-art" />
              <p class="catalog__card-author">${art.cardAuthor}</p>
              <h3 class="catalog__card-article">${art.cardArticle}</h3>
              <p class="catalog__card-description">${art.cardDescription}</p>
              <p class="catalog__card-price">${art.cardPrice}</p>
              <button class="catalog__card-cart">В корзину</button>
            </div>
          </div>`;
      })
      .join(' ');
    console.log(catalogCards.innerHTML);
  } else if (country === 'Германия') {
    catalogCards.replaceChildren();
    catalogCards.innerHTML = germany
      .map((art) => {
        return `<div class="catalog__card">
            <div class="catalog__card-wrapper">
              <img src="${art.cardArt}" class="catalog__card-art" />
              <p class="catalog__card-author">${art.cardAuthor}</p>
              <h3 class="catalog__card-article">${art.cardArticle}</h3>
              <p class="catalog__card-description">${art.cardDescription}</p>
              <p class="catalog__card-price">${art.cardPrice}</p>
              <button class="catalog__card-cart">В корзину</button>
            </div>
          </div>`;
      })
      .join(' ');
    console.log(catalogCards.innerHTML);
  } else if (country === 'Англия') {
    catalogCards.replaceChildren();
    catalogCards.innerHTML = england
      .map((art) => {
        return `<div class="catalog__card">
            <div class="catalog__card-wrapper">
              <img src="${art.cardArt}" class="catalog__card-art" />
              <p class="catalog__card-author">${art.cardAuthor}</p>
              <h3 class="catalog__card-article">${art.cardArticle}</h3>
              <p class="catalog__card-description">${art.cardDescription}</p>
              <p class="catalog__card-price">${art.cardPrice}</p>
              <button class="catalog__card-cart">В корзину</button>
            </div>
          </div>`;
      })
      .join(' ');
    console.log(catalogCards.innerHTML);
  }
});
