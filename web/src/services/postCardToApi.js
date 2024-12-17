const postCardToApi = (formInfo) => {
    return fetch("http://localhost:3307/api/projects", {
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
