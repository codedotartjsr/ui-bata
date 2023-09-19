import { useEffect, useState } from 'react';
import { StartGame } from './StartGame';
import { ViewInstruction } from './ViewInstruction';
import { Privacypolicy } from './Privacypolicy';
import { Level1 } from './Level1';
import { Level2 } from './Level2';
import { Level3 } from './Level3';
import { Level4 } from './Level4';
import { Level5 } from './Level5';
import { LevelMap2 } from './LevelMap2';
import { LevelMap3 } from './LevelMap3';
import { LevelMap4 } from './LevelMap4';
import { LevelMap5 } from './LevelMap5';
import QRScanner from './QRScanner';
import { Winner } from './Winner';
import { Register } from './Registration';
import { Timeup2 } from './TimeUpRegistration';
import { Timeup3 } from './TimeUpRegistration';
import { Timeup4 } from './TimeUpRegistration';
import "./App.css"
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Timer } from './Timer';
import { Timeup1 } from './TimeUpRegistration';

function App() {

  useEffect(() => {
    const hasRefreshed = localStorage.getItem('hasRefreshed');
    
    if (hasRefreshed) {
      localStorage.removeItem('hasRefreshed');
      window.location.href = '/';
    } else {
      localStorage.setItem('hasRefreshed', 'true');
    }
  }, []);

  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
}

