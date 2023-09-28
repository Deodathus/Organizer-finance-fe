import {useRoutes} from "react-router";
import IndexLayout from "./layouts/IndexLayout";
import {useSelector} from "react-redux";

export default function Router() {

    const version = useSelector((state) => state.data.general.version);
    const year = useSelector((state) => state.data.general.year);

    const generalData = {
        version,
        year
    };

    return useRoutes([
        {
            path: '/',
            element: <IndexLayout generalData={generalData} />
        },
    ]);
}
