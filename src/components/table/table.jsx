import { useState } from "react";
import Filter from "./filter/filter";
import Pagination from "./pagination/pagination";
import "./table.scss"



const Table = (props) => {

    // Пагинация 
    const [currentPage, setCurrentPage] = useState(1)
    const [displayItems] = useState(5)

    const lastItemIndex = currentPage * displayItems;
    const firstItemIndex = lastItemIndex - displayItems;
    const currentItem = props.date.slice(firstItemIndex, lastItemIndex);
    const dateLenght = props.date.length;

    const paginate = (number) => {
        setCurrentPage(number)
    };

    //Кнопки переключения 
    const nextPage = () => {
        if (currentPage == Math.ceil(dateLenght / displayItems)) {
            setCurrentPage(1)
        }
        else {
            setCurrentPage(prev => prev + 1)
        }
    };

    const prevPage = () => {
        if (currentPage == 1) {
            setCurrentPage(Math.ceil(dateLenght / displayItems))
        }
        else {
            setCurrentPage(prev => prev - 1)
        }
    };

    return (
        <div className="main">
            <div className="table">
                <table className="table-body">
                    <caption className="table-body__title">Таблица</caption>
                    <tr className="table-body__subtitle table-subtible">
                        <th className="table-subtible__item">Дата</th>
                        <th className="table-subtible__item">Наименование</th>
                        <th className="table-subtible__item">Количество шт.</th>
                        <th className="table-subtible__item">Расстояние км.</th>
                    </tr>
                    {currentItem.map(
                        item => (
                            <tr key={item.id} className="table-body__string">
                                <td className="table-body__item">{item.date}</td>
                                <td className="table-body__item">{item.name}</td>
                                <td className="table-body__item">{item.amount}</td>
                                <td className="table-body__item">{item.distance}</td>
                            </tr>
                        )
                    )}
                </table>
                <Filter date={props.date} setDate={props.setDate} dateReset={props.dateReset} />
            </div>
            <Pagination displayItems={displayItems} dateLenght={dateLenght} paginate={paginate} />
            <div className="table-btn">
                <button className="table-btn__item" onClick={() => { prevPage() }}>Предыдущая страница</button>
                <button className="table-btn__item" onClick={() => { nextPage() }}>Следующая страница</button>
            </div>
        </div>
    )
}
export default Table;