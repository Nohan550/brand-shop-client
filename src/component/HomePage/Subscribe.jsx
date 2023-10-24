import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
const Subscribe = () => {
    const handleSubscribe = () => {
        Swal.fire({
            title: 'Success',
            text: 'You have subscribed',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
    return (
    <div className="bg-sky-200 h-96 flex flex-col gap-8 items-center justify-center">
       <div className=" text-center space-y-8">
       <h1 className=" text-3xl font-semibold">Subscribe to our site</h1>
        <p className="text-xl font-medium">You will be notified when new tech arrives or any offer starts</p>
       </div>
            <div className="join">
  <input className="input input-bordered join-item" placeholder="Email"/>
  <button onClick={handleSubscribe} className="btn join-item bg-emerald-400 text-white rounded-r-full">Subscribe</button>
</div>
    </div>
    );
};

export default Subscribe;