import { useState } from "react"


const Contact = () =>{

const [inputs, setInputs]=useState({
    name:"",
    email:"",
    password:"",
})


const handleInputChange = (event) =>{
    console.log(event.target.name);

    setInputs({
        ...inputs,
        [event.target.name] : event.target.value
    })
}


const handleSubmit = (event) =>{
    event.preventDefault()
    console.log("Submit", inputs)
}


    return(
        
            <div className="flex justify-center items-center">
            <form className="flex  flex-col w-96 " onSubmit={handleSubmit}>
                <input className="mb-2 border" 
                value={inputs.name}
                onChange={handleInputChange}
                name = "name"
                type="text" 
                placeholder="Name"                
                />
                
                <input className="mb-2 border"
                value={inputs.email}
                onChange={handleInputChange}
                name = "email"
                type="email" 
                placeholder="Email"              
                />

                <input className="mb-2 border" 
                value={inputs.password}
                onChange={handleInputChange}
                name = "password"
                type="password" 
                placeholder="Password"               
                />

                <button className="border">Send</button>
            </form>
            </div>
        
    )
}
export default Contact