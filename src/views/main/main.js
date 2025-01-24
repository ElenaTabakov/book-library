import { AbstractView } from "../../common/view.js";

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
    }

    render() {
        const main = document.createElement('div');
        main.innerHTML = `Favorites: ${this.appState.favorites.length}`;
        this.app.innerHTML = ''; 
        this.app.append(main);
    }
}
