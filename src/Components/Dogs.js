import React, { useEffect , useState } from 'react'

const Dogs = () => {
const [img, setimg] = useState('')
const getDogs = async ()=>{
    try{
        const res = await fetch('https://random.dog/woof.json')
        const dogImg = await res.json();
        setimg(dogImg.url);
    } catch(err){
        console.log(err);
    }}

   
    useEffect(()=>{
        getDogs();
    }, [])
  return (
    <>
        <h1 className='heading'>Random Dogs
        <img className='dogEmoji' src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/dog_1f415.png" alt=""/> </h1>
        <div className='dogImg'><img className='img' src={img} alt="dog"/></div>  
        <div className='center'><button onClick={getDogs} className="btn">CLICK ME TO CHANGE PHOTO</button></div>
    </>

  )
}

export default Dogs;