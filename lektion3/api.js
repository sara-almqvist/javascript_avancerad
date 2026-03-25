const fetchData = async(url, apikey) => {
    try {
        const response = await fetch('https://api-userapi.onrender.com/api/users/getUsers', {
        method: 'GET',
        headers: {
            'x-api-key': 'elev-hemlighet-2026',
            'Content-Type': 'application/json'
        }
    })

    if (!response.ok){
        throw new Error('Fel vid fetchanrop');
    }

    const data = await response.json();
    return data

    } catch (error) {
        console.error('Det gick fel: ', error)
    }
};

export default fetchData;