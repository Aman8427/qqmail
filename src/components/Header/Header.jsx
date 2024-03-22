import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings'; // Importing the SettingsIcon
import HelpIcon from '@mui/icons-material/Help';
import AppsIcon from '@mui/icons-material/Apps';
import DehazeIcon from '@mui/icons-material/Dehaze';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';


export const Header = () => {
  return (
    <div className='flex flex-row items-center px-5 h-20 w-screen justify-between space-x-48 '>
      <div className="header-left flex flex-row items-center space-x-7">
        <DehazeIcon/>
        <div className='font-extrabold text-2xl'>Qmail</div>
      </div>
      <div className=' flex flex-row items-center h-[100%] w-[100%]'>
        <div className=' bg-[#EAF1FB] h-[60%] flex items-center rounded-l-3xl pl-2 '><SearchIcon></SearchIcon></div>
      <input type='text' placeholder='Search Mail' className='h-[60%] w-[100%] bg-[#EAF1FB]  pl-6 outline-none'></input>
      <div className=' bg-[#EAF1FB] h-[60%] flex items-center rounded-r-3xl pr-2 '><TuneIcon/></div>
      </div>
      <div className="header-right flex flex-row items-center h-[100%] space-x-5">
        <HelpIcon/>
        <SettingsIcon /> 
        <AppsIcon></AppsIcon>
        
        <div className='h-10 w-10 bg-black rounded-full'></div>
      </div>
    </div>
  );
};
