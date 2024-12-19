import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


let searchContext = createContext(null)
export function SearchResult(){
    let data = useContext(searchContext)
    const [products,setProducts] = useState([{id:0, title:'', image:'', price:0, category:'', description:'', rating:{rate:0, count:0}}])
    const LoadCategory =(category)=>{
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
        .then(response=>{
            console.log(response.data)
            setProducts(response.data)
        }
            )
    }

    useEffect(()=>{
        if(!data){
            LoadCategory('jewelery')
        }
        else{
            LoadCategory(data)
        }
    },[data])

    return(
        
        <div className="p-3">
            <h4 className="text-primary p-4">Search Results</h4>
           <div className="d-flex flex-wrap">
           {
                products.map((product)=>(
                    <div key={product.id} className="card m-2 p-2" style={{width:'200px'}}>
                    <img className="card-img-top"  src={product.image} height="140" alt=""/>
                    <div className="card-header">
                        {product.title}
                    </div>
                </div> 
                )
                 )
            }
           </div>
        </div>
    )
}

export default function ContextDemo(){
    const [value,setValue] = useState('')
    const [contextMemory,setContextMemory] = useState('')

    function handleChange(e){
        setValue(e.target.value)
    }

    function handleClick(){
        setContextMemory(value)     

    }

    return(
        <div>
            <header className="bg-dark text-white container-fluid">
                <nav className="d-flex justify-content-between p-3">
                    <div>
                        <h2 className="ms-2">Shopper.</h2>
                    </div>
                    <div className="input-group w-25">
                        <input type="text" className="form-control" placeholder="Search Category" onChange={handleChange}/>
                        <button className="btn btn-warning bi bi-search" onClick={handleClick}/>
                    </div>
                    <div className="me-2">
                        <span className="bi bi-cart4 fs-3"></span>
                        <span className="bi bi-person-fill fs-3 ms-4"></span>
                    </div>
                </nav>
            </header>
            <section style={{height:'500px'}}>
                <searchContext.Provider value={contextMemory}>
                    <SearchResult/>
                </searchContext.Provider>
            </section>
        </div>
    )
}