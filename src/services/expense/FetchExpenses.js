import OrganizerApi from "../../utils/dictionaries/routes/api/organizer-api";
import OrganizerApiClient from "../../utils/OrganizerApiClient";

export default function FetchExpenses(page, perPage) {
    const api = OrganizerApi();

    return OrganizerApiClient.get(
        api.expense.fetch.all
            .replace('{page}', page)
            .replace('{perPage}', perPage)
    );
}
