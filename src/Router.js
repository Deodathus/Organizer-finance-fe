import {useRoutes} from "react-router";
import IndexLayout from "./layouts/IndexLayout";
import {useSelector} from "react-redux";
import AuthenticationLayout from "./layouts/AuthenticationLayout";
import WalletLayout from "./layouts/wallet/WalletLayout";
import WalletShowComponent from "./components/wallet/single/WalletShowComponent";
import CreateWalletFormComponent from "./components/wallet/create/CreateWalletFormComponent";
import WalletPageContent from "./components/wallet/WalletPageContent";
import ExpenseLayout from "./layouts/expense/ExpenseLayout";
import ExpensePageContent from "./components/expense/ExpensePageContent";
import CreateExpenseCategoryFormComponent from "./components/expenseCategory/create/CreateExpenseCategoryFormComponent";
import PageNotFoundLayout from "./layouts/PageNotFoundLayout";

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
                    { path: '/wallets', element: <WalletPageContent /> },
                    { path: '/wallets/:walletId', element: <WalletShowComponent /> },
                    { path: '/wallets/create', element: <CreateWalletFormComponent /> }
                ]
            },
            {
                path: '/expenses',
                element: <ExpenseLayout generalData={generalData} />,
                children: [
                    { path: '/expenses', element: <ExpensePageContent /> },
                    { path: '/expenses/category/create', element: <CreateExpenseCategoryFormComponent /> }
                ]
            },
            {
                path: '*',
                element: <PageNotFoundLayout generalData={generalData} shouldRedirectToMain={false} />
            }
        ]);
    } else {
        return useRoutes([
            {
                path: '/',
                element: <AuthenticationLayout generalData={generalData} />
            },
            {
                path: '*',
                element: <PageNotFoundLayout generalData={generalData} shouldRedirectToMain={true} />
            },
        ]);
    }
}
