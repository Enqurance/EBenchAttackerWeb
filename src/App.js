import {Container} from "@mui/material";
import Navigator from "./components/Navigator";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from "./components/Homepage";
import Leaderboard from "./components/Leaderboard";
import Footer from "./components/Footer";

function App() {
    return (
        <Container maxWidth="100=vh">
            <Container maxWidth="lg">
                <Router>
                    <Navigator/>
                    <Routes>
                        <Route path="/" element={<Homepage/>}/>
                        <Route path="/leaderboard" element={<Leaderboard/>}/>
                    </Routes>
                    <Footer/>
                </Router>
            </Container>
        </Container>
    );
}

export default App;
