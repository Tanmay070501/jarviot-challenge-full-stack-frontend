import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        </div>
    );
}

export default App;
