import OrganizerApi from "../../utils/dictionaries/routes/api/organizer-api";
import OrganizerApiClient from "../../utils/OrganizerApiClient";

export default function FetchWallets() {
    const api = OrganizerApi();

    return OrganizerApiClient.get(api.wallet.fetch.all);
}
