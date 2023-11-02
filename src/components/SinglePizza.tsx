import React, {FC, MouseEventHandler, useState} from "react"
import Pizza from "../models/Pizza";
import {AiFillEdit, AiFillDelete} from "react-icons/ai"
import EditPizzaForm from "../components/EditPizzaForm"

interface SinglePizzaProps {
    pizza: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void
}

const SinglePizza: FC<SinglePizzaProps> = ({pizza, updatePizza, deletePizza}) => {
    const [edit, setEdit] = useState<boolean>(false)

    const handleToggleEdit = () => {
        setEdit(!edit)
    }

    const handleDelete=()=>{
        deletePizza(pizza.id)
    }

    return (
        <div className="pizza">
            <img src={`/images/${pizza.img}`} alt={pizza.title} />
            <h2>{pizza.title}</h2>
            <span>{pizza.price} ₽</span>

            <div className="pizza-controls">
                <button onClick={handleToggleEdit}>
                    <AiFillEdit />
                </button>
                <button onClick={handleDelete}>
                    <AiFillDelete />
                </button>
            </div>

            {
                edit ? <EditPizzaForm
                    data={pizza}
                    updatePizza={updatePizza}
                    handleToggleEdit={handleToggleEdit}
                /> : null
            }
        </div>
    )
}

export default SinglePizza