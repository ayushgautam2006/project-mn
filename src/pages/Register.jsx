import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithCustomToken, signInAnonymously, onAuthStateChanged } from 'firebase/auth'; 
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    phone: '',
    event: 'minare',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [db, setDb] = useState(null);
  const [authReady, setAuthReady] = useState(false); // Controls form usability

  // --- 1. YOUR REAL FIREBASE CONFIGURATION ---
  // UPDATED with the latest appId and measurementId
  const REAL_FIREBASE_CONFIG = {
    apiKey: "AIzaSyA6_iVyTl6UCyR5Mm5mHmxGrXK-es4j5Z8",
    authDomain: "mini-project-minare.firebaseapp.com",
    projectId: "mini-project-minare",
    storageBucket: "mini-project-minare.firebasestorage.app",
    messagingSenderId: "807383020697",
    appId: "1:807383020697:web:1e4a2ff71a04084f71b408", // Updated appId
    measurementId: "G-H404T2JRCT" // Updated measurementId
  };

  // --- Firebase Initialization ---
  useEffect(() => {
    let unsubscribe = () => {};

    try {
      // --- Configuration Handling ---
      // We prioritize the environment's __config, but fall back to your REAL_FIREBASE_CONFIG
      const environmentConfigString = typeof __firebase_config !== 'undefined' ? __firebase_config : JSON.stringify(REAL_FIREBASE_CONFIG);
      const firebaseConfig = JSON.parse(environmentConfigString);
      const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;
      
      // Use your project name as the definitive App ID
      const appId = firebaseConfig.projectId || 'mini-project-minare';

      if (!firebaseConfig || !firebaseConfig.projectId) {
        setMessage('Initialization failed: Firebase configuration is missing or empty.');
        return;
      }

      // --- Initialize and Authenticate ---
      const app = initializeApp(firebaseConfig);
      const firestoreDb = getFirestore(app);
      const auth = getAuth(app);
      
      setDb(firestoreDb);

      const authenticate = async () => {
        try {
          if (initialAuthToken) {
            await signInWithCustomToken(auth, initialAuthToken);
          } else {
            await signInAnonymously(auth);
          }

          // Use onAuthStateChanged to confirm user is logged in
          unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setAuthReady(true);
            } else {
              setMessage('Initialization failed: User authentication required.');
            }
          });
        } catch(authError) {
          console.error("Firebase Authentication Error:", authError);
          setMessage(`Authentication failed. Error: ${authError.message}`);
        }
      };

      authenticate();

    } catch (error) {
      console.error("Firebase Initialization Error:", error);
      setMessage(`Initialization failed. Error: ${error.message}`);
    }

    // Cleanup function: remove auth listener when component unmounts
    return () => unsubscribe();
  }, []);

  // Styles the page background to match the cosmic theme
  const backgroundStyle = {
    backgroundImage: `url('https://minare.nitrkl.ac.in/static/media/banner-bg.cc1273af450504afe755.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!db || !authReady) {
      setMessage('Database not ready. Please wait a moment.');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      // Use the project ID directly from the config for consistency
      const appId = REAL_FIREBASE_CONFIG.projectId;
      
      // --- FIREBASE DATA STORAGE ---
      // Data will be stored publicly in the 'registrations' collection
      const registrationRef = collection(db, `artifacts/${appId}/public/data/registrations`);

      await addDoc(registrationRef, {
        ...formData,
        timestamp: serverTimestamp(), // Record when the registration occurred
      });

      setMessage('Registration successful! Your data has been saved.');
      setFormData({ // Reset form after successful submission
        name: '',
        email: '',
        institution: '',
        phone: '',
        event: 'minare',
      });

    } catch (error) {
      console.error("Firestore Submission Error:", error);
      setMessage(`Registration failed. Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Tailwind classes for input fields
  const inputClass = "w-full p-3 bg-gray-800 text-white border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200 placeholder-gray-500";

  return (
    <div style={backgroundStyle} className="min-h-screen pt-24 pb-12 flex justify-center items-start">
      <div 
        className="w-full max-w-lg p-8 mx-4 bg-gray-900/90 rounded-xl shadow-2xl backdrop-blur-md 
                   border border-purple-500/50 transform hover:shadow-purple-500/50 transition-all duration-500"
      >
        <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Event Registration
        </h1>
        <p className="text-center text-gray-400 mb-8">Join the National Level Geo-Mining Festival!</p>

        {/* Success/Error Message Display */}
        {message && (
          <div className={`p-3 rounded-lg mb-4 text-center border ${message.includes('failed') || message.includes('Authentication failed') ? 'bg-red-600/20 text-red-300 border-red-500' : 'bg-green-600/20 text-green-300 border-green-500'}`}>
            {message}
          </div>
        )}
        
        {/* Conditional rendering for connection status */}
        {!authReady && !message.includes('failed') && (
           <div className="p-3 mb-4 text-center text-yellow-300 bg-yellow-600/20 rounded-lg border border-yellow-500">
             Connecting to database...
           </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Form fields remain the same */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={inputClass}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john.doe@example.com"
              className={inputClass}
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className={inputClass}
              required
            />
          </div>

          <div>
            <label htmlFor="institution" className="block text-sm font-medium text-gray-300 mb-2">Institution/College Name</label>
            <input
              type="text"
              id="institution"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              placeholder="NIT Rourkela"
              className={inputClass}
              required
            />
          </div>
          
          <div>
            <label htmlFor="event" className="block text-sm font-medium text-gray-300 mb-2">Registering For</label>
            <select
              id="event"
              name="event"
              value={formData.event}
              onChange={handleChange}
              className={inputClass}
              required
            >
              <option value="minare">MINARE (All Events)</option>
              <option value="paper">Paper Presentation Only</option>
              <option value="quiz">Geo-Quiz Only</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || !authReady}
            className={`w-full py-3 mt-4 text-lg font-semibold rounded-lg transition-all duration-300 relative overflow-hidden group 
              ${isSubmitting || !authReady
                ? 'bg-gray-800 text-gray-400 cursor-not-allowed' 
                : 'bg-purple-600 text-white hover:bg-purple-700 cursor-pointer'
              }`}
          >
            {/* Subtle glow effect on the button */}
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Register Now'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
