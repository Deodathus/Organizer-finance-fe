import {
    Card,
    CardBody,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    Box,
    Text
} from "@chakra-ui/react";

export default function ExpenseListItem(props) {
    const expense = props.expense;

    return (
        <>
            <Card variant={'filled'} size={'sm'} align='center' className='transactionCard'>
                <CardBody>
                    <Stat>
                        <StatLabel>
                            <Box>
                                <Text as='b'>
                                    {expense.categoryName}
                                </Text>
                            </Box>
                            <Box>
                                <Text as='i'>
                                    {expense.comment}
                                </Text>
                            </Box>
                        </StatLabel>
                        <StatNumber>
                            {expense.amount} {expense.currencyCode}
                        </StatNumber>
                        <StatHelpText>
                            {expense.createdAt}
                        </StatHelpText>
                    </Stat>
                </CardBody>
            </Card>
        </>
    );
}
