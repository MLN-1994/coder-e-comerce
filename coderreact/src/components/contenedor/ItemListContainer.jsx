import { useState } from "react";



const ItemListContainer = (props) =>{    
    

    const [counter, setCounter] = useState(1)


        const requestData = (bool) =>{
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (bool) {
                        resolve("Promesa resuelta campeon")
                    } else {
                        reject("Promesa rechazada mi rey")
                    }
                    
                }, 2000);
            })
        }
        
        const handleClick = () =>{
            setCounter(counter + 1)
        }

        requestData(true)
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })

    return(<>
        <div className="flex justify-center mt-6 ">
           <h3 className="text-xl">{ props.greeting }</h3> 
            <button  onClick={handleClick} className="bg-slate-500 p-2">click me</button>
        </div>
       
        </>
    )
}

export default ItemListContainer