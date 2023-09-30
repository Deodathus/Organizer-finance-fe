import organizerApi from "../../utils/dictionaries/routes/api/organizer-api";
import OrganizerApiClient from "../../utils/OrganizerApiClient";

export default function FetchWallet(walletId) {
    const api = organizerApi();

    return OrganizerApiClient.get(
        api.wallet.fetch.one.replace('{walletId}', walletId)
    );
}
