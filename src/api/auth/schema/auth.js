exports.loginReponse = (userData) =>{
    const data = {
        id : userData.id,
        name:userData.name,
        email:userData.email
    };
    return data;
};

exports.updateStatus = (status) =>{
    const data = {
        status : status
    };
    return data;
};