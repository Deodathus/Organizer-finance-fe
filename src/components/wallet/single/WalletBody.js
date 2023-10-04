import WalletItem from "./WalletItem";
import WalletTransactionsList from "../../walletTransaction/WalletTransactionsList";
import {Box, SimpleGrid} from "@chakra-ui/react";
import CreateWalletTransactionFormComponent from "../../walletTransaction/create/CreateWalletTransactionFormComponent";

export default function WalletBody(props) {
    const wallet = props.wallet;

    return (
        <>
            <SimpleGrid columns={{sm:1, md: 1, lg: 2}} className='pageBody'>
                <Box>
                    <WalletItem wallet={wallet} />
                    <CreateWalletTransactionFormComponent
                        walletCurrencyCode={wallet.currencyCode}
                        walletId={wallet.id}
                        rerenderFunction={props.rerenderFunction}
                    />
                </Box>
                <Box>
                    <WalletTransactionsList walletId={wallet.id} currencyCode={wallet.currencyCode} />
                </Box>
            </SimpleGrid>
        </>
    );
}
