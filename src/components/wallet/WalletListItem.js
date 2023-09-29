import {Box, Card, CardBody, Stat, StatLabel, StatNumber} from "@chakra-ui/react";
import {Link} from "react-router-dom";

export default function WalletListItem(props) {
    const wallet = props.wallet;

    return (
        <>
            <Box className='walletListItem'>
                <Link to={'/wallets/' + wallet.id}>
                    <Card maxW='sm'>
                        <CardBody>
                            <Stat>
                                <StatLabel>{wallet.name}</StatLabel>
                                <StatNumber>{wallet.balance} {wallet.currencyCode}</StatNumber>
                            </Stat>
                        </CardBody>
                    </Card>
                </Link>
            </Box>
        </>
    );
}
