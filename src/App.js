import {Routes, Route, Link} from 'react-router-dom';
import CreateTable from "./pages/CreateTable";
import ViewTable from "./pages/ViewTable";
import DropTable from "./pages/DropTable";
import Queries from "./pages/Queries";
import Layout from "./pages/Layout";
import AddRecord from "./pages/AddRecord";
import HomeIcon from "@mui/icons-material/Home";

function App() {
    return (
        <div className="App">
            <div>
                <Link to="/"><HomeIcon sx={{
                    fontSize: '40px'
                }}/></Link>
            </div>
            <div className={"text-center"}>
                <h1 className={"text-3xl font-extrabold"}>CAR RENTAL DBMS MENU</h1>
                <Routes>
                    <Route path="/" element={<Layout />} />
                    <Route path="/create" element={<CreateTable />} />
                    <Route path="/view" element={<ViewTable />} />
                    <Route path="/drop" element={<DropTable />} />
                    <Route path="/add" element={<AddRecord />} />
                    <Route path="/queries" element={<Queries />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
