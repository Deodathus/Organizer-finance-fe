import {
    Box, Button,
    Center,
    Flex,
    FormControl,
    FormLabel,
    Input,
    SimpleGrid,
    Text,
    useToast
} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import Select from "react-select";
import TransactionType from "../../../utils/dictionaries/transaction/TransactionType";
import Status from "../../../utils/dictionaries/action/Status";
import WalletTransactionStoreStatusActionCreator
    from "../../../stores/actions/walletTransaction/WalletTransactionStoreStatusActionCreator";
import WalletTransactionStoreActionCreator
    from "../../../stores/actions/walletTransaction/WalletTransactionStoreActionCreator";
import WalletTransactionStoreReducer from "../../../stores/reducers/walletTransaction/WalletTransactionStoreReducer";
import DecimalNumberInput from "../../utils/number/DecimalNumberInput";

export default function CreateWalletTransactionFormComponent(props) {
    const toast = useToast();
    const dispatch = useDispatch();

    const [amount, setAmount] = useState(0);
    const currencyCode = props.walletCurrencyCode;
    const [transactionType, setTransactionType] = useState('');
    const transactionTypes = TransactionType.types;

    const [storeStatus, setStoreStatus] = useState(Status.idle);

    handleStoreStatus();

    function handleStoreStatus() {
        useSelector(state => {
            switch (state.walletTransaction.process.store) {
                default:
                case Status.idle:
                    break;
                case Status.success:
                    if (storeStatus !== Status.success) {
                        toast({
                            title: 'Transaction was created successfully',
                            status: "success",
                            isClosable: true,
                            duration: 2000,
                            position: "top-end"
                        });

                        clearForm();
                    }

                    props.rerenderFunction();

                    dispatch(WalletTransactionStoreStatusActionCreator.resetStoreWalletTransactionStatus());

                    break;
                case Status.error:
                    if (storeStatus !== Status.error) {
                        toast({
                            title: 'Transaction was not created due some error',
                            status: "error",
                            isClosable: true,
                            duration: 2000,
                            position: "top-end"
                        });
                    }

                    dispatch(WalletTransactionStoreStatusActionCreator.resetStoreWalletTransactionStatus());

                    break;
            }
        });
    }

    function clearForm() {
        setAmount(0);
    }

    function prepareOptions(transactionTypes) {
        let result = [];

        if (transactionTypes !== null && transactionTypes.length > 0) {
            Object.values(transactionTypes).forEach(transactionType => {
                result.push({
                    value: transactionType.type,
                    label: transactionType.name
                });
            });
        }

        return result;
    }

    function updateAmount(valueAsString) {
        if (valueAsString === '') {
            setAmount('');

            return;
        }

        setAmount(valueAsString);
    }

    function createWalletTransaction(e) {
        e.preventDefault();

        dispatch(
            WalletTransactionStoreReducer.storeWalletTransaction(
                WalletTransactionStoreActionCreator.storeWalletTransaction(
                    props.walletId,
                    amount,
                    currencyCode,
                    transactionType
                )
            )
        );
    }

    return (
        <>
            <Flex alignContent={"start"} justifyContent={"start"} className='createWalletTransactionForm'>
                <Box boxShadow='2xl' rounded='md' bg='white' className={'centredBox'}>
                    <Center>
                        <Text as='h2' className='title'>
                            Create transaction
                        </Text>
                    </Center>
                    <form onSubmit={createWalletTransaction}>
                        <SimpleGrid columns={{sm: 1, md: 2, lg: 2}}>
                            <FormControl className={'createWalletTransactionFormControl'}>
                                <FormLabel>Currency</FormLabel>
                                <Input isDisabled={true} value={currencyCode} name={'currencyCode'} />
                            </FormControl>
                            <FormControl className={'createWalletTransactionFormControl'}>
                                <FormLabel>Amount</FormLabel>
                                <DecimalNumberInput
                                    value={amount}
                                    name={'amount'}
                                    updateValueFunction={updateAmount}
                                />
                            </FormControl>
                        </SimpleGrid>
                        <FormControl className={'createWalletTransactionFormControl'}>
                            <FormLabel>Transaction type</FormLabel>
                            <Select
                                options={prepareOptions(transactionTypes)}
                                onChange={e => setTransactionType(e.value)}
                            />
                        </FormControl>

                        <Center>
                            <Box m={'20px'}>
                                <Button type='submit' colorScheme='green'>Add</Button>
                            </Box>
                        </Center>
                    </form>
                </Box>
            </Flex>
        </>
    );
}
