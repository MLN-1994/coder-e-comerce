import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { requestItemId } from "../../helpers/requestData"
import ItemDetail from "../itemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    
    const { id } = useParams();

    useEffect(() => {
        requestItemId(id)
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