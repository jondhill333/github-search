import React, {useState, useEffect} from 'react';

const endpoint = 'https://api.github.com/users/petrgazarov';

function DisplayId() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(endpoint)
        .then(blob => blob.json())
        .then(data => setData(data.login))
});
console.log(endpoint)
    return (
        <div>{data}</div>
    )
}


export default DisplayId;