function MainContent() {
  const [pNo, setPNo] = useState(null);
  const location = useLocation();

  const hideTimerOnThesePaths = [
    '/',
    '/view-instruction',
    '/privacy-policy',
    "/begin-1",
    "/winner",
    "/register",
    '/timeup1',
    '/timeup2',
    '/timeup3',
    '/timeup4'
  ].includes(location.pathname);

  sessionStorage.setItem('campaignId', 3110);

  return (
    <div className="App">
      <div className="Timer">
        {!hideTimerOnThesePaths && <Timer pageNo={pNo}  />}
      </div>
      <Routes>
        <Route path='/' element={<StartGame />} />
        <Route path='/view-instruction' element={<ViewInstruction />} />
        <Route path='/privacy-policy' element={<Privacypolicy setPNo={setPNo} />} />
        <Route path='/scanner' element={<QRScanner pageNo={pNo} />} />
        <Route path='/begin-1' element={<Level1 setPNo={setPNo} />} />
        <Route path='/begin-2' element={<Level2 setPNo={setPNo} />} />
        <Route path='/begin-3' element={<Level3 setPNo={setPNo} />} />
        <Route path='/begin-4' element={<Level4 setPNo={setPNo} />} />
        <Route path='/begin-5' element={<Level5 setPNo={setPNo} />} />
        <Route path='/winner' element={<Winner />} />
        <Route path='/levelmap2' element={<LevelMap2 />} />
        <Route path='/timeup1' element={<Timeup1/>} />
        <Route path='/timeup2' element={<Timeup2/>} />
        <Route path='/timeup3' element={<Timeup3/>} />
        <Route path='/timeup4' element={<Timeup4/>} />
        <Route path='/levelmap3' element={<LevelMap3 />} />
        <Route path='/levelmap4' element={<LevelMap4 />} />
        <Route path='/levelmap5' element={<LevelMap5 />} />
        <Route path='/register' element={<Register />} />
        
       
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;




// import { useState } from 'react';
// import { ProtectedRoute } from './ProtectiveRoute';
// import { StartGame } from './StartGame';
// import { ViewInstruction } from './ViewInstruction';
// import { Privacypolicy } from './Privacypolicy';
// import { Level1 } from './Level1';
// import { Level2 } from './Level2';
// import { Level3 } from './Level3';
// import { Level4 } from './Level4';
// import { Level5 } from './Level5';
// import QRScanner from './QRScanner';
// import { Winner } from './Winner';
// import { Register } from './Registration';
// import "./App.css";
// import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import { Timer } from './Timer';

// function App() {
//   return (
//     <BrowserRouter>
//       <MainContent />
//     </BrowserRouter>
//   );
// }

// function MainContent() {
//   const [pNo, setPNo] = useState(null);
//   const [userLevel, setUserLevel] = useState(1); 
//   const location = useLocation();

//   const hideTimerOnThesePaths = [
//     '/',
//     '/view-instruction',
//     '/privacy-policy',
//     "/begin-1",
//     "/winner"
//   ].includes(location.pathname);

//   return (
//     <div className="App">
//       <div className="Timer">
//         {!hideTimerOnThesePaths && <Timer />}
//       </div>
//       <Routes>
//         <Route path='/' element={<StartGame />} />
//         <Route path='/view-instruction' element={<ViewInstruction />} />
//         <Route path='/privacy-policy' element={<Privacypolicy setPNo={setPNo} />} />
//         <Route path='/scanner' element={<QRScanner pageNo={pNo} />} />

//         <ProtectedRoute path='/begin-1' element={<Level1 setPNo={setPNo} userLevel={userLevel} setUserLevel={setUserLevel} />} userLevel={userLevel} expectedLevel={1} />
//         <ProtectedRoute path='/begin-2' element={<Level2 setPNo={setPNo} userLevel={userLevel} setUserLevel={setUserLevel} />} userLevel={userLevel} expectedLevel={2} />
//         <ProtectedRoute path='/begin-3' element={<Level3 setPNo={setPNo} userLevel={userLevel} setUserLevel={setUserLevel} />} userLevel={userLevel} expectedLevel={3} />
//         <ProtectedRoute path='/begin-4' element={<Level4 setPNo={setPNo} userLevel={userLevel} setUserLevel={setUserLevel} />} userLevel={userLevel} expectedLevel={4} />
//         <ProtectedRoute path='/begin-5' element={<Level5 setPNo={setPNo} userLevel={userLevel} setUserLevel={setUserLevel} />} userLevel={userLevel} expectedLevel={5} />

//         <Route path='/winner' element={<Winner />} />
//         <Route path='/register' element={<Register />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;








// import { useState } from 'react';
// import { ProtectedRoute } from './ProtectiveRoute';
// import { StartGame } from './StartGame';
// import { ViewInstruction } from './ViewInstruction';
// import { Privacypolicy } from './Privacypolicy';
// import { Level1 } from './Level1';
// import { Level2 } from './Level2';
// import { Level3 } from './Level3';
// import { Level4 } from './Level4';
// import { Level5 } from './Level5';
// import QRScanner from './QRScanner';
// import { Winner } from './Winner';
// import { Register } from './Registration';
// import "./App.css";
// import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import { Timer } from './Timer';

// function App() {
//   return (
//     <BrowserRouter>
//       <MainContent />
//     </BrowserRouter>
//   );
// }

// function MainContent() {
//   const [pNo, setPNo] = useState(null);
//   const [userLevel, setUserLevel] = useState(1); 
//   const location = useLocation();

//   const hideTimerOnThesePaths = [
//     '/',
//     '/view-instruction',
//     '/privacy-policy',
//     "/begin-1",
//     "/winner"
//   ].includes(location.pathname);

//   return (
//     <div className="App">
//       <div className="Timer">
//         {!hideTimerOnThesePaths && <Timer />}
//       </div>
//       <Routes>
//         <Route path='/' element={<StartGame />} />
//         <Route path='/view-instruction' element={<ViewInstruction />} />
//         <Route path='/privacy-policy' element={<Privacypolicy setPNo={setPNo} />} />
//         <Route path='/scanner' element={<QRScanner pageNo={pNo} />} />

//          <Route path='/begin-1' element={
//           <ProtectedRoute userLevel={userLevel} expectedLevel={1}>
//             <Level1 setPNo={setPNo} userLevel={userLevel} setUserLevel={setUserLevel} />
//           </ProtectedRoute>
//         }/>
//         <ProtectedRoute path='/begin-2' element={<Level2 setPNo={setPNo} userLevel={userLevel} setUserLevel={setUserLevel} />} userLevel={userLevel} expectedLevel={2} />
//         <ProtectedRoute path='/begin-3' element={<Level3 setPNo={setPNo} userLevel={userLevel} setUserLevel={setUserLevel} />} userLevel={userLevel} expectedLevel={3} />
//         <ProtectedRoute path='/begin-4' element={<Level4 setPNo={setPNo} userLevel={userLevel} setUserLevel={setUserLevel} />} userLevel={userLevel} expectedLevel={4} />
//         <ProtectedRoute path='/begin-5' element={<Level5 setPNo={setPNo} userLevel={userLevel} setUserLevel={setUserLevel} />} userLevel={userLevel} expectedLevel={5} />

//         <Route path='/winner' element={<Winner />} />
//         <Route path='/register' element={<Register />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


       
       


