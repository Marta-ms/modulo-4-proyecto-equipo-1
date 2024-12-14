const postCardToApi = (formInfo) => {
    return fetch("http://localhost:3307/api/projects", {
      method: "POST",
      body: JSON.stringify(formInfo),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al guardar el proyecto");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        return `http://localhost:3307/projects/${data.projectId}`; 
      })
      .catch((error) => {
        console.error("Error:", error.message);
        return "Hubo un error al guardar el proyecto";
      });
  };
  
  export default postCardToApi;