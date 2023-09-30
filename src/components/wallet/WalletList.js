import {useSelector} from "react-redux";
import WalletListItem from "./WalletListItem";
import {SimpleGrid} from "@chakra-ui/react";

export default function WalletList(props) {
    const wallets = useSelector(state => state.wallet.elements);

    let renderedWallets = [];

    for (let i = 0; i < Object.keys(wallets).length; i++) {
        renderedWallets.push(
            <WalletListItem wallet={Object.values(wallets)[i]} key={i} />
        );
    }

    return (
        <>
            <SimpleGrid columns={{sm: 1, md: 2, lg: 4}}>
                {renderedWallets}
            </SimpleGrid>
        </>
    );
}
