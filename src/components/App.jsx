import '../index.css';
import {Header} from './Header';
import {Messages} from './Messages';

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
