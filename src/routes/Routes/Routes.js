import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home";
import ServicesAll from "../../pages/Home/Services/ServicesAll/ServicesAll";
import Login from "../../pages/Login/Login";
import PerDetails from "../../pages/PerDetails/PerDetails";
import Registration from "../../pages/Registration/Registration";
import UserReview from "../../pages/UserReview/UserReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/perdetails/:id',
                element: <PrivateRoute><PerDetails></PerDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/userreview',
                element: <PrivateRoute><UserReview></UserReview></PrivateRoute>
            },
            {
                path: '/servicesall',
                element: <ServicesAll></ServicesAll>
            }


        ]
    }
])
export default router;