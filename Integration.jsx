import axios from 'axios'
import React, {useEffect, useState} from 'react'

const Integration = () =>{
    const [state, setstate] = useState([])

    useEffect(()=>{
        axios.get("https://api.github.com/users")
        .then((res) => setstate(res.data))
    },[])

    return(
        <div> 
          <h1>api integration</h1>
          {
            state.map((temp, index) =>{
                let {id,login,avtar_url} = temp
                return(
                    <div key= {index}>
                        <li>{id}</li>
                        <li>{login}</li>
                        <li><img src={avtar_url} alt="" /></li>

                    </div>
                )
            })
          }
        </div>
    )


}
export default Integration