import { useState } from 'react'

// Import the images from assets
import bloodborneImg from '../assets/Bloodborne.jpg'
import sekiroImg from '../assets/Sekiro.jpg'
import darkSouls3Img from '../assets/DarkSouls3.jpg'
import darkSoulsRemasteredImg from '../assets/DarkSoulsRemastered.jpg'
import darkSouls2Img from '../assets/DarkSouls2.jfif'
import eldenRingImg from '../assets/EldenRingShadowOfTheErdtree.jpg'
import armoredCoreImg from '../assets/ArmoredCore.jpeg'
import eldenRingNightReignImg from '../assets/EldenRingNightReign.png'
import duskbloodImg from '../assets/Duskblood.jpg'
import demonSoulsImg from '../assets/DemonSouls.png'

const GameShowcase = () => {
  const [activeTab, setActiveTab] = useState('latest')
  
  const games = {
    latest: [
      {
        id: 'eldenring',
        title: 'ELDEN RING',
        image: eldenRingImg,
        genre: 'Action RPG',
        players: '1-4',
        releaseDate: 'Now on sale',
        description: 'Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.'
      },
      {
        id: 'armoredcore',
        title: 'ARMORED CORE VI: FIRES OF RUBICON',
        image: armoredCoreImg,
        genre: 'Action',
        players: '1 (Online: 2-6)',
        releaseDate: 'Now on sale',
        description: 'Dynamic, high-speed mech combat with 3D maneuverability. Create your own custom mech for intense battles across various missions.'
      }
    ],
    upcoming: [
      {
        id: 'nightreign',
        title: 'ELDEN RING: NIGHTREIGN',
        image: eldenRingNightReignImg,
        genre: 'Co-op action survival',
        players: '3 (Single player also supported)',
        releaseDate: '2025.05.30',
        description: 'A new co-op survival experience in the world of Elden Ring. Band together with other Tarnished to survive the Night.'
      },
      {
        id: 'duskbloods',
        title: 'The Duskbloods',
        image: duskbloodImg,
        genre: 'Multiplayer action',
        players: 'Online: up to 8 players',
        releaseDate: '2026',
        description: 'A new multiplayer action game set in a dark, gothic world. Hunt or be hunted in this nightmare realm.'
      }
    ],
    series: [
      {
        id: 'sekiro',
        title: 'SEKIRO: SHADOWS DIE TWICE',
        image: sekiroImg,
        genre: 'Action Adventure',
        players: '1',
        releaseDate: 'Now on sale',
        description: 'In Sekiro™: Shadows Die Twice you are the "one-armed wolf", a disgraced and disfigured warrior rescued from the brink of death.'
      },
      {
        id: 'bloodborne',
        title: 'Bloodborne',
        image: bloodborneImg,
        genre: 'Action RPG',
        players: '1',
        releaseDate: 'Now on sale',
        description: 'Face your fears as you search for answers in the ancient city of Yharnam, cursed with a strange endemic illness spreading through the streets.'
      },
      {
        id: 'darksouls3',
        title: 'DARK SOULS III',
        image: darkSouls3Img,
        genre: 'Action RPG',
        players: '1',
        releaseDate: 'Now on sale',
        description: 'As fires fade and the world falls into ruin, journey into a universe filled with more colossal enemies and environments.'
      }
    ],
    classics: [
      {
        id: 'demonsouls',
        title: 'DEMON\'S SOULS',
        image: demonSoulsImg,
        genre: 'Action RPG',
        players: '1 (Online features)',
        releaseDate: 'Now on sale',
        description: 'From PlayStation Studios and Bluepoint Games comes a remake of the PlayStation classic, Demon\'s Souls. Entirely rebuilt from the ground up and masterfully enhanced, experience the very first brutal challenge of the Souls series.'
      },
      {
        id: 'darksouls',
        title: 'DARK SOULS: REMASTERED',
        image: darkSoulsRemasteredImg,
        genre: 'Action RPG',
        players: '1',
        releaseDate: 'Now on sale',
        description: 'Then, there was fire. Re-experience the critically acclaimed, genre-defining game that started it all. Return to Lordran in stunning detail.'
      },
      {
        id: 'darksouls2',
        title: 'DARK SOULS II: Scholar of the First Sin',
        image: darkSouls2Img,
        genre: 'Action RPG',
        players: '1',
        releaseDate: 'Now on sale',
        description: 'Developed by renowned Japanese studio FromSoftware, DARK SOULS II is the highly anticipated sequel to the brutal 2011 hit Dark Souls.'
      }
    ]
  }

  return (
    <section id="games" className="py-16 sm:py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">ICONIC TITLES</h2>
        
        <div className="flex flex-wrap justify-center mb-6 sm:mb-8 border-b border-gray-800 overflow-x-auto max-w-full">
          <button 
            onClick={() => setActiveTab('latest')}
            className={`px-3 sm:px-6 py-2 sm:py-3 uppercase text-xs sm:text-sm tracking-wider font-medium relative whitespace-nowrap ${activeTab === 'latest' ? 'text-red-600' : 'text-gray-400'}`}
          >
            Latest Releases
            {activeTab === 'latest' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600"></span>}
          </button>
          <button 
            onClick={() => setActiveTab('upcoming')}
            className={`px-3 sm:px-6 py-2 sm:py-3 uppercase text-xs sm:text-sm tracking-wider font-medium relative whitespace-nowrap ${activeTab === 'upcoming' ? 'text-red-600' : 'text-gray-400'}`}
          >
            Upcoming
            {activeTab === 'upcoming' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600"></span>}
          </button>
          <button 
            onClick={() => setActiveTab('series')}
            className={`px-3 sm:px-6 py-2 sm:py-3 uppercase text-xs sm:text-sm tracking-wider font-medium relative whitespace-nowrap ${activeTab === 'series' ? 'text-red-600' : 'text-gray-400'}`}
          >
            Flagship Series
            {activeTab === 'series' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600"></span>}
          </button>
          <button 
            onClick={() => setActiveTab('classics')}
            className={`px-3 sm:px-6 py-2 sm:py-3 uppercase text-xs sm:text-sm tracking-wider font-medium relative whitespace-nowrap ${activeTab === 'classics' ? 'text-red-600' : 'text-gray-400'}`}
          >
            Classics
            {activeTab === 'classics' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600"></span>}
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {games[activeTab as keyof typeof games].map((game) => (
            <div key={game.id} className="group bg-gray-900 hover:bg-gray-800 transition-colors rounded-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-xs sm:text-sm text-gray-300">{game.description}</p>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 line-clamp-2">{game.title}</h3>
                <div className="grid grid-cols-2 gap-y-2 text-xs sm:text-sm text-gray-400">
                  <div>
                    <span className="text-gray-500">Genre:</span>
                    <span className="ml-2 text-white">{game.genre}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Players:</span>
                    <span className="ml-2 text-white">{game.players}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-500">Release:</span>
                    <span className="ml-2 text-red-500 font-medium">{game.releaseDate}</span>
                  </div>
                </div>
                <button className="mt-3 sm:mt-4 w-full py-2 border border-red-800 text-red-500 hover:bg-red-800 hover:text-white transition-colors uppercase text-xs sm:text-sm tracking-wider">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GameShowcase 