import React, { useState } from "react";
import { Data } from "../data";

const Letters = () => {


  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState('');
  const handleChange = event => {
    setMessage(event.target.value);
  };
  // const handleClick = event => {
  //   event.preventDefault();

  //   if (message.trim().length !== 0) {
  //     console.log('input value is NOT empty');
  //     //change window location
  //     setVisible(true);
  //     console.log(visible);
  //   } else {
  //     setVisible(false);
  //     console.log('input value is empty');
  //   }

    
  // };



  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content ">
        <div className="max-w-md">
          <div className="flex">
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Dear Sir/Ma'am</h2>
                    {Data.map((u) => (                
                  <div>
                    <p className="card-subtitle">{u.message1}</p>
                  </div>
                    ))}          
                <div className="card-actions justify-end">
                  {/* The button to open modal */}
                  <label htmlFor="my-modal-3" className="btn btn-ghost">
                    <a href="/tasks">Close</a>
                  </label>
                  {/* Put this part before </body> tag */}
                  <label htmlFor="my-modal" className="btn btn-primary">Reply</label>
                  
                 
                  {visible ? (
                    <>
                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">Dear Sir,</h3>
                        <p className="py-4">I’ve discovered concerning activity in the electricity department. Requesting an appointment to meet you as soon as possible</p>
                        <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Ok</label>
                        
                     </div>
                    </div>
                  </div>
                  </>
                  )
                  : (
                    <>
                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">Empty Reply!</h3>
                        <p className="py-4">Please enter a reply</p>
                        <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Ok</label>
                      </div>
                    </div>
                  </div>
                    </>
                  )}

                </div>
                  <textarea id="my-modal-3" onChange={handleChange} autoComplete="off" placeholder="Reply"></textarea>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letters;
