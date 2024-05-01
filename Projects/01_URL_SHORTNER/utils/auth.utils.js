const sessionIdToUser = new Map();

function setUser(id , user){
    return sessionIdToUser.set(id, user);
}

function getUser(id) {
    return sessionIdToUser.get(id);
}

export {
    setUser,
    getUser
}