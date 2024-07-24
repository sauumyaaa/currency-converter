import { useEffect,useState } from "react";

function useCurrencyInfo(currency){

    //we want to call an api
    //we want that hook jab b call ho, tab api fetch ho
    //jab b ek component mount ho, tab hum hook call krna chahte hein.. (useEffect hook)

    //https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-05-27/v1/currencies/inr.json
    const [data,setData]=useState({})

     useEffect(()=>{
        
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json())  //When you make an HTTP request to an API that returns JSON data,
      //    the response is typically in a text format.
      //   The .json() method parses this text and converts it into a JavaScript object,
      //    which you can then easily manipulate within your application.
        
        .then((res)=>setData(res[currency]))
        
     },[currency])
     //currency ke andr jab bhi change hoga.. useEffect ke andar likha sab hoga
     console.log(data)

    return data
 }

export default useCurrencyInfo;