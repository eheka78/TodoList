import Test from './component/Test';
import TimeTablePage from './component/TimeTablePage.js';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
    const [hello, setHello] = useState('');

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);



    return (
    <div>
        <div>
            TEST || 백엔드에서 가져온 데이터입니다 : {hello}
        </div>

        <Test />
        <TimeTablePage />
    </div>
    );
}

export default App;
