import {postRequest, authorization, json, multipart} from "./common";

class CentralServerApi {
    constructor(host) {
        this.api_constant = `${host}/api/v1`;
        this.token = null;
    }

    async set_about(new_about) {
        await postRequest(
            this.api_constant,
            ["users", "about"],
            {
                headers: {
                    ...authorization(this.token),
                    ...json
                }
            },
            {
                about: new_about
            }
        )
    }
}

export default CentralServerApi;
