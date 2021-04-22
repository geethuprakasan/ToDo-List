import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AnalyticsPage from "./pages/analytics";
import HomePage from "./pages/home";
import SideBar from "./components/SideBar/SideBar";
import CreateTaskPage from "./pages/createTask";
import "antd/dist/antd.css";
import LoginPage from "./pages/login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("login-info"));
    if (userInfo) {
      const action = {
        type: "LOGIN",
        payload: userInfo,
      };
      dispatch(action);
    }

    const tasks = JSON.parse(localStorage.getItem("savedTasks"));
    if (tasks) {
      dispatch({
        type: "ADD_TASKS_LIST",
        payload: tasks,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Router>
          {auth.login && <SideBar />}
          <div style={{ marginLeft: auth.login ? "300px" : "0px" }}>
            {auth.login ? (
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Route exact path="/analytics">
                  <AnalyticsPage />
                </Route>
                <Route exact path="/newtask">
                  <CreateTaskPage />
                </Route>
              </Switch>
            ) : (
              <Switch>
                <Route path="/">
                  <LoginPage />
                </Route>
              </Switch>
            )}
          </div>
        </Router>
      </div>
    </DndProvider>
  );
}

export default App;
