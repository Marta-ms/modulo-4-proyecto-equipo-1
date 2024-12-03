const postCardToApi = () => {
    return fetch("https://dev.adalab.es/api/projectCard", {
        method: "POST",
        body: JSON.stringify(formInfo),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {


        })
}

export default postCardToApi;