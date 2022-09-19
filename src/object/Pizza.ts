export interface Pizza {
    name: string,
    price: number,
    ingredients: Ingredient[],
    size: number,
    image: string
}

export class Ingredient {

    public readonly name!: string;
    public readonly icon!: string;

    public static readonly TOMATO: Ingredient = new Ingredient('Tomato', '/src/assets/ingredients/tomato.svg');
    public static readonly MUSHROOM: Ingredient = new Ingredient('Mushroom', '/src/assets/ingredients/mushroom.svg');
    public static readonly CHEESE: Ingredient = new Ingredient('Cheese', '/src/assets/ingredients/cheese.svg');
    public static readonly HAM: Ingredient = new Ingredient('Ham', '/src/assets/ingredients/ham.svg');

    constructor(name: string, icon: string) {
        this.name = name;
        this.icon = icon;
    }
}