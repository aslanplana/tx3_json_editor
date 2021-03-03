import * as React from "react";
import {TablePagination} from "@material-ui/core";
import './ArrayField.css'
import {createObject} from "./helpers";
import ItemsRows from "./ItemsTable/ItemsTable";
import {useEffect, useState} from "react";

interface Props {
    field?: any
    json?: any
    name?: string
    onChange?: any
    onClick?: any
    way: string
}

const ArrayField: React.FC<Props> = ({field, json = [], name, onChange, onClick, way}) => {
    console.log('LOOG', onChange)
    const onChangeInArray = (i, value) => {
        const newArray = [...json]
        newArray[i] = value
        onChange(name, newArray)
    }

    const handleClickAddItem = () => {
        const newArray = [...json]
        if (field.innerType.type === 'string') {
            newArray.push('')
        } else {
            const newObj = createObject(field.innerType)
            newArray.push(newObj)
        }
        handleClickItem(newArray, newArray.length-1)
        onChange(name, newArray)
    }

    const handleClickRemoveItem = (index) => {
        const newArray = json.filter((item, i) => i !== index)
        onChange(name, newArray)
    }

    const handleClickItem = (item, i) => {
        onClick(field.innerType, item, onChangeInArray, i, onClick, way+'>'+name + (i + 1))
    }

    return (
        <div className='array-edit-container'>
            <div className='edit-title-array'>
                <h2>{name}</h2>
            </div>
            <div>
                <ItemsRows
                    json={json}
                    field={field.innerType}
                    onClick={handleClickItem}
                    removeItem={handleClickRemoveItem}
                    addItem={handleClickAddItem}
                />
            </div>
        </div>
    )
}

export default ArrayField