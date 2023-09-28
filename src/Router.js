import {useRoutes} from "react-router";
import IndexLayout from "./layouts/IndexLayout";
import {useSelector} from "react-redux";
import AuthenticationLayout from "./layouts/AuthenticationLayout";
import WalletLayout from "./layouts/wallet/WalletLayout";
import WalletList from "./components/wallet/WalletList";
import WalletShowComponent from "./components/wallet/single/WalletShowComponent";

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
            {
                path: '/wallets',
                element: <WalletLayout generalData={generalData} />,
                children: [
                    { path: '/wallets', element: <WalletList /> },
                    { path: '/wallets/:walletId', element: <WalletShowComponent /> }
                ]
            }
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
