import {Card, CardBody, Stat, StatHelpText, StatLabel, StatNumber} from "@chakra-ui/react";

export default function WalletListItem(props) {
    const wallet = props.wallet;

    return (
        <>
            <Card maxW='sm'>
                <CardBody>
                    <Stat>
                        <StatLabel>{wallet.name}</StatLabel>
                        <StatNumber>{wallet.balance} {wallet.currencyCode}</StatNumber>
                    </Stat>
                </CardBody>
            </Card>
        </>
    );
}
