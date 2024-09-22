import { useState } from 'react';
import './App.css';
import Navbar from './assets/Navbar.jsx';
import Testform from './assets/Testform.jsx';
import Alert from './assets/Alert.jsx';

function App() {
    const [mode, setMode] = useState('dark');
    const [alert, setAlert] = useState(null);

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = "#6a5295";
            showAlert("Dark mode is enabled", "success");
        } else {
            setMode('light');
            document.body.style.backgroundColor = "white";
            showAlert("Light mode is enabled", "success");
        }
    }

    const showAlert = (message, type) => {
        console.log("showAlert called with:", message, type); // Debugging log
        setAlert({
            msg: message,
            type: type
        });

        // Clear the alert after 3 seconds
        setTimeout(() => {
            setAlert(null);
        }, 3000);
    }

    return (
        <>
            <Navbar mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <div className={`container ${mode}`}>
                <Testform heading="Enter the content" />
                {/* <About /> */}
            </div>
        </>
    )
}

export default App;
