import "./pagination.scss"

const Pagination = (props) => {

    // Массив для динамического отображения пагинации
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(props.dateLenght / props.displayItems); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="pagination">
            <ul className="pagination__list list">
                {
                    pageNumbers.map(number => (
                        <li className="list__item" key={number}>
                            <button className="list__btn" onClick={() => { props.paginate(number) }}>{number}</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Pagination;