import React,{useState} from 'react';


const Profile = () => {
  const [name, setName] = useState("");

  const handleName = (e:any) => {
    setName(e.target.value);
    
}

  return (
    <div>
      <input name="name" value={name}  onChange={e=>handleName(e)} />

    </div>


  )
}