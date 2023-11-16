import {Box, Button, SimpleGrid} from "@chakra-ui/react";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import ExpenseCategoryFetchReducer from "../../stores/reducers/expenseCategory/ExpenseCategoryFetchReducer";
import ExpenseCategoryFetchActionCreator from "../../stores/actions/expenseCategory/ExpenseCategoryFetchActionCreator";
import CurrencyFetchReducer from "../../stores/reducers/currency/CurrencyFetchReducer";
import CurrencyFetchActionCreator from "../../stores/actions/currency/CurrencyFetchActionCreator";
import CreateExpenseFormComponent from "./create/CreateExpenseFormComponent";
import WalletFetchReducer from "../../stores/reducers/wallet/WalletFetchReducer";
import WalletFetchActionCreator from "../../stores/actions/wallet/WalletFetchActionCreator";
import ExpensesList from "./ExpensesList";
import ExpenseFetchReducer from "../../stores/reducers/expense/ExpenseFetchReducer";
import ExpenseFetchActionCreator from "../../stores/actions/expense/ExpenseFetchActionCreator";
import {useSearchParams} from "react-router-dom";

export default function ExpensePageContent() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    let page = searchParams.get('page');
    if (page == null) {
        page = 1;
    }

    useEffect(() => {
        dispatch(
            ExpenseCategoryFetchReducer.fetchAll(
                ExpenseCategoryFetchActionCreator.fetchAll()
            )
        );
    }, []);

    useEffect(() => {
        dispatch(
            CurrencyFetchReducer.fetchAll(
                CurrencyFetchActionCreator.fetchAll()
            )
        );
    }, []);

    useEffect(() => {
        dispatch(
            WalletFetchReducer.fetchAll(
                WalletFetchActionCreator.fetchAll()
            )
        );
    }, []);

    useEffect(() => {
        dispatch(
            ExpenseFetchReducer.fetchAll(
                ExpenseFetchActionCreator.fetchAll(page)
            )
        );
    }, []);

    function redirectToCreateWalletPage() {
        navigate('/expenses/category/create');
    }

    return (
        <>
            <>
                <SimpleGrid columns={{sm:1, md: 1, lg: 2}} className='pageBody'>
                    <Box>
                        <Button onClick={redirectToCreateWalletPage} variant='solid' colorScheme='orange' className='addWalletButton'>
                            Add category
                        </Button>
                        <CreateExpenseFormComponent />
                    </Box>
                    <Box>
                        <ExpensesList />
                    </Box>
                </SimpleGrid>
            </>
        </>
    );
}
