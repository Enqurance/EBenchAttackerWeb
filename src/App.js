import {Container} from "@mui/material";
import Navigator from "./components/Navigator";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";

function App() {
    return (
        <Container maxWidth="100vh">
            <Container maxWidth="md">
                <Router>
                    <Navigator/>
                    <Routes>
                        <Route path="/" element={<Homepage/>}/>
                    </Routes>
                    <Footer></Footer>
                </Router>
            </Container>
        </Container>
    );
}

export default App;
