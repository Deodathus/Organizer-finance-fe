import {useSelector} from "react-redux";
import WalletTransactionListItem from "./WalletTransactionListItem";
import {SimpleGrid} from "@chakra-ui/react";

export default function WalletTransactionsList(props) {
    const walletId = props.walletId;
    const transactions = useSelector(state => state.walletTransaction.elements[walletId]);

    let renderedTransactions = [];

    if (transactions !== null && transactions !== undefined) {
        for (let i = 0; i < Object.keys(transactions).length; i++) {
            renderedTransactions.push(
                <WalletTransactionListItem
                    transaction={Object.values(transactions)[i]}
                    currencyCode={props.currencyCode}
                    key={i + '_' + walletId}
                />
            );
        }
    }

    return (
        <>
            <SimpleGrid columns={{sm: 2, md: 2, lg: 3}}>
                {renderedTransactions}
            </SimpleGrid>
        </>
    );
}
