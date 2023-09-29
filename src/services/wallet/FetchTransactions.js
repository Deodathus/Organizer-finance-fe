import OrganizerApi from "../../utils/dictionaries/routes/api/organizer-api";
import OrganizerApiClient from "../../utils/OrganizerApiClient";

export default function FetchTransactions(walletId, page, perPage) {
    const api = OrganizerApi();

    return OrganizerApiClient.get(
        api.walletTransaction.fetch.all
            .replace('{walletId}', walletId)
            .replace('{page}', page)
            .replace('{perPage}', perPage)
    );
}
