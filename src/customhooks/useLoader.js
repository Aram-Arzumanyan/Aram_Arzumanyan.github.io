import React, { useState,useLocation, useEffect } from 'react'

export default function() {

    const [loading,setLoading]=useState(false);
    
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false)
        },4000)
    },[]);
    return{
        loading
    }
}
