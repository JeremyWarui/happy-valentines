import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Valentines.css'; 

function ValentinesSurprise() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [confettiCount, setConfettiCount] = useState(0); // State for confetti animation

  useEffect(() => {
    // Delay the reveal and start confetti animation
    setTimeout(() => {
      setIsRevealed(true);
      setConfettiCount(50); // Adjust confetti count as desired
    }, 4000);
  }, []);

  const message = "I wanted to tell you, I celebrate you this day!\nYou are one in a million.";

  const fade = useSpring({
    from: { opacity: 0, background: "none" },
    to: { opacity: 1, background: "linear-gradient(to right, purple, pink)" },
    config: { duration: 2000 },
  });

  return (
    <div
      className="surprise-container d-flex justify-content-center align-items-center"
      style={{
        background: "linear-gradient(to right, purple, pink)",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <animated.div
        className={isRevealed ? "surprise-revealed" : "surprise-hidden"}
        style={{ opacity: fade }}
      >
        {!isRevealed && (
          <p className="love-message">Something special coming...</p>
        )}
        {isRevealed && (
          <p
            className="love-message"
            style={{
              fontFamily: "Pacifico, cursive",
              fontSize: "20px", // Increase font size
              position: "relative", // Position for confetti overlap
            }}
          >
            {message}
            {/* Confetti animation using pseudo-elements */}
            <div
                style={{
                    position: "fixed", // Change this to fixed
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
                >
                {Array.from({ length: confettiCount }, (_, i) => (
                    <div
                    key={i}
                    className="confetti"
                    style={{
                        position: "absolute",
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        transform: `rotate(${Math.random() * 360}deg)`,
                        background: `radial-gradient(circle, ${
                        ["pink", "purple", "red", "gold"].map((color) => `${color} 10%`)
                        })`,
                        width: `${Math.random() * 10}px`,
                        height: `${Math.random() * 10}px`,
                        borderRadius: "50%",
                        animation: `confetti-fall 2s ease-in-out infinite`,
                    }}
                    />
                ))}
            </div>
          </p>
        )}
      </animated.div>
    </div>
  );
}

export default ValentinesSurprise;

// import React, { useState, useEffect } from 'react';
// import { useSpring, animated } from 'react-spring'; // Example animation library
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// function ValentinesSurprise() {
//   const [isRevealed, setIsRevealed] = useState(false);

//   useEffect(() => {
//     // Delay the reveal by 3 seconds
//     setTimeout(() => setIsRevealed(true), 4000);
//   }, []);

//   const message = "I wanted to tell you, I celebrate you this day! You are one in a million.";

//   const fade = useSpring({
//     from: { opacity: 0, background: "none" }, // Set initial background to none
//     to: { opacity: 1, background: "linear-gradient(to right, purple, pink)" },
//     config: { duration: 2000 }, // Adjust duration as needed
//   });

//   return (
//     <div
//     className="surprise-container d-flex justify-content-center align-items-center"
//         style={{
//             background: "linear-gradient(to right, purple, pink)",
//             height: "100vh",
//             width: "100vw",
//             position: "fixed",
//             top: 0,
//             left: 0,
//         }}
//     >   
//       <animated.div
//         className={isRevealed ? 'surprise-revealed' : 'surprise-hidden'}
//       >
//         {!isRevealed && <p className="love-message">Something special coming...</p>}
//         {isRevealed && (
//           <p className="love-message" style={{ fontFamily: 'Pacifico, cursive' }}>
//             {message}
//           </p>
//         )}
//       </animated.div>
//     </div>
//   );
// }

// export default ValentinesSurprise;