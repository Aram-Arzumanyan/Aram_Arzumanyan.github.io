import React, { useState } from 'react'

export default function() {
const [error,setError]=useState('');
let regEmail =/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;


function validate(val,type){
    if(!regEmail.test(val)&& type==='email'){
        setError('error')
    }else if(regEmail.test(val)&& type==='email'){
        setError('')
    }
}
return [error,validate]
}
