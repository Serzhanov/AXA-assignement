export interface Hero{
    name:string,
    id:number,
    age:number,
    hair_color:string,
    height:number,
    weight:number
    friends:string[],
    thumbnail:string,
    professions:string[]
}
export interface HeroesData{
    Brastlewark:Hero[]
}