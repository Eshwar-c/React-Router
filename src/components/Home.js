import { useNavigate } from "react-router-dom"
export const Home=()=>{
  const navigate=useNavigate()
  return (
    <>
    <div>home page</div>
    <button onClick={()=>navigate('order-summary')}>place order</button>
  </>
  )
  
}