import avatar from '../images/avatar.png';
import picture from '../images/picture.png';



export function Card() {
    return <article className="card">
        <img className="card__user-avatar" src={avatar}/>
        <p className="card__author">Nina Malofeeva</p>
        <ul className="card__buttons">
            <li className="card__button-item">
                <button className="card__button">Левый</button>
            </li>
            <li className="card__button-item">
                <button className="card__button">Центр</button>
            </li>
            <li className="card__button-item">
                <button className="card__button">Правый</button>
            </li>
        </ul>
        <ul className="card__icons">
            <li className="card__icon-item card__icon-item_type_send">
                <button className="card__icon-button"></button>
            </li>
            <li className="card__icon-item card__icon-item_type_hide">
                <button className="card__icon-button"></button>
            </li>
            <li className="card__icon-item card__icon-item_type_param">
                <button className="card__icon-button"></button>
            </li>
            <li className="card__icon-item card__icon-item_type_favorite">
                <button className="card__icon-button"></button>
            </li>
        </ul>
        <span className="card__time">15:57</span>
        <p className="card__text">"Россия 1" не боится снимать сериалы о сложных и
            неоднозначных периодах в истории нашей страны. Это и "В круге первом", и "Жизнь и
            судьба", и "Зулейха". Идёт работа над "Одним днём Ивана Денисовича". Вопрос Антону
            Златопольскому -почему вы считаете</p>
        <button className="card__next-button">Далее</button>
        <img src={picture} alt="" className="card__picture"/>
        <ul className="card__tags">
            <li className="card__tag">
                <button className="card__tag-button card__tag-button_active">#Новое</button>
            </li>
            <li className="card__tag">
                <button className="card__tag-button">#Эксперт</button>
            </li>
        </ul>
    </article>;
}