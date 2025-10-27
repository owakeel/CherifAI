
/********* request for Fetching data function **********/
const fetchData = async (endpoint, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.json();

};



/****************** request for create data function *******************/
const createData = async (endpoint, body, token, contentType) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': contentType ? contentType : 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    });
    return res.json();
};





/*********  request for update data function *********/
const updateData = async (endpoint, body, token, contentType) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`, {
        method: 'PUT',
        headers: {
            'Content-Type': contentType ? contentType : 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    });
    return res.json();

};




/*********  request for delete data function *********/
const deleteData = async (endpoint, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.json();

};







/****************** Exporting Functions *******************/
module.exports = { fetchData, createData, updateData, deleteData };