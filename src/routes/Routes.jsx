import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
// import Surah from "../pages/surah/surah/Surah";
import ErrorComponent from "../components/error-component/ErrorComponent";
import React, { Suspense } from "react";

const SurahPage = React.lazy(() => import('../pages/surah/surah/Surah'))

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorComponent errorType='Something Went Wrong' errorText='Please Check Your Internet Connection'></ErrorComponent>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/surah/:surahId/page/:pageNum',
                element: <Suspense fallback={<p>Loading ...</p>}>
                    <SurahPage></SurahPage>
                </Suspense>
            }
        ]
    }
])