import {useSelector} from "react-redux";
import WalletTransactionListItem from "./WalletTransactionListItem";
import {Box, SimpleGrid} from "@chakra-ui/react";
import ReactPaginate from "react-paginate";
import {useNavigate} from "react-router";
import {useSearchParams} from "react-router-dom";
import PaginatorEnum from "../../utils/dictionaries/config/PaginatorEnum";

export default function WalletTransactionsList(props) {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const walletId = props.walletId;
    const transactions = useSelector(state => state.walletTransaction[walletId]);

    let renderedTransactions = [];
    let totalPages = 0;

    if (transactions !== null && transactions !== undefined && transactions.elements.length > 0) {
        totalPages = transactions.total / PaginatorEnum.WALLET_TRANSACTION_PER_PAGE;

        for (let i = 0; i < Object.keys(transactions.elements).length; i++) {
            renderedTransactions.push(
                <WalletTransactionListItem
                    transaction={Object.values(transactions.elements)[i]}
                    currencyCode={props.currencyCode}
                    key={i + '_' + walletId}
                />
            );
        }
    }

    function handlePageChange(event) {
        let urlToNavigate = '/wallets/'+ walletId +'?page=' + (event.selected + 1);

        navigate(urlToNavigate);
    }

    return (
        <>
            <SimpleGrid columns={{sm: 1, md: 1, lg: 3}}>
                {renderedTransactions}
            </SimpleGrid>
            <Box className='paginator'>
                <ReactPaginate
                    renderOnZeroPageCount={null}
                    onPageChange={(e) => {handlePageChange(e)}}
                    pageCount={Math.ceil(totalPages)}
                />
            </Box>
        </>
    );
}
