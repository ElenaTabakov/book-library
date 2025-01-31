import { DivComponent } from "../../common/divComponent";
import './search.css'

export class Search extends DivComponent {
    constructor(state) {
        super()
        this.state = state
    }

    render() {
        this.element.classList.add('search');
        this.element.innerHTML = `
            <div class="search__wrapper">  
               <input 
               placeholder="Search you book..."
               type"search"
               value="${this.state.searchQuery ?this.state.searchQuery:"" }"
               >
               <img src="/static/images/search_b.png" width="30"/>
            </div>
             <button><img src="/static/images/search_b.png" width="30"/></button>
        `
        return this.element;
    }
}
