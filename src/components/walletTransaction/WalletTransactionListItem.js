import {
    Card,
    CardBody,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText
} from "@chakra-ui/react";

export default function WalletTransactionListItem(props) {
    const transaction = props.transaction;

    return (
        <>
            <Card variant={'filled'} size={'sm'} align='center' className='transactionCard'>
                <CardBody>
                    <Stat>
                        <StatLabel>
                            {transaction.type}
                        </StatLabel>
                        <StatNumber>
                            {transaction.amount} {props.currencyCode}
                        </StatNumber>
                        <StatHelpText>
                            {transaction.createdAt}
                        </StatHelpText>
                    </Stat>
                </CardBody>
            </Card>
        </>
    );
}
