const httpController = {
    getUsers: async () => {
        const response = await fetch('/users');
        const myJson = await response.json();
        return myJson;
    }
}

export default httpController;