import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserListPage from "./Components/userListPage/userListPage";
import UserDetailPage from "./Components/userDetailPage/userDetailPage";

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/userListPage" element={<UserListPage />}></Route>
          <Route path="/userDetailPage/:id" element={<UserDetailPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
