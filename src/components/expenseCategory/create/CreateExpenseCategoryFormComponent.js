import {
    Box,
    Button,
    Center,
    Flex,
    FormControl,
    FormLabel,
    Input,
    SimpleGrid,
    Text, useToast
} from "@chakra-ui/react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ExpenseCategoryStoreReducer from "../../../stores/reducers/expenseCategory/ExpenseCategoryStoreReducer";
import ExpenseCategoryStoreActionCreator
    from "../../../stores/actions/expenseCategory/ExpenseCategoryStoreActionCreator";
import Status from "../../../utils/dictionaries/action/Status";
import ExpenseCategoryStoreStatusActionCreator
    from "../../../stores/actions/expenseCategory/ExpenseCategoryStoreStatusActionCreator";

export default function CreateExpenseCategoryFormComponent() {
    const toast = useToast();
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [storeStatus, setStoreStatus] = useState(Status.idle);

    handleStoreStatus();

    function createExpenseCategory(e) {
        e.preventDefault();

        dispatch(
            ExpenseCategoryStoreReducer.storeExpenseCategory(
                ExpenseCategoryStoreActionCreator.storeExpenseCategory(name)
            )
        );
    }

    function handleStoreStatus() {
        useSelector(state => {
            switch (state.expenseCategory.process.store) {
                default:
                case Status.idle:
                    break;
                case Status.success:
                    if (storeStatus !== Status.success) {
                        toast({
                            title: 'Expense category was created successfully',
                            status: "success",
                            isClosable: true,
                            duration: 2000,
                            position: "top-end"
                        });

                        clearForm();
                    }

                    dispatch(ExpenseCategoryStoreStatusActionCreator.resetStoreExpenseCategoryStatus());

                    break;
                case Status.error:
                    if (storeStatus !== Status.error) {
                        toast({
                            title: 'Expense category was not created due some error',
                            status: "error",
                            isClosable: true,
                            duration: 2000,
                            position: "top-end"
                        });
                    }

                    dispatch(ExpenseCategoryStoreStatusActionCreator.resetStoreExpenseCategoryStatus());

                    break;
            }
        });
    }

    function clearForm() {
        setName('');
    }

    return (
        <>
            <>
                <Flex alignContent={"start"} justifyContent={"start"} className='pageBody'>
                    <Box boxShadow='2xl' rounded='md' bg='white' className={'centredBox'}>
                        <Center>
                            <Text as='h2' className='title'>
                                Create expense category
                            </Text>
                        </Center>
                        <form onSubmit={createExpenseCategory}>
                            <SimpleGrid columns={{sm: 1, md: 2, lg: 2}}>
                                <FormControl className={'createWalletFormControl'}>
                                    <FormLabel>Name</FormLabel>
                                    <Input onChange={(e) => setName(e.target.value)} value={name} name={'name'} />
                                </FormControl>
                            </SimpleGrid>

                            <Center>
                                <Box m={'20px'}>
                                    <Button type='submit' colorScheme='green'>Create</Button>
                                </Box>
                            </Center>
                        </form>
                    </Box>
                </Flex>
            </>
        </>
    );
}
