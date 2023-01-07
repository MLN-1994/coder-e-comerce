import { useEffect, useState } from "react"
import { requestItemId } from "../../helpers/requestData"
import ItemDetail from "../itemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    

    useEffect(() => {
        requestItemId(1)
        .then((data) => {
            setItem(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    return (
        <div className="">
            {
                item && <ItemDetail  {...item}/>
            }
        </div>

    )



}
export default ItemDetailContainer