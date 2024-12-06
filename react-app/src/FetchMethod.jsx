import React, { useEffect, useState } from 'react'

const FetchMethod = () => {

    const[data,setData]=useState({title:"",price:0,rating: {ratings:0, rate:0, reviews:0 },offers:[],image:""})

    async function LoadItems(){
        try {
            let response=await fetch("/products.json")
            if(!response.ok){
                throw new Error(response.statusText)
            }
            let responseJSON=await response.json()
            console.log(responseJSON)
            setData(responseJSON)
        } catch (error) {
            console.log("Error in fetching data",error)
        }
    }

    useEffect(()=>{
        LoadItems()
    },[])
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className="col-4 p-3">
                <img src={data.image} width="100%" height="550" alt=''/>
                <div className='row mt-3'>
                    <div className='col'>
                        <button className='btn btn-warning text-white fs-4 fw-4 w-100 p-2'><span className='bi bi-cart-dash-fill me-1 fs-5'></span>Add to cart</button>
                    </div>
                    <div className="col">
                        <button className='btn btn-success text-white fs-4 fw-4 w-100 p-2'><span className='bi bi-lightning-fill me-1 fs-5'></span>Buy now</button>
                    </div>
                </div>
            </div>
            <div className="col-8 p-3">
                <div className='ms-5 mt-4'>
                    <div className='my-2'>
                        <p className='fs-4'>{data.title}</p>
                    </div>
                    <div>
                        <span className='text-white bg-success p-1 rounded'><span className='fs-6'>4.6<span className='bi bi-star-fill fs-6 text-white'></span></span></span>
                        <span className='ms-3 fw-bold text-body-secondary'>{`${data.rating.ratings} ratings, ${data.rating.rate} rate & ${data.rating.reviews} reviews`}</span>
                        <h1 className=' my-2'>{data.price.toLocaleString('en-in',{style:'currency',currency:"INR",maximumFractionDigits: 0})}</h1>
                        <p className='fs-5 fw-bold'>Available offers</p>
                    </div>
                    <div>
                        <ul className='list-unstyled'>
                            {
                                data.offers.map((items,index)=>{
                                    return <li className='fs-6 fw-bold' key={index}><span className='bi bi-tag-fill text-success me-2'></span>{items}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FetchMethod
