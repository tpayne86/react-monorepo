import {useState} from 'react';

export default async function  useFetch(promise){
  const [state, setState] = useState({
    state:'loading',
    data:null
  })
  promise.then((success)=>{
    setState({
      state:'success',
      data:success
    });
  }).then((error)=>{
    setState({
      state:'failure',
      data:error
    });
  })
  return [state,setState]
}
export {
  useFetch
}
