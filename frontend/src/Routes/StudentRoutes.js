import React from "react";
import { createBrowserRouter } from "react-router-dom";

import StudentLayout from '../Layouts/StudentLayout';
import HomeStudent from '../Views/StudentViews/StudentHome';

const StudentRoutes = 
// createBrowserRouter ([
  {
    path: "/Student",
    element: <StudentLayout />,
    children: [
    //   {
    //     path: "/HomeTeacher",
    //     element: <HomeTeacher />,
    //   },
      {
        path: "/Student",
        element: <HomeStudent/>,
      }

    ]}
  // ])
        

export default StudentRoutes;