import {Card} from './Card';
import React, {useState} from 'react';

export function Messages() {
    const [posts, setPosts] = useState([]);
    const [lastCardId, setLastCardId] = useState(0);
    const [time, setTime] = useState(0);
    const [direction, serDirection] = useState(true);

    function getFormData(cardId = 0) {
        let formData = new FormData();
        formData.append('actionName', 'MessagesLoad');
        formData.append('messageId', cardId.toString());
        return formData;
    }

    function getPosts() {
        return fetch('http://f0665380.xsph.ru', {
            method: 'POST',
            body: getFormData(lastCardId)
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`))
            .then(data => {
                if (data.Messages) {
                    setPosts((prevPosts) => {
                        if (prevPosts.length > 0) {
                            for (let i = 0; i < data.Messages.length; i++) {
                                if (!prevPosts.some(prevPost => prevPost.id === data.Messages[i].id)) {
                                    direction
                                        ? prevPosts.push(data.Messages[i])
                                        : prevPosts.unshift(data.Messages[i]);
                                }
                            }
                            return prevPosts;
                        } else {
                            return data.Messages;
                        }
                    });
                    setLastCardId(data.Messages[data.Messages.length - 1].id);
                }
            })
            .catch(err => console.log(err));
    }

    React.useEffect(() => {
        setTimeout(() => setTime(new Date()), 5000);
        getPosts();
    }, [time]);

    function handleDirection() {
        serDirection(!direction);
        setPosts(posts.reverse());
    }

    return <section className="messages">
        <button onClick={handleDirection}>Переключить ↑↓</button>
        <ul className="messages__list">
            {posts.map(post => (
                <Card key={post.id} author={post.author} content={post.content} date={post.date} id={post.id}/>
            ))}
        </ul>
    </section>;
}