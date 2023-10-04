import organizerApi from "../../utils/dictionaries/routes/api/organizer-api";
import OrganizerApiClient from "../../utils/OrganizerApiClient";

export default function StoreExpenseCategory(name) {
    const api = organizerApi();

    return OrganizerApiClient.post(
        api.expenseCategory.store.one,
        {
            name
        }
    );
}
