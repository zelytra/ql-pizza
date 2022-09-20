export interface Pizza {
    name: string,
    price: number,
    ingredients: Ingredient[],
    size: number,
    image: string
}

export interface PizzaBasket {
    pizza: Pizza,
    count: number
}

export class Basket {
    public basket: Pizza[] = [];

    constructor() {
    }

    public getFormatedBasket(): PizzaBasket[] {
        const list: PizzaBasket[] = [];
        this.basket.forEach(x => {

            //Push if empty list
            if (list.length <= 0) {
                list.push({pizza: x, count: 1});
                return;
            }

            // Increment count if pizza already in list
            for (let y of list) {
                if (y.pizza.name == x.name) {
                    y.count++;
                    return;
                }
            }

            // Push new pizza if not in list
            list.push({pizza: x, count: 1});

        })
        return list;
    }

    public getTotal(): number {
        let total = 0;
        this.basket.forEach(x => total += x.price)
        return total;
    }
}

export class Ingredient {

    public readonly name!: string;
    public readonly icon!: string;

    public static readonly TOMATO: Ingredient = new Ingredient('Pomodoro', '/src/assets/ingredients/tomato.svg');
    public static readonly MUSHROOM: Ingredient = new Ingredient('Fungo', '/src/assets/ingredients/mushroom.svg');
    public static readonly CHEESE: Ingredient = new Ingredient('Fromaggio', '/src/assets/ingredients/cheese.svg');
    public static readonly HAM: Ingredient = new Ingredient('Prosciutto ', '/src/assets/ingredients/ham.svg');
    public static readonly OLIVE: Ingredient = new Ingredient('Oliva', '/src/assets/ingredients/olive.png');
    public static readonly EGG: Ingredient = new Ingredient('Uovo', '/src/assets/ingredients/egg.png');
    public static readonly CHORIZO: Ingredient = new Ingredient('Chorizo', '/src/assets/ingredients/chorizo.png');
    public static readonly ARTICHOKE: Ingredient = new Ingredient('Carciofo', '/src/assets/ingredients/artichoke.png');
    public static readonly FISH: Ingredient = new Ingredient('Pesce', '/src/assets/ingredients/fish.png');
    public static readonly GARLIC: Ingredient = new Ingredient('Aglio', '/src/assets/ingredients/garlic.png');
    public static readonly MEAT: Ingredient = new Ingredient('Carne', '/src/assets/ingredients/meat.png');
    public static readonly ONION: Ingredient = new Ingredient('Cipolla', '/src/assets/ingredients/onion.png');
    public static readonly PEPPER: Ingredient = new Ingredient('Peproni', '/src/assets/ingredients/pepper.png');
    public static readonly SALMON: Ingredient = new Ingredient('Salmone', '/src/assets/ingredients/salmon.png');
    public static readonly SURPRISE: Ingredient = new Ingredient('Sorpresa', '/src/assets/ingredients/surprise.png');
    public static readonly TUNA: Ingredient = new Ingredient('Tonno', '/src/assets/ingredients/tuna.png');
    public static readonly CREAM: Ingredient = new Ingredient('Panna Acida', '/src/assets/ingredients/cream.png');
    public static readonly POTATOES: Ingredient = new Ingredient('Patata', '/src/assets/ingredients/potatoes.png');


    constructor(name: string, icon: string) {
        this.name = name;
        this.icon = icon;
    }
}