import AddService from "../../AddService/AddService";
import Main from "../../Layout/Main";
import Blogs from "../../pages/Blog/Blogs";
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
                loader: ({ params }) => fetch(`https://habib-photography-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/userreview',
                element: <PrivateRoute><UserReview></UserReview></PrivateRoute>
            },
            {
                path: '/serviceadd',
                element: <AddService></AddService>
            },
            {
                path: '/servicesall',
                element: <ServicesAll></ServicesAll>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }



        ]
    }
])
export default router;