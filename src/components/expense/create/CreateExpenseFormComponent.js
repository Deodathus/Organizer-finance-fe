import {
    Box, Button,
    Center,
    Flex,
    FormControl,
    FormLabel,
    Input,
    NumberInput, NumberInputField,
    SimpleGrid,
    Text,
    useToast
} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import Select from "react-select";
import Status from "../../../utils/dictionaries/action/Status";
import ExpenseStoreStatusActionCreator from "../../../stores/actions/expense/ExpenseStoreStatusActionCreator";
import ExpenseStoreReducer from "../../../stores/reducers/expense/ExpenseStoreReducer";
import ExpenseStoreActionCreator from "../../../stores/actions/expense/ExpenseStoreActionCreator";
import DecimalNumberInput from "../../utils/number/DecimalNumberInput";

export default function CreateExpenseFormComponent(props) {
    const toast = useToast();
    const dispatch = useDispatch();

    const [amount, setAmount] = useState(0);
    const [currencyCode, setCurrencyCode] = useState('Choose wallet')
    const [expenseCategoryId, setExpenseCategoryId] = useState('');
    const [walletId, setWalletId] = useState('');
    const [comment, setComment] = useState('');

    const [storeStatus, setStoreStatus] = useState(Status.idle);

    const expenseCategories = useSelector(state => state.expenseCategory.elements);
    const wallets = useSelector(state => state.wallet.elements);

    handleStoreStatus();

    function handleStoreStatus() {
        useSelector(state => {
            switch (state.expense.process.store) {
                default:
                case Status.idle:
                    break;
                case Status.success:
                    if (storeStatus !== Status.success) {
                        toast({
                            title: 'Expense was created successfully',
                            status: "success",
                            isClosable: true,
                            duration: 2000,
                            position: "top-end"
                        });

                        clearForm();
                    }

                    dispatch(ExpenseStoreStatusActionCreator.resetStoreExpenseStatus());

                    break;
                case Status.error:
                    if (storeStatus !== Status.error) {
                        toast({
                            title: 'Expense was not created due some error',
                            status: "error",
                            isClosable: true,
                            duration: 2000,
                            position: "top-end"
                        });
                    }

                    dispatch(ExpenseStoreStatusActionCreator.resetStoreExpenseStatus());

                    break;
            }
        });
    }

    function clearForm() {
        setAmount(0);
        setComment('');
    }

    function prepareExpenseCategoriesOptions(expenseCategories) {
        let result = [];

        if (expenseCategories !== null && Object.values(expenseCategories).length > 0) {
            Object.values(expenseCategories).forEach(expenseCategory => {
                result.push({
                    value: expenseCategory.id,
                    label: expenseCategory.name
                });
            });
        }

        return result;
    }

    function prepareWalletsOptions(wallets) {
        let result = [];

        if (wallets !== null && wallets !== undefined) {
            let firstWallet = wallets.find(wallet => wallet !== undefined && wallet !== null);

            if (firstWallet !== null) {
                Object.values(wallets).forEach(wallet => {
                    result.push({
                        value: wallet.id,
                        label: wallet.name
                    });
                });
            }
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

    function updateChosenWallet(value) {
        setWalletId(value);
        setCurrencyCode(wallets[value].currencyCode);
    }

    function createExpense(e) {
        e.preventDefault();

        dispatch(
            ExpenseStoreReducer.storeExpense(
                ExpenseStoreActionCreator.storeExpense(
                    walletId,
                    expenseCategoryId,
                    amount,
                    currencyCode,
                    comment
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
                            Create expense
                        </Text>
                    </Center>
                    <form onSubmit={createExpense}>
                        <SimpleGrid columns={{sm: 1, md: 2, lg: 2}}>
                            <FormControl className={'createExpenseFormControl'}>
                                <FormLabel>Currency</FormLabel>
                                <Input isDisabled={true} value={currencyCode} name={'currencyCode'} />
                            </FormControl>
                            <FormControl className={'createExpenseFormControl'}>
                                <FormLabel>Amount</FormLabel>
                                <DecimalNumberInput
                                    value={amount}
                                    name={'amount'}
                                    updateValueFunction={updateAmount}
                                />
                            </FormControl>
                        </SimpleGrid>
                        <FormControl className={'createExpenseFormControl'}>
                            <FormLabel>Comment</FormLabel>
                            <Input value={comment} name={'comment'} onChange={e => setComment(e.target.value)} />
                        </FormControl>
                        <FormControl className={'createExpenseFormControl'}>
                            <FormLabel>Expense category</FormLabel>
                            <Select
                                options={prepareExpenseCategoriesOptions(expenseCategories)}
                                onChange={e => setExpenseCategoryId(e.value)}
                            />
                        </FormControl>
                        <FormControl className={'createExpenseFormControl'}>
                            <FormLabel>Wallet</FormLabel>
                            <Select
                                options={prepareWalletsOptions(wallets)}
                                onChange={e => updateChosenWallet(e.value)}
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
