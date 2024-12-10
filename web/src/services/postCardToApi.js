const postCardToApi = (formInfo, setDataApi) => {
    return fetch("https://dev.adalab.es/api/projectCard", {
        method: "POST",
        body: JSON.stringify(formInfo),
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return (
                setDataApi(data.cardURL)

            )

        })
};

export default postCardToApi;