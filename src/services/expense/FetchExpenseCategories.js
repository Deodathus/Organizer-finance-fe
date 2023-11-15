import organizerApi from "../../utils/dictionaries/routes/api/organizer-api";
import OrganizerApiClient from "../../utils/OrganizerApiClient";

export default function FetchExpenseCategories() {
    const api = organizerApi();

    return OrganizerApiClient.get(api.expenseCategory.fetch.all);
}
