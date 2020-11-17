import {topHeader} from './components/topHeader'
import {bottomHeader} from './components/bottomHeader'
import {sidebar} from './components/sidebar'
import {extra} from './components/extra'



export function createHeader(data) {
  return `
        ${topHeader()}
        ${bottomHeader()}
        <div class='sidebar' id='sidebar'>
            <div class='wrapper-sidebar'>
                <div class='points'>
                    ${sidebar(point)}
                </div>   
                <div class='extra'>
                    ${extra()}
                </div>                   
            </div>     
                    
        </div>  
    `
}



let point =
    [
        {
            title: 'женщинам',
            id: 'women',
        },
        {
            title: 'девочкам',
            id: 'girl',
        },
        {
            title: 'мужчинам',
            id: 'men',
        },
        {
            title: 'мальчикам',
            id: 'boy',
        },
        {
            title: 'для дома',
            id: 'home',
        },
        {
            title: 'игрушки',
            id: 'game',
        },
    ]




