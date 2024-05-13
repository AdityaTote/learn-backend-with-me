
async () => {
    try {
        const response = await axios.get(API_URL,config);
        console.log(response);
    } catch (error) {
        console.log(error.message);
    }
}


axios.get(API_URL,config)
.then((response) =>{
    console.log(response);
}).catch((error) => {
    console.log(error.message);
})