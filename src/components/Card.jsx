import avatar from '../images/avatar.png';
import picture from '../images/picture.png';
import {useEffect, useState} from 'react';


export function Card({author, content, date, id}) {
    const dateObj = new Date(date);
    const dateStr = `${dateObj.getHours()}:${dateObj.getMinutes()}`;
    const [favourite, setFavourite] = useState(false);

    function handleFavouriteClick() {
        setFavourite(!favourite);
    }

    useEffect(() => {
            setFavourite(localStorage.getItem(`favourite${id}`) === 'true');

    }, []);

    useEffect(() => {
        localStorage.setItem(`favourite${id}`, `${favourite}`);
    }, [favourite]);

    return <li className="messages__item" id={id}>
        <article className="card">
            <img className="card__user-avatar" src={avatar}/>
            <p className="card__author">{author}</p>
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
                <li className={`card__icon-item card__icon-item_type_favorite ${favourite ? 'card__icon-item_type_favorite-active' : ''}`}>
                    <button className="card__icon-button" onClick={handleFavouriteClick}></button>
                </li>
            </ul>
            <span className="card__time">{dateStr}</span>
            <p className="card__text">{content}</p>
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
        </article>
    </li>;
}