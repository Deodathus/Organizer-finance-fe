import {useEffect} from "react";
import WalletFetchReducer from "../../stores/reducers/wallet/WalletFetchReducer";
import WalletFetchActionCreator from "../../stores/actions/wallet/WalletFetchActionCreator";
import CurrencyFetchReducer from "../../stores/reducers/currency/CurrencyFetchReducer";
import CurrencyFetchActionCreator from "../../stores/actions/currency/CurrencyFetchActionCreator";
import {useDispatch} from "react-redux";
import WalletList from "./WalletList";
import {Box} from "@chakra-ui/react";

export default function WalletPageContent() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            WalletFetchReducer.fetchAll(
                WalletFetchActionCreator.fetchAll()
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

    return (
        <>
            <Box className='pageBody'>
                <WalletList />
            </Box>
        </>
    );
}
