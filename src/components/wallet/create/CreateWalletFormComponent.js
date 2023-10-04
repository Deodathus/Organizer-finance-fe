import {
    Box,
    Button,
    Center,
    Flex,
    FormControl,
    FormLabel,
    Input, NumberInput, NumberInputField,
    SimpleGrid,
    Text,
    useToast
} from "@chakra-ui/react";
import Select from "react-select";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Status from "../../../utils/dictionaries/action/Status";
import WalletCreateStatusActionCreator from "../../../stores/actions/wallet/WalletStoreStatusActionCreator";
import WalletStoreReducer from "../../../stores/reducers/wallet/WalletStoreReducer";
import WalletCreateActionCreator from "../../../stores/actions/wallet/WalletStoreActionCreator";
import CurrencyFetchReducer from "../../../stores/reducers/currency/CurrencyFetchReducer";
import CurrencyFetchActionCreator from "../../../stores/actions/currency/CurrencyFetchActionCreator";

export default function CreateWalletFormComponent(props) {
    const toast = useToast();
    const dispatch = useDispatch();

    const [storeStatus, setStoreStatus] = useState(Status.idle);
    const [name, setName] = useState('');
    const [balance, setBalance] = useState(0);
    const [currency, setCurrency] = useState('');

    let currencies = useSelector(state => state.currency.elements);

    handleStoreStatus();

    useEffect(() => {
        dispatch(
            CurrencyFetchReducer.fetchAll(
                CurrencyFetchActionCreator.fetchAll()
            )
        );
    }, []);

    function handleStoreStatus() {
        useSelector(state => {
            switch (state.wallet.process.store) {
                default:
                case Status.idle:
                    break;
                case Status.success:
                    if (storeStatus !== Status.success) {
                        toast({
                            title: 'Wallet was created successfully',
                            status: "success",
                            isClosable: true,
                            duration: 2000,
                            position: "top-end"
                        });

                        clearForm();
                    }

                    dispatch(WalletCreateStatusActionCreator.resetStoreWalletStatus());

                    break;
                case Status.error:
                    if (storeStatus !== Status.error) {
                        toast({
                            title: 'Wallet was not created due some error',
                            status: "error",
                            isClosable: true,
                            duration: 2000,
                            position: "top-end"
                        });
                    }

                    dispatch(WalletCreateStatusActionCreator.resetStoreWalletStatus());

                    break;
            }
        });
    }

    function clearForm() {
        setName('');
        setBalance(0);
        setCurrency('');
    }

    function createWallet(e) {
        e.preventDefault();

        dispatch(WalletStoreReducer.storeWallet(
            WalletCreateActionCreator.storeWallet(name, balance, currency)
        ));
    }

    function prepareOptions(currencies) {
        let result = [];

        if (currencies !== null && currencies.length > 0) {
            Object.values(currencies).forEach(currency => {
                result.push({
                    value: currency.code,
                    label: currency.code
                });
            });
        }

        return result;
    }

    function updateBalance(valueAsString) {
        if (valueAsString === '') {
            setBalance('');

            return;
        }

        let newValue = parseFloat(valueAsString);
        if (isNaN(newValue) && newValue == null) {
            newValue = 0;
        }

        setBalance(newValue);
    }

    return (
        <>
            <Flex alignContent={"start"} justifyContent={"start"} className='pageBody'>
                <Box boxShadow='2xl' rounded='md' bg='white' className={'centredBox'}>
                    <Center>
                        <Text as='h2' className='title'>
                            Create wallet
                        </Text>
                    </Center>
                    <form onSubmit={createWallet}>
                        <SimpleGrid columns={{sm: 1, md: 2, lg: 2}}>
                            <FormControl className={'createWalletFormControl'}>
                                <FormLabel>Name</FormLabel>
                                <Input onChange={(e) => setName(e.target.value)} value={name} name={'name'} />
                            </FormControl>
                            <FormControl className={'createWalletFormControl'}>
                                <FormLabel>Balance</FormLabel>
                                <NumberInput
                                    onChange={(value) => updateBalance(value)}
                                    value={balance}
                                    name={'balance'}
                                    min={0}
                                >
                                    <NumberInputField />
                                </NumberInput>
                            </FormControl>
                        </SimpleGrid>
                        <FormControl className={'createWalletFormControl'}>
                            <FormLabel>Currency</FormLabel>
                            <Select
                                options={prepareOptions(currencies)}
                                onChange={e => setCurrency(e.value)}
                            />
                        </FormControl>

                        <Center>
                            <Box m={'20px'}>
                                <Button type='submit' colorScheme='green'>Create</Button>
                            </Box>
                        </Center>
                    </form>
                </Box>
            </Flex>
        </>
    );
}
