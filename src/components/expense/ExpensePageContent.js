import {Box, Button} from "@chakra-ui/react";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import ExpenseCategoryFetchReducer from "../../stores/reducers/expenseCategory/ExpenseCategoryFetchReducer";
import ExpenseCategoryFetchActionCreator from "../../stores/actions/expenseCategory/ExpenseCategoryFetchActionCreator";
import CurrencyFetchReducer from "../../stores/reducers/currency/CurrencyFetchReducer";
import CurrencyFetchActionCreator from "../../stores/actions/currency/CurrencyFetchActionCreator";

export default function ExpensePageContent() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

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

    function redirectToCreateWalletPage() {
        navigate('/expenses/category/create');
    }

    return (
        <>
            <>
                <Box className='pageBody'>
                    <Button onClick={redirectToCreateWalletPage} variant='solid' colorScheme='orange' className='addWalletButton'>
                        Add category
                    </Button>
                </Box>
            </>
        </>
    );
}
