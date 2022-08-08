import { useState } from "react";
import "./filter.scss"

const Filter = (props) => {
    
    // Для сохранения значений в форме 
    const [valueTitle, setValueTitle] = useState("name")
    const [valueOperand, setValueOperand] = useState("equals")
    const [valueInput, setValueInput] = useState('');

    // Функция для сброса фильтрации 
    const dateReset = () => {
        props.setDate(props.dateReset)
    }

    // Функция для фильтрации 
    const filterArr = () => {
        if (valueOperand === "equals") {
            const result = props.date.filter((el) => el[valueTitle] == valueInput);
            props.setDate(result)
        }
        else if (valueOperand === "contains") {
            const result = props.date.filter((el) => el[valueTitle].includes(valueInput));
            props.setDate(result)
        }
        else if (valueOperand === "more") {
            const result = props.date.filter((el) => el[valueTitle] > Number(valueInput));
            props.setDate(result)
        }
        else if (valueOperand === "less") {
            const result = props.date.filter((el) => el[valueTitle] < Number(valueInput));
            props.setDate(result)
        }
    }
    return (
        <div className="filter">
            <select className="filter-title title-filter" name="table-title" id="select1" onChange={(event) => (setValueTitle(event.target.value))}>
                <option className="title-filter__item" value="name">Наименование</option>
                <option className="title-filter__item" value="amount">Количество</option>
                <option className="title-filter__item" value="distance">Расстояние</option>
            </select>
            <select className="filter-operand operand-filter" name="table-operand" id="select2" onChange={(event) => (setValueOperand(event.target.value))}>
                <option className="operand-filter__item" value="equals">Равен</option>
                <option className="operand-filter__item" value="contains">Содержит</option>
                <option className="operand-filter__item" value="more">Больше чем</option>
                <option className="operand-filter__item" value="less">Меньше чем</option>
            </select>
            <input type="text" placeholder="Введите значение" name='input'
                className="filter-input"
                value={valueInput}
                onChange={(event) => (setValueInput(event.target.value))} />
            <button className="filter-btn" onClick={filterArr}>Отсортировать</button>
            <button className="filter-btn" onClick={dateReset}>Сброс</button>
        </div>
    )
}

export default Filter;