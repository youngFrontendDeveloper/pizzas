import React, {FC, useState} from 'react';
import './App.css';
import AddPizzaForm from "./components/AddPizzaForm";
import Pizza from "./models/Pizza"
import DisplayPizzas from "./components/DisplayPizzas";
import demoPizzas from "./demoPizzas";

const App:FC =()=>{
    const [pizzasList, setPizzasList]=useState<Pizza[]>(demoPizzas)

    console.log(pizzasList)

    const addPizza =(newPizza:Pizza)=>{
        setPizzasList([...pizzasList, newPizza])
    }

    const updatePizza =(newPizza:Pizza)=>{
        setPizzasList(pizzasList.map(pizza=>pizza.id===newPizza.id ? newPizza : pizza))
    }

    const deletePizza=(id: number)=>{
        const newPizzasList =pizzasList.filter(pizza=>pizza.id !==id)
        setPizzasList(newPizzasList)
    }

    return (
        <div className="App">
            <div className="wrap">
                <span className="heading">Наша пиццерия</span>
                <AddPizzaForm addPizza={addPizza}/>
                <DisplayPizzas pizzasList={pizzasList} updatePizza={updatePizza} deletePizza={deletePizza}/>
            </div>

        </div>
    );
}

export default App;


// let pizza: string = "Salami";
// let price: number = 245;
// let pizzas: string[] = ["Salami", "Saussage"];
// let prices: number[] = [245, 385]
//
// type Order = {
//     title: string,
//     quantity?: number,
// }
//
// let order: Order = {
//     title: "Margarita",
//     // quantity: 5,
// }
//
// let orders: Order[] = [
//     {
//         title: "Margarita",
//         quantity: 2,
//     },
//     {
//         title: "Onegin",
//     }
// ]
//
// let number: null | number = null;
// number = 20;
// type PrintTitle = (title: string) => string;
//
// const printTitle: PrintTitle = (title: string) => {
//     console.log(title);
//     return title;
// }
//
// let test: unknown = undefined;
//
// printTitle("Margarita")
//
// type X = {
//     a: string,
//     b: number,
// }
//
// type Y = X & {
//     c: boolean,
//     d: string,
// }
//
// let obj: Y = {
//     a: " Pizza",
//     b: 5,
//     c: true,
//     d: "str"
// }
//
// interface Country {
//     country: string,
// }
//
// interface BMW extends Country {
//     model: string,
//     year: number,
// }
//
// let bmw: BMW = {
//     model: "5",
//     year: 2023,
//     country: "Germany"
// }

