import raid from "../ls.json"

function Name ({
    name,
    players,
    difficulty
    }:{
    name: string;
    players: string;
    difficulty: string;
   
  }){
    return(
      <div className='flex flex-col w-full text-center  '>
      <h1 className='font-semibold text-lg '>{name}</h1>
      <h1 className='font-semibold text-lg '>{players}</h1>
      <h1 className='font-semibold text-lg '>{difficulty}</h1>
      </div>
  
    )
  }
export default function Ls() {
  return (
    <div className='flex items-center flex-col mx-auto w-full justify-center mt-16 px-8'>
     <h1 className='mt-4 mb-8 font-bold text-xl'></h1>
     {raid.raids.map((name, players, difficulty)=> (
            <Name key={name.name} {...name} />
          ))}
    </div>
  )
}