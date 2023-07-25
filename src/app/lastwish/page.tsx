import raid from "../ls.json"

function Name ({
    name,
    players,
    difficulty,
  
    }:{
    name: string;
    players: string;
    difficulty: string;

   
  }){
    return(
      <div className='flex flex-col w-full text-center  '>
      <h1 className='font-semibold text-lg '>{name}</h1>
      <h2 className='font-semibold text-lg '>Recommended Fireteam: {players}</h2>
      <h3 className='font-semibold text-lg '>{difficulty}</h3>

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