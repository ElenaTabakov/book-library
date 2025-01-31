import { AbstractView } from "../../common/view.js";
import onChange from "on-change";
import { Header } from "../../components/headers/header.js";
import { Search } from "../../components/search/search.js";
export class MainView extends AbstractView {
    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0
    }
    constructor(appState) {
        super();
        this.setTitle('Book search');
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this))
        this.state = onChange(this.state, this.stateHook.bind(this))
    }

    appStateHook(path){
        if(path === 'favorites'){
            console.log(path)
        }
    }

    async loadBooksList(q,offset){
        const res = await fetch(`https://openlibrary.org/search.json?q=${q}&offset=${offset}`);
        this.state.loading = true;
        const data = res.json();
        this.state.loading = false;
        return data.docs;
    }
    stateHook(path){
        if(path === 'searchQuery'){
            this.loadBooksList(this.state.searchQuery, this.state.offset);
        }
    }
    render() {
        const main = document.createElement('div');
        main.append(new Search(this.state).render())
        this.app.innerHTML = ''; 
        this.renderHeader();
        this.app.append(main);
    }

    renderHeader(){
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    }
}
