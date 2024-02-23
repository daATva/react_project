import React from 'react';

function Form() {
    const [username, setUsername] = useState('');
  
    const handleChange = (e) => {
      setUsername(e.target.value);
    }
    console.log(handleChange)
  

}

export default Form;
