import Axios from "axios";

export async function postRequest(base, args, config, body) {
    let response;
    try {
        const resp = await Axios.post(
            constructURL(base, args),
            body,
            config,
        );
        response = resp.data;
    }
    catch (e) {
        console.log(e.response);
        response = e.response.data;
    }
    validateNoError(response);
    return response.data;
}

export function constructURL(base, args) {
    return [base, ...args].join("/");
}

export function authorization(token) {
    return {
        Authorization: "Bearer " + token,
    }
}

export const json = { 'Content-type': 'application/json' };
export const multipart = { 'Content-type': 'multipart/form-data' };

function validateNoError(resp) {
    if (resp.err) {
        throw new Error(`Unexpected error: ${resp.err.reason}`);
    }
    else {
        return resp.data;
    }
}
