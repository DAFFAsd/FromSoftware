import { useState } from 'react'

// Import images from assets
import bloodborneImg from '../assets/Bloodborne.jpg'
import sekiroImg from '../assets/Sekiro.jpg'
import darkSoulsImg from '../assets/DarkSoulsRemastered.jpg'

const FeaturedGames = () => {
  const [activeGame, setActiveGame] = useState('bloodborne')

  const featuredGames = {
    bloodborne: {
      title: 'Bloodborne',
      year: '2015',
      image: bloodborneImg,
      banner: bloodborneImg,
      description: `Hunt your nightmares as you search for answers in the ancient city of Yharnam, 
                    now cursed with a strange endemic illness spreading through the streets like wildfire. 
                    Danger, death, and madness lurk around every corner of this dark and horrific world, 
                    and you must discover its darkest secrets in order to survive.`,
      features: [
        'A Terrifying New World: Journey to a horror-filled gothic city where deranged mobs and nightmarish creatures lurk around every corner.',
        'Strategic Action Combat: Armed with a unique arsenal of weaponry, including guns and saw cleavers, you will need wits, strategy, and reflexes to take down the agile and intelligent enemies that guard the city\'s dark secrets.',
        'Chalice Dungeons: Use holy chalices to gain entrance to a network of vast underground ruins, filled with traps, beasts, and rewards, to explore and conquer alone or with others.',
        'Visceral Attacks: Master the art of combat through devastating attacks that critical your enemy\'s weakness'
      ],
      ratings: [
        { source: 'IGN', score: '9.1/10' },
        { source: 'GameSpot', score: '9/10' },
        { source: 'Metacritic', score: '92/100' }
      ]
    },
    sekiro: {
      title: 'Sekiro: Shadows Die Twice',
      year: '2019',
      image: sekiroImg,
      banner: sekiroImg,
      description: `In Sekiro™: Shadows Die Twice you are the "one-armed wolf", a disgraced and disfigured 
                    warrior rescued from the brink of death. Bound to protect a young lord who is the 
                    descendant of an ancient bloodline, you become the target of many vicious enemies, 
                    including the dangerous Ashina clan. When the young lord is captured, nothing will 
                    stop you on a perilous quest to regain your honor, not even death itself.`,
      features: [
        'Kill Ingeniously: Unleash an arsenal of deadly prosthetic tools and powerful ninja abilities while you blend stealth, vertical traversal, and visceral head to head combat in a bloody confrontation.',
        'Explore Late 1500s Sengoku Japan: Experience the beauty and brutality of Sengoku Japan as you fight your way through meticulously crafted environments.',
        'Face Larger Than Life Foes: Test your mettle against imposing enemies that require a combination of strategy and skill to defeat.',
        'Resurrections: Use your second chance to execute revenge on your enemies with a blend of stealth and deathblow attacks.'
      ],
      ratings: [
        { source: 'IGN', score: '9.5/10' },
        { source: 'GameSpot', score: '9/10' },
        { source: 'Metacritic', score: '90/100' }
      ]
    },
    darksouls: {
      title: 'Dark Souls Series',
      year: '2011-2016',
      image: darkSoulsImg,
      banner: darkSoulsImg,
      description: `The Dark Souls series is known for its punishing yet rewarding gameplay, intricate level 
                    design, and deep, mysterious lore. The series consists of three games, each bringing players 
                    into a dark, medieval fantasy world filled with undead creatures, fearsome bosses, and 
                    challenging combat. Dark Souls has become synonymous with difficulty in gaming, 
                    popularizing the phrase "Prepare to Die."`,
      features: [
        'Challenging Combat: Master the art of combat with precision timing, stamina management, and weapon mastery to overcome overwhelming odds.',
        'Rich Lore: Uncover the deep, cryptic story of a dying world through environmental details, item descriptions, and sparse NPC dialogue.',
        'Interconnected World: Explore meticulously designed levels that connect in surprising ways, rewarding exploration and discovery.',
        'Unique Online Experience: Interact with other players through messages, bloodstains, and cooperative or competitive multiplayer.'
      ],
      ratings: [
        { source: 'IGN', score: '9/10' },
        { source: 'GameSpot', score: '9.5/10' },
        { source: 'Metacritic', score: '89/100' }
      ]
    }
  }

  const game = featuredGames[activeGame as keyof typeof featuredGames]

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">LEGENDARY FRANCHISES</h2>
        
        <div className="flex flex-wrap justify-center mb-8 sm:mb-12 space-x-2 sm:space-x-4">
          {Object.keys(featuredGames).map((gameKey) => (
            <button
              key={gameKey}
              onClick={() => setActiveGame(gameKey)}
              className={`px-3 py-2 sm:px-4 sm:py-2 mb-2 text-xs sm:text-sm rounded-md transition-colors ${
                activeGame === gameKey 
                  ? 'bg-red-800 text-white' 
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {featuredGames[gameKey as keyof typeof featuredGames].title}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          <div className="relative overflow-hidden rounded-lg group order-1 lg:order-none">
            <img 
              src={game.banner} 
              alt={game.title} 
              className="w-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
              style={{height: '280px', maxHeight: '400px', objectPosition: 'center top'}}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-4 sm:p-6">
              <div className="flex items-center mb-2 sm:mb-3">
                <span className="text-red-500 font-semibold mr-3">{game.year}</span>
                <div className="h-px w-12 bg-red-800"></div>
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold mb-2 text-shadow-lg">{game.title}</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
                {game.ratings.map((rating, index) => (
                  <div key={index} className="bg-gray-800 px-2 py-1 rounded text-xs">
                    <span className="text-gray-400">{rating.source}:</span> {rating.score}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <p className="text-gray-300 text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed">
              {game.description}
            </p>
            
            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Key Features</h4>
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {game.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  <span className="text-gray-400 text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-red-800 hover:bg-red-700 text-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm rounded-md uppercase tracking-wider font-medium transition-colors">
                Explore {game.title}
              </button>
              <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white flex items-center group">
                <span className="mr-2">Watch Trailer</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M21 12l-6.75 6.75" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {Object.keys(featuredGames).map((gameKey) => {
            const currentGame = featuredGames[gameKey as keyof typeof featuredGames]
            return (
              <div 
                key={gameKey}
                className={`relative overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-105 ${
                  activeGame === gameKey ? 'ring-2 ring-red-600' : ''
                }`}
                onClick={() => setActiveGame(gameKey)}
              >
                <img 
                  src={currentGame.image} 
                  alt={currentGame.title}
                  className="w-full h-36 sm:h-48 md:h-56 object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-3 sm:p-4">
                  <h4 className="font-bold text-base sm:text-lg">{currentGame.title}</h4>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturedGames 