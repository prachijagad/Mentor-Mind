import SidebarRow from "./ui/SidebarRow";
import { Home, User, Settings, Mail, Search, Notebook, Goal, BrainCircuit, TrendingUp  } from 'lucide-react'

export default function Sidebar(){
    return (
        <div className="w-[200]  h-screen bg-[#212121]">
            <div className="pt-[5] ">
                <p className="ml-[5] flex items-center text-sm h-[30] m-[5] px-[10]" >TechCareer AI</p>
                <SidebarRow title="Dashboard" Icon={Home}/>
                <SidebarRow title="Profile" Icon={User}/>
                <SidebarRow title="Courses" Icon={Notebook}/>
                <SidebarRow title="Progress" Icon={TrendingUp }/>
                <SidebarRow title="Roadmap" Icon={Goal}/>
                <SidebarRow title="AI Tutor" Icon={BrainCircuit}/>
            </div>
        </div>
        
    );
} 