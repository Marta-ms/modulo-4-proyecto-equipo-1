
const URL_PRODUCTION = "https://modulo-4-proyecto-equipo-1.onrender.com";
const URL_LOCAL = "http://localhost:4001";

const URL = process.env.NODE_ENV === "development" ? URL_LOCAL : URL_PRODUCTION;

const postCardToApi = (formInfo) => {
    return fetch(`${URL}/api/projects`, {
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
