import React, { useState } from 'react';
import { X } from 'lucide-react';

const AuthForm = ({ onClose, isModal }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpValue, setOtpValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otpSent) {
      setOtpSent(true);
    } else {
      if (onClose) onClose(); // Simulate successful login/signup by closing modal
    }
  };

  return (
    <div className={`flex flex-col md:flex-row w-full ${isModal ? 'max-w-3xl h-[80vh] md:h-[500px]' : 'max-w-4xl min-h-[500px] shadow-lg'} bg-white rounded-sm overflow-hidden`}>
      
      {/* Left Blue Pane */}
      <div className="bg-primary text-white w-full md:w-2/5 p-8 hidden md:flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-medium mb-4">{isSignUp ? "Looks like you're new here!" : 'Login'}</h2>
          <p className="text-gray-100 text-lg leading-snug">
            {isSignUp ? 'Sign up with your mobile number to get started' : 'Get access to your Orders, Wishlist and Recommendations'}
          </p>
        </div>
      </div>

      {/* Right White Pane */}
      <div className="w-full md:w-3/5 p-8 flex flex-col justify-between relative">
        {/* Mobile Header (replaces blue pane text on small screens) */}
        <div className="md:hidden mb-6">
           <h2 className="text-2xl font-medium text-gray-900 mb-2">{isSignUp ? "Looks like you're new here!" : 'Login'}</h2>
           <p className="text-gray-500 text-sm">
             {isSignUp ? 'Sign up with your mobile number to get started' : 'Get access to your Orders, Wishlist and Recommendations'}
           </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-grow">
          {!otpSent ? (
            <>
              <div className="relative group mt-4">
                <input 
                  type="text" 
                  required
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black peer bg-transparent text-black"
                  placeholder=" "
                />
                <label className={`absolute left-0 text-gray-500 transition-all duration-200 pointer-events-none 
                    ${inputValue ? '-top-3 text-xs text-black' : 'top-2 text-base'} peer-focus:-top-3 peer-focus:text-xs peer-focus:text-black`}>
                  Enter Email/Mobile number
                </label>
              </div>

              <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                By continuing, you agree to UrbanGen's <span className="text-primary cursor-pointer">Terms of Use</span> and <span className="text-primary cursor-pointer">Privacy Policy</span>.
              </p>
            </>
          ) : (
            <div className="flex flex-col text-center mt-4">
               <p className="text-gray-600 mb-6">
                 Please enter the OTP sent to<br/>
                 <span className="font-bold text-black">{inputValue}</span>
                 <button type="button" onClick={() => setOtpSent(false)} className="text-primary ml-3 font-medium hover:underline text-sm">
                   Change
                 </button>
               </p>
               
               <div className="w-full mt-2">
                 <input 
                   type="text" 
                   maxLength="6"
                   required
                   autoFocus
                   placeholder="* * * * * *"
                   value={otpValue}
                   onChange={(e) => setOtpValue(e.target.value.replace(/\D/g, ''))}
                   className="w-full text-center tracking-[1em] text-xl border-b-2 border-gray-300 py-2 focus:outline-none focus:border-primary peer bg-transparent text-black font-bold"
                 />
               </div>
            </div>
          )}

          <button 
            type="submit"
            className="w-full bg-[#fb641b] text-white py-3 rounded-sm font-medium shadow-sm text-sm uppercase hover:shadow-md transition-shadow mt-auto"
          >
            {otpSent ? 'Verify' : 'Request OTP'}
          </button>
        </form>

        <div className="mt-auto pt-8 flex flex-col gap-4">
          <div className="flex items-center justify-center gap-1 cursor-pointer" onClick={() => setIsSignUp(!isSignUp)}>
            <span className="text-primary text-sm font-medium hover:underline">
               {isSignUp ? 'Existing User? Log in' : 'New to UrbanGen? Create an account'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
