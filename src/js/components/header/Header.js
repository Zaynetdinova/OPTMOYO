import {Component} from '../../core/Component'
import {createHeader} from './header.template'

export class Header extends Component {
  static className = 'Header'
  constructor($root) {
    super($root, {
      name: 'Header',
      listeners: ['click']
    });

  }
  toHTML() {
    return createHeader([1, 2, 3])

  }

  openMenu() {
    document.getElementById('burger-menu').classList.toggle('show')
    document.getElementById('sidebar').classList.toggle('show')
    document.querySelector('.bg-search').classList.remove('display-block')
  }

  openCategory(category) {
    const cat = document.querySelector(`[data-type=${category}]`)

    const el = cat.querySelector(`#${category}`)
    if(el.classList.contains('open')) {
      close()
    } else {
      close()
      el.classList.toggle('open')
    }

    const plus = document.querySelector(`[datatype=${category}]`)
    if(plus.classList.contains('minus')) {
      closeMinus()
    } else {
      closeMinus()
      plus.classList.toggle('minus')
    }

  }


  onClick(e) {
    if(e.target.id === 'mobileSearch'){
      mobileSearch()
    }

    let button = e.target.closest('article');
    if (!button) return;
    if(button.id === 'burger-menu') {
      mobileSearch()
      this.openMenu()
    }

    if(e.target.id === 'choice') {
      return;
    }

    if(button.id === 'point-js') {
      this.openCategory(button.dataset.type)
    }
  }
}

    export function close() {
      const elements = document.querySelectorAll('.categories')
      elements.forEach((item) => {
        item.classList.remove('open')
      })
    }

    function closeMinus() {
      const elements = document.querySelectorAll('.plus')
      elements.forEach((item) => {
        item.classList.remove('minus')
      })
    }

    function mobileSearch() {
      const elem = document.querySelector('.bg-search')
      elem.classList.toggle('display-block')
    }
