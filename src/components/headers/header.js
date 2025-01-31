import { DivComponent } from "../../common/divComponent";
import './header.css'

export class Header extends DivComponent {
    constructor(appState) {
        super()
        this.appState = appState
    }

    render() {
        this.element.classList.add('header');
        this.element.innerHTML = `
            <div class="container">  
              <div class="d-flex header_container">
                <div><img src="/static/images/logo_b.png" width="50"/></div> 
                <div class="d-flex menu">
                  <div class="menu__item"><a href="#search"><img src="/static/images/search_b.png" width="30"/> Search book</a></div>
                  <div class="menu__item"><a href="#favorites"><img src="/static/images/bookmark.png" width='30'/>Favorites: ${this.appState.favorites.length}</a></div>
                </div>
                </div>
            </div>
        `
        return this.element;
    }
}
