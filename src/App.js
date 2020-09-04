import React from 'react';

async function fetchData() {
  const response = await fetch('http://localhost:8080/user/get')
  return await response.json()
}

function App() {

  const [user, setUser,] = React.useState(null)

  React.useEffect(() => {
    fetchData()
      .then(data => setUser(data))
      .catch(error => console.log('!! ', error))
  }, [])


  if (!user) {
    return null
  }

  
  const {
    name, gender, email,
    picture, streetNumber,
    streetName, city,
    country
  } = user

  return (
    <div style={{
      maxWidth: '70%',
      margin: '0 auto'
    }}>
      <div style={{
        padding: '1rem',
        textAlign: 'center',

      }}>
        <img  style={{
          borderRadius: '7px',
          boxShadow: '0 3px 5px #d9d9d9'
        }} src={picture} alt="user-picture"/>

        <h4>{name}</h4>
        {
          Object.entries({ gender, email, streetName, streetNumber, city, country})
        .map(([ k, v]) => (<p key={k}>{`${k}: ${v}`}</p>))
        }

      </div>
    </div>
  );
}

export default App;
