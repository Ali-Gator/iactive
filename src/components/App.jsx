import '../index.css';
import {Header} from './Header';
import {Messages} from './Messages';


let formData = new FormData();
formData.append('actionName', 'MessagesLoad');
formData.append('messageId', '0');


const messagesData = fetch('http://f0665380.xsph.ru', {
    method: 'POST',
    body: formData
}).then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`))
    .then(data => console.log(data))
    .catch(err => console.log(err));

function App() {
    return (
        <div className="page">
            <Header/>
            <main>
                <Messages/>
            </main>
        </div>
    );
}

export default App;
