import GetCountries from "../../libraries/GetCountries"
import Image from 'next/image'

export default async function Home() {

  const data = await GetCountries()

  const asia = data.filter(country => country.region === "Asia")

  const countries = asia.map(country => (

    <article className="border-4 rounded-lg py-6 flex flex-col items-center justify-center border-sky-700 hover:shadow-2xl">
      <Image src={country.coatOfArms.svg} alt={country.name.common} width={250} height={250}/>
      <h2>{country.name.common}</h2>
    </article>

  ))

  return (
    <div>
      <h1 className="flex flex-col items-center h-[50px] justify-center m-4 bg-sky-600 text-white capitalize mt-20">countries in Asia</h1>

      <div className="grid grid-cols-4 gap-2 uppercase mt-5">
        {countries}
      </div>

     <footer className="flex flex-col items-center h-[50px] justify-center m-4 bg-sky-600 text-white">
      <p>{`We have ${countries.length} countries in Asia`}</p>
     </footer>
      
    </div>
    
    )
}
