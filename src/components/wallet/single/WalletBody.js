import WalletItem from "./WalletItem";
import WalletTransactionsList from "../../walletTransaction/WalletTransactionsList";
import {Box, SimpleGrid} from "@chakra-ui/react";

export default function WalletBody(props) {
    const wallet = props.wallet;

    return (
        <>
            <SimpleGrid columns={{sm:1, md: 1, lg: 2}} className='walletBody'>
                <Box>
                    <WalletItem wallet={wallet} />
                </Box>
                <Box>
                    <WalletTransactionsList walletId={wallet.id} currencyCode={wallet.currencyCode} />
                </Box>
            </SimpleGrid>
        </>
    );
}
