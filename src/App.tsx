import { FunctionComponent } from "react";
import TodoPage from "features/todos/components/TodoPage.tsx";
import Sidebar from "features/sidebar/components/Sidebar.tsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ROUTES } from "utilities/constants.ts";

const App: FunctionComponent = () => {
  return (
    <Router>
      <div className="d-flex" style={{ height: "100vh" }}>
        <Sidebar />
        <main className="p-4 w-100">
          <Routes>
            <Route path={ROUTES.HOME} element={<TodoPage />} />
            <Route path={ROUTES.TODOS} element={<TodoPage />} />
            <Route path={ROUTES.TODOS_LIST} element={<TodoPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
