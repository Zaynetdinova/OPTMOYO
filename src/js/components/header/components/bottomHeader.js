import optmoyo from '../../../../images/header/optmoyo_logo.svg'
import search_img from '../../../../images/header/search.svg'
import search_white from '../../../../images/header/search_white.svg'
import info_icon from '../../../../images/header/info.svg'
import user from '../../../../images/header/user.svg'
import like from '../../../../images/header/like.svg'
import basket from '../../../../images/header/basket.svg'
import {search} from './search'

export function bottomHeader() {



    return `
        <div class='bottomHeader'>
            <div class='wrapper-b'>
                <div class='content-header'>
                    <article class='burger-menu' id="burger-menu">
                        <span></span>
                    </article>  
                    <div class='logo'>
                        <a href="/">
                            <img class='logo-img' src=${optmoyo} alt="Логотип">
                        </a>
                    </div>  
                    <nav>
                        <ul class='menu'>
                            <li>
                                <a href="#">Женщинам</a>
                            </li>
                            <li>
                                <a href="#">Девочкам</a>
                            </li>
                            <li>
                                <a href="#">Мужчинам</a>
                            </li>
                            <li>
                                <a href="#">Мальчикам</a>
                            </li>
                            <li>
                                <a href="#">Для дома</a>
                            </li>
                            <li>
                                <a href="#">Игрушки</a>
                            </li>               
                        </ul>
                    </nav>
                    <form>
                        <input class='search-desktop'  type='search' placeholder='Я ищу...' alt='search'>     
                        <input class='search-black' type='image' src=${search_img} alt='search'>
                    </form>
                    <div id="mobileSearch" class='search-white' type='image'> </div>
                    <img class='info_icon' src=${info_icon} alt='info-icon'>  
                    <img class='user' src=${user} alt='user'>
                    <img class='like' src=${like} alt='like'> 
                    <div class='buy'>
                        <img class='basket' id='basket' src=${basket} alt='basket'>
                        <div class='basket-price' id='basket-price'>88 шт. / <br> 888 000 $</div>
                    </div>  
                                        
                </div> 
            </div>
            ${search()}
        </div>
    `
}
