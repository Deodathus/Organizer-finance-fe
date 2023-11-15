import OrganizerApi from "../../utils/dictionaries/routes/api/organizer-api";
import OrganizerApiClient from "../../utils/OrganizerApiClient";

export default function StoreExpense(
    walletId,
    expenseCategoryId,
    expenseAmount,
    expenseCurrencyCode,
    comment
) {
    const api = OrganizerApi();

    let commentToSent = null;
    if (comment.length > 0) {
        commentToSent = comment
    }

    return OrganizerApiClient.post(
        api.expense.store.one,
        {
            walletId: walletId,
            categoryId: expenseCategoryId,
            amount: expenseAmount,
            currencyCode: expenseCurrencyCode,
            comment: commentToSent
        }
    );
}
