import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <main className="bg-zinc-900">
        <div className="flex justify-center items-center h-screen gap-0.5 max-md:flex-col">
            <img src="./Image.png" className="w-[283px] h-auto max-md:w-[360px] max-md:h-[142px]"/>
            <div className="bg-white flex flex-col gap-24 w-[360px] h-[425px] p-8 rounded">

              <div className='pt-12'><h1 className="text-zinc-900 text-4xl">Hotspot</h1></div>

              <div className='flex flex-col w-full gap-4'>
                <span className='text-base'>Insira seu código de ativação</span>
                <input type="text" placeholder='************' className="rounded border-zinc-200 border-2 px-2 py-2"/>
                <button className="bg-red-700 rounded px-2 py-3 text-white">Conectar</button>
              </div>
            </div>
        </div>
      </main>
  );
  
}
