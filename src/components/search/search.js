import { DivComponent } from "../../common/divComponent";
import './search.css'

export class Search extends DivComponent {
    constructor(state) {
        super()
        this.state = state
    }

    search(){
        const value = this.element.querySelector('input').value;
        this.state.searchQuery = value;
    }

    render() {
        this.element.classList.add('search');
        this.element.innerHTML = `
        <div class="container search_contaner">
            <div class="search__wrapper">  
               <input 
               placeholder="Search book or author..."
               type"text"
               value="${this.state.searchQuery ?this.state.searchQuery:"" }"
               >
               <img src="/static/images/search_b.png" width="30"/>
            </div>
            <button aria-label="Search book or author"><img src="/static/images/search_b.png" width="30"/></button>
        </div>
        `
        this.element.querySelector('button').addEventListener('click', this.search.bind(this));
        this.element.querySelector("input").addEventListener('keydown', (event) => {
            if(event.key === 'Enter'){
                this.search()
            }
        });
        return this.element;
    }
}
