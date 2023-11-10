import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home"
import Layout from "../layout/Layout";

const routes = [
    {
        path: "/",
        element: <Home />
    }
]

const AllRoutes = () => {
    return (
        <Router>
            <Routes>
                {
                    routes &&
                    routes.map(({ path, element }, index) => {
                        return (
                            <Route key={index} path={path} element={
                                <Layout>{element}</Layout>
                            } />
                        )
                    })
                }
            </Routes>
        </Router>
    )
}

export default AllRoutes