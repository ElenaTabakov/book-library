import { AbstractView } from "../../common/view.js";
import onChange from "on-change";
import { Header } from "../../components/headers/header.js";
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
    }

    appStateHook(path){
        if(path === 'favorites'){
            console.log(path)
        }
    }
    render() {
        const main = document.createElement('div');
        main.innerHTML = `Favorites: ${this.appState.favorites.length}`;
        this.app.innerHTML = ''; 
        this.renderHeader();
        this.app.append(main);
    }

    renderHeader(){
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    }
}
