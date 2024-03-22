import React from 'react';
import { CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon } from '@mui/icons-material';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';



const emailData = [
    {
        title: "Meeting Reminder",
        desc: "Don't forget about the team meeting today at 3:00 PM.",
        time: "12:30 PM",
    },
    {
        title: "New Product Launch",
        desc: "Introducing our latest product line. Check it out now!",
        time: "Yesterday",
    },
    {
        title: "Weekly Newsletter",
        desc: "Stay updated with our weekly newsletter. Exciting news inside!",
        time: "2 days ago",
    },
    {
        title: "Project Update",
        desc: "Important update regarding the ongoing project. Please review.",
        time: "3 days ago",
    },
    {
        title: "Upcoming Event",
        desc: "Get ready for the upcoming event. Details enclosed!",
        time: "Last week",
    },
];

const EmailList = () => {
    return (
        
        <div className='flex flex-col overflow-scroll w-full'>
            <div className='settings flex flex-row px-5 sticky h-fit w-full bg-white py-8 z-50'>
                <div className='settings-left flex flex-row items-center space-x-2'>
                    <CheckBoxOutlineBlankIcon />
                    <RotateLeftIcon />
                    <MoreVertIcon />
                </div>
            </div>
            <div className="list flex flex-col h-full w-full space-y-1 mt-2">
                {emailData.map((email, index) => (
                    <ERow key={index} title={email.title} desc={email.desc} time={email.time} />
                ))}
            </div>
        </div>
    );
};

const ERow = (props) => {
    
    return (
        <Link to="/mail">
        <div className='h-fit w-full bg-white flex flex-row items-center p-2 border border-black-1 justify-between hover:shadow-md'>
            <div className='flex flex-row items-center justify-between w-[80%] '>
            <div className='  font-bold'>{props.title}</div>
            <div className=' text-left font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis w-[70%]'>{props.desc}</div>
            </div>
            <div>{props.time}</div>
        </div>
        </Link>
    );
};

export default EmailList;
