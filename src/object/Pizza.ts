export interface Pizza {
    name: string,
    price: number,
    ingredients: Ingredient[],
    size:number,
    image:string
}

export interface Ingredient {
    name: string,
    icon: string
}