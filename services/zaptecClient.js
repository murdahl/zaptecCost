export {getZaptecData};

const Url='';
const Data='';

// optional parameters
const otherParam={
    headers:{
        "content-type":"application/json; charset=UTF-8"
    },
    method:"GET"
};

function checkStatus(res) {
    if (res.ok) { // res.status >= 200 && res.status < 300
        return res.json;
    } else {
        throw MyCustomError(res.statusText);
    }
}

async function getZaptecData(){
    return "SayNada";
    const res = await fetch(Url, otherParam);
    return checkStatus(res);
}
