import {useRoutes} from "react-router";
import IndexLayout from "./layouts/IndexLayout";
import {useSelector} from "react-redux";
import AuthenticationLayout from "./layouts/AuthenticationLayout";

export default function Router() {

    const version = useSelector((state) => state.data.general.version);
    const year = useSelector((state) => state.data.general.year);

    const generalData = {
        version,
        year
    };

    const token = useSelector((state) => state.user.me.token);
    if (token !== null && token.length > 0) {
        return useRoutes([
            {
                path: '/',
                element: <IndexLayout generalData={generalData} />
            },
        ]);
    } else {
        return useRoutes([
            {
                path: '/',
                element: <AuthenticationLayout generalData={generalData} />
            }
        ]);
    }
}
