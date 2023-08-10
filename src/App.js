
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Insert from "./Insert";
import Update from "./Update";
import Display from "./Display";
import Home from "./Home";
import Search from "./Search";
import Delete from "./Delete";
import Editrec from "./Editrec"
const App=()=>
{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/insert" element={<Insert />} />
            <Route path="/update" element={<Update />} />
            <Route path="/display" element={<Display />} />
            <Route path="/search" element={<Search />}/>
            <Route path="/delete" element={<Delete />}/>
            <Route path="/Editrec/:id" element={<Editrec />}/>
            </Route>
        </Routes>
        </BrowserRouter>
        
        
        </>
    );
}
export default App;