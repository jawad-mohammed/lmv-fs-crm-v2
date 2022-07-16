import {useState,useEffect} from 'react'

const AllRoles = () => {
    const [allroles, setAllRoles] = useState([]);

    const fetchData = async (e) => {
        const response = await fetch(`http://localhost:8001/lmv/role`);
       const jsonData = await response.json()
        setAllRoles(jsonData)
      };
      useEffect(() => {
        fetchData();
    }, []);
     console.log(allroles)

    return (
    <>
    {allroles.map((role)=>{
        return(<div><li>

            {role.roleDesignation}
        </li>
        </div>)
    })}
    
    </>
  )
}

export default AllRoles