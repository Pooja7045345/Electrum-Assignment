let GetRequest = async (endPoint) => {
    let result = await fetch(endPoint, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    });
    let resp = await result.json();
    return resp;
}
let PostRequest = async (endPoint, requestBody) => {

    let result = await fetch(endPoint, {
        method: "POST",
		headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
        },
        body: JSON.stringify(requestBody),
	});
	let resp = await result.json();
	return resp;
};
let UpdateRequest = async (endPoint, requestBody) => {

    let result = await fetch(endPoint, {
        method: "PATCH",
		headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
        },
        body: JSON.stringify(requestBody),
	});
	// return (request_result = await request_result.json());
	let resp = await result.json();
	return resp;
};
export {
    GetRequest,
    PostRequest,
    UpdateRequest
}