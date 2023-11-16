import {Box, SimpleGrid} from "@chakra-ui/react";
import ReactPaginate from "react-paginate";
import {useNavigate} from "react-router";
import {useSelector} from "react-redux";
import PaginatorEnum from "../../utils/dictionaries/config/PaginatorEnum";
import ExpenseListItem from "./ExpenseListItem";

export default function ExpensesList() {
    const navigate = useNavigate();

    const expenses = useSelector(state => state.expense);

    let renderedExpenses = [];
    let totalPages = 0;

    function handlePageChange(event) {
        let urlToNavigate = '/expenses?page=' + (event.selected + 1);

        navigate(urlToNavigate);
    }

    if (expenses.elements !== null && expenses.elements !== undefined && expenses.elements.length > 0) {
        totalPages = expenses.total / PaginatorEnum.EXPENSE_PER_PAGE;

        for (let i = 0; i < Object.keys(expenses.elements).length; i++) {
            let expense = Object.values(expenses.elements)[i];

            renderedExpenses.push(
                <ExpenseListItem
                    expense={expense}
                    key={i + '_' + expense.id}
                />
            );
        }
    }

    return (
        <>
            <Box className='paginator'>
                <ReactPaginate
                    renderOnZeroPageCount={null}
                    onPageChange={(e) => {handlePageChange(e)}}
                    pageCount={Math.ceil(totalPages)}
                />
            </Box>
            <SimpleGrid columns={{sm: 1, md: 1, lg: 3}}>
                {renderedExpenses}
            </SimpleGrid>
        </>
    );
}
