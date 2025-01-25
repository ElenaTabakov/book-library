import { DivComponent } from "../../common/divComponent";
import './header.css'

export class Header extends DivComponent {
    constructor(appState) {
        super()
        this.appState = appState
    }

    render() {
        this.element.innerHTML = '';
        this.element.classList.add('header');
        this.element.innerHTML = `
        <div class="container">   
            <div class="d-flex">
            <div class="col-md-5 logo"><img src="/static/images/logo_b.png" width="50"/></div>
            <div class="col-md-7">${this.appState.favorites.length}</div>
            </div>
        </div>
        `
        return this.element;
    }
}
