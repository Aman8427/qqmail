import React, { useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import InboxIcon from '@mui/icons-material/Inbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ForwardIcon from '@mui/icons-material/Forward';
import DraftsIcon from '@mui/icons-material/Drafts';

export const Sidebar = () => {
    let sidebarcomp = [
        { title: "Inbox", icon: <InboxIcon /> },
        { title: "Starred", icon: <StarBorderIcon/> },
        { title: "Snoozed", icon: <QueryBuilderIcon/> },
        { title: "Sent", icon: <ForwardIcon/>},
        { title: "Drafts", icon: <DraftsIcon/> }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="sidebar h-[100vh] w-[20vw] bg-[#F6F8FC] py-10 flex flex-col items-start">
            <div className='flex flex-row items-center ml-4 hover:scale-105 hover:shadow-md rounded-xl'>
                <div className='h-16 bg-[#C2E7FF] flex items-center rounded-l-xl pl-2'><CreateIcon /></div>
                <button className='h-16 py-4 bg-[#C2E7FF] w-fit pl-4 pr-8 text-xl font-semibold rounded-r-xl '>Compose</button>
            </div>
            <div className='sidebar-comp flex flex-col items-start h-fit w-full space-y-2 mt-7'>
                {
                    sidebarcomp.map((note, i) => {
                        return (
                            <SidebarComponent
                                key={i}
                                title={note.title}
                                icon={note.icon}
                                active={activeIndex === i}
                                onClick={() => handleItemClick(i)}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

function SidebarComponent(props) {
    return (
        <div className={`h-10 w-[95%] px-4 flex items-center rounded-r-2xl ${props.active ? 'bg-[#D3E3FD]' : 'hover:bg-[#EAEBEF]'}`} onClick={props.onClick}>
            {props.icon && <div className="mr-2">{props.icon}</div>}
            <p className='text-[2vh] font-semibold'>{props.title}</p>
        </div>
    );
}
