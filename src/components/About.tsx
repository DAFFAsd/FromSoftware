import miyazakiImg from '../assets/Hidetaka_Miyazaki.png'

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">FROM<span className="text-red-600">SOFTWARE</span></h2>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              FromSoftware, Inc. is a renowned Japanese video game development company founded in 1986.
              Since our inception, we have pushed the boundaries of game development and established ourselves
              as pioneers of challenging gameplay experiences that reward skill and perseverance.
            </p>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              Our distinctive approach to game design has created unique worlds filled with intricate lore,
              memorable characters, and imposing challenges. FromSoftware is best known for its acclaimed
              Souls series, Bloodborne, Sekiro: Shadows Die Twice, and the groundbreaking open-world RPG 
              Elden Ring, which has redefined the action RPG genre.
            </p>
            <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Led by visionary director Hidetaka Miyazaki, our commitment to crafting meticulously
              designed worlds and combat systems has earned us numerous awards and a dedicated global fanbase.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <div className="bg-gray-900 p-3 sm:p-4 rounded-lg flex flex-col items-center flex-1 min-w-[90px] sm:min-w-[120px]">
                <span className="text-xl sm:text-3xl font-bold text-red-600 mb-1">1986</span>
                <span className="text-xs sm:text-sm uppercase text-gray-400">Founded</span>
              </div>
              <div className="bg-gray-900 p-3 sm:p-4 rounded-lg flex flex-col items-center flex-1 min-w-[90px] sm:min-w-[120px]">
                <span className="text-xl sm:text-3xl font-bold text-red-600 mb-1">35+</span>
                <span className="text-xs sm:text-sm uppercase text-gray-400">Games</span>
              </div>
              <div className="bg-gray-900 p-3 sm:p-4 rounded-lg flex flex-col items-center flex-1 min-w-[90px] sm:min-w-[120px]">
                <span className="text-xl sm:text-3xl font-bold text-red-600 mb-1">100+</span>
                <span className="text-xs sm:text-sm uppercase text-gray-400">Awards</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center items-center mt-6 md:mt-0">
            <div className="bg-gray-900 rounded-lg overflow-hidden mb-4">
              <img 
                src={miyazakiImg}
                alt="Hidetaka Miyazaki" 
                className="w-full max-w-md mx-auto" 
              />
            </div>
            <div className="bg-gray-900 p-3 sm:p-4 rounded w-full max-w-md">
              <h3 className="text-lg sm:text-xl font-bold mb-1 text-center">Hidetaka Miyazaki</h3>
              <p className="text-xs sm:text-sm text-gray-400 text-center">President of FromSoftware, Inc. and acclaimed game director responsible for the Souls series, Bloodborne, Sekiro, and Elden Ring.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 