/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable max-len */
export class Cart {
  cartArr: string[];

  constructor() {
    this.cartArr = [];
    if (localStorage.getItem('cart')) {
      this.cartArr = localStorage.getItem('cart')!.split(',');
    }
  }

  changeCart(num: string) {
    if (this.cartArr.includes(num)) {
      if (document.querySelector(`.fairy-card[data-num="${num}"]`)) {
        document.querySelector(`.fairy-card[data-num="${num}"]`)!.classList.replace('fairy-card', 'fairy-card-in-cart');
      }
    }
  }

  save(): void {
    localStorage.setItem('cart', this.cartArr.toString());
  }

  addCart(num: string) {
    const cartIndicator = document.querySelector('.cart-indicator')!;

    if (this.cartArr.includes(num)) {
      this.cartArr.splice(this.cartArr.indexOf(num), 1);
      console.log(this.cartArr);
      document.querySelector(`.fairy-card-in-cart[data-num="${num}"]`)!.classList.replace('fairy-card-in-cart', 'fairy-card');

      cartIndicator.innerHTML = `${this.cartArr.length}`;
    } else if (this.cartArr.length === 19) {
      const modalResultWrapper = document.getElementById('modal-result-wrapper');
      const btnClose = document.getElementById('btn-close');
      const overlay = document.getElementById('overlay');

      modalResultWrapper!.style.display = 'block';
      const closeModal = () => {
        modalResultWrapper!.style.display = 'none';
      };
      overlay!.addEventListener('click', closeModal);
      btnClose!.addEventListener('click', closeModal);
    } else {
      this.cartArr.push(num);

      document.querySelector(`.fairy-card[data-num="${num}"]`)!.classList.replace('fairy-card', 'fairy-card-in-cart');
    }

    cartIndicator.innerHTML = `${this.cartArr.length}`;
    this.save();
  }
}
