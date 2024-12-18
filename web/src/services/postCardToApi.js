const postCardToApi = (formInfo) => {
    return fetch("http://localhost:4001/api/projects", {
        method: "POST",
        body: JSON.stringify(formInfo),
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return data;
        })
};
export default postCardToApi;
