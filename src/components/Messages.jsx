import {Card} from './Card';

export function Messages() {
    return <section className="messages">
        <ul className="messages__list">
            <li className="messages__item">
                <Card/>
            </li>
        </ul>
    </section>;
}