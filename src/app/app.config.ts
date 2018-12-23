export class AppConstants {
    public static get baseURL(): string { return 'https://swapi.co/api/'; }
    public static get internalURL(): string { return 'assets/data/data-main.json'; }
    public static get urlCharacters(): string { return 'https://swapi.co/api/people/'; }
    public static get urlPlanets(): string { return 'https://swapi.co/api/planets/'; }
    public static get urlFilms(): string { return 'https://swapi.co/api/films/'; }
    public static get urlSpecies(): string { return 'https://swapi.co/api/species/'; }
    public static get urlVehicles(): string { return 'https://swapi.co/api/vehicles/'; }
    public static get urlStarships(): string { return 'https://swapi.co/api/starships/'; }
    public static get firstCharacters(): number { return 50; }
    public static nameFilter = 'nombre';
    public static massFilter = 'peso';
    public static heigthFilter = 'altura';
}
