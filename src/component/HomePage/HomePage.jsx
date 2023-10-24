import Brands from './Brands';
import PreOrder from './PreOrder';
import Subscribe from './Subscribe';
import banner from '/onur-binay-_yC2htzMYnI-unsplash.jpg'

const HomePage = () => {
  return (
    <div>
      <div
        className="hero h-[600px]"
        style={{
          backgroundImage:
            `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-xl font-medium ">Welcome To <span className='text-5xl font-bold'>VibeMos</span></h1>
            <p className="mb-5">
             VibeMos is your constant companion providing your neccessary tech to your home as soon as possible
            </p>
            <button className="btn btn- bg-blue-400 text-white text-2xl">Explore VibeMos</button>
          </div>
        </div>
      </div>

      <Brands></Brands>
      <PreOrder></PreOrder>
      <Subscribe></Subscribe>    </div>
  );
};

export default HomePage;
