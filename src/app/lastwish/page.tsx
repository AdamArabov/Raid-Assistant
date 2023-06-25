import raid from "../ls.json"

function Name ({
    name,
  }:{
    name: string;
   
  }){
    return(
      <div className='flex flex-col w-full text-center  '>
      <h2 className='font-semibold text-lg '>{name}</h2>
      </div>
    )
  }
export default function LsName () {
  return (
    <div className='flex items-center flex-col mx-auto w-full justify-center mt-16 px-8'>
     <h1 className='mt-4 mb-8 font-bold text-xl text-black'></h1>
     {raid.raids.map((name)=> (
            <Name key={name.name} {...name} />
          ))}
    </div>
  )
}