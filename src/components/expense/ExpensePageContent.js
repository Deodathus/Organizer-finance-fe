import {Box, Button} from "@chakra-ui/react";
import {useNavigate} from "react-router";

export default function ExpensePageContent() {
    const navigate = useNavigate();

    function redirectToCreateWalletPage() {
        navigate('/expenses/category/create');
    }

    return (
        <>
            <>
                <Box className='pageBody'>
                    <Button onClick={redirectToCreateWalletPage} variant='solid' colorScheme='orange' className='addWalletButton'>
                        Add category
                    </Button>
                </Box>
            </>
        </>
    );
}
