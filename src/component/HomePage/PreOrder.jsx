
const PreOrder = () => {
    return (
        <div className="hero h-[600px]  bg-rose-200">
           
        <div className="hero-content flex-col   lg:flex-row-reverse lg:gap-40">
            
          <img src="https://i.ibb.co/syKrft4/alexander-shatov-ENOc-Rp-Yw-T68-unsplash.jpg" className="max-w-sm lg:max-w-4xl rounded-lg shadow-2xl" />
          
          <div className="text-sky-600 text-center lg:text-start">
            <h1 className="text-5xl  font-bold">A surprise </h1>
            <p className="py-6 text-2xl">Interesting tech is coming next month</p>
            <button className="btn btn-primary btn-lg rounded-2xl">Stay Tune</button>
          </div>
        </div>
      </div>
    );
};

export default PreOrder;