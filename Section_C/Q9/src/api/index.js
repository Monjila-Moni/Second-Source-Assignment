export const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET", // ✅ wrap options in an object
    });
    return await response.json()
};
