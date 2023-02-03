import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../itemDetail/ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    
    const { id } = useParams();

    useEffect(() => {

        const docRef = doc(db, "products", id)

        getDoc(docRef)
            .then(doc => {
                setItem({
                    ...doc.data(),
                    id: doc.id
                })
            })


        // requestItemId(id)
        // .then((data) => {
        //     setItem(data)
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })
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