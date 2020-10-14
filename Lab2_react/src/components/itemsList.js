import React, { useState } from 'react'
import Item from './item';
import ItemAdder from './ItemAdder';

export default function ItemsList({validateHandler, wrapperClassName, itemClassName, title, changeHandler}) {
    const [items, setItems] = useState([]);

    const deleteHandler = id => {
        setItems(items =>  items.filter(item => item.id !== id));
        changeHandler(items);
    }

    const addHandler = value => 
        setItems(items => {
            const newItems = items.concat({ value: value, id: Date.now()});
            changeHandler(newItems);
            return newItems;
        });
    

    const renderItems = () => {
        return items.map((item, index) => (
            <Item
                value={item.value}
                key={index}
                id={item.id}
                handleDelete = {deleteHandler}
                className = {itemClassName}
            />
        ))
    }


    return (
        <div className={wrapperClassName}>
            <div className="inner">
                <label>{title}</label>
                <ul>
                    {renderItems()}
                </ul>
            </div>
            <ItemAdder
                handleValidate = {validateHandler}
                handleAdd = {addHandler}
            />
        </div>
    )


}