import React, {useState, useEffect} from "react";

function User() {
    const [clickToFetch, setClickToFetch] = useState(true);
    const [userData, setUserData] = useState([]);

    useEffect( () => {
        const fetchData = async() => {
            try {
                const response= await fetch('https://api-userapi.onrender.com/api/users/getUsers', {
                    method: 'GET',
                    headers: {'x-api-key': 'elev-hemlighet-2026',
                'Content-Type': 'application/json'}
                });

                if(!response.ok){throw new Error('Fel vid anrop', response.status)}

                const data= await response.json();
                const filteredData = data.filter((d) => d.role === 'Pilot');
                //console.log(filteredData);
                setUserData(filteredData);
                //console.log(userData);
                
            } catch (error) {console.error(error)
                
            }
        }
       
        fetchData()
        }, [clickToFetch])
    
    const listItems= userData.map((user) => <li key={user.id}>{`${user.name} - ${user.role}`}</li>)

    return (
        <>
       <h1>Hämta användare</h1>
       <button onClick={() => setClickToFetch(!clickToFetch)}>Klicka för att hämta data!</button>
       <p>{`Status på knappen är ${clickToFetch}`}</p>
       <br />
       <p>Lista över filtrerade användare:</p>
       <ul>{listItems}</ul>
        </>
    )
}

export default User;