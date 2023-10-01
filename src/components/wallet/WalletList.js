import {useSelector} from "react-redux";
import WalletListItem from "./WalletListItem";
import {Button, SimpleGrid} from "@chakra-ui/react";
import {useNavigate} from "react-router";

export default function WalletList(props) {
    const navigate = useNavigate();

    const wallets = useSelector(state => state.wallet.elements);

    let renderedWallets = [];

    for (let i = 0; i < Object.keys(wallets).length; i++) {
        renderedWallets.push(
            <WalletListItem wallet={Object.values(wallets)[i]} key={i} />
        );
    }

    function redirectToCreateWalletPage() {
        navigate('/wallets/create');
    }

    return (
        <>
            <Button onClick={redirectToCreateWalletPage} variant='solid' colorScheme='orange' className='addWalletButton'>
                Add wallet
            </Button>
            <SimpleGrid columns={{sm: 1, md: 2, lg: 4}}>
                {renderedWallets}
            </SimpleGrid>
        </>
    );
}
