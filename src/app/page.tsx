import raids from "../app/activity.json"


function TestCard ({
  weapons,
}:{
  weapons?:string;
 
}){
  return(
    <div className='flex flex-col w-full text-center text-black '>
    <h2 className='font-semibold text-lg '>{weapons}</h2>
    </div>
  )
}
export default function Home() {
  return (
    <div className='flex items-center flex-col mx-auto w-full justify-center mt-16 px-8'>
     <h1 className='mt-4 mb-8 font-bold text-xl text-black'>{raids.weapons}</h1>
     {raids.weapons.map((name)=> (
            <TestCard key={raids.weapons} {...name} />
          ))}
    </div>
  )
}
