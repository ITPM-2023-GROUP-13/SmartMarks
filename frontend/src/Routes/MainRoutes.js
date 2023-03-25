import { createBrowserRouter} from "react-router-dom";

import TeacherRoutes from "./TeacherRoutes";
import StudentRoutes from "./StudentRoutes";
import LoginRoute from "./LoginRoute";

const MainRoutes = createBrowserRouter ([LoginRoute,TeacherRoutes,StudentRoutes]);

export default MainRoutes;