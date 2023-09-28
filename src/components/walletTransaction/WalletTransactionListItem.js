import {Box, Center, SimpleGrid, VStack, Skeleton} from "@chakra-ui/react";

export default function WalletTransactionListItem(props) {
    const transaction = props.transaction;

    return (
        <>
            <SimpleGrid columns={{sm:3, md: 3, lg: 3}}>
                <Center>
                    <Box>
                        <SimpleGrid columns={{sm:2, md: 2, lg: 2}}>
                            <Skeleton height={'50px'} width={'50px'} />
                            {transaction.id}
                        </SimpleGrid>
                    </Box>
                </Center>
                <Center>
                    <Box>
                        {transaction.type}
                    </Box>
                </Center>
                <Center>
                    <VStack>
                        <Box>
                            {transaction.amount}
                        </Box>
                        <Box>
                            {transaction.amount}
                        </Box>
                    </VStack>
                </Center>
            </SimpleGrid>
        </>
    );
}
