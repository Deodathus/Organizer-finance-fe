import organizerApi from "../../utils/dictionaries/routes/api/organizer-api";
import OrganizerApiClient from "../../utils/OrganizerApiClient";

export default function FetchCurrencies() {
    const api = organizerApi();

    return OrganizerApiClient.get(api.currency.fetch.all);
}
