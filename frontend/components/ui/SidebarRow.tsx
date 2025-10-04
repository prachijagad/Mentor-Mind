export default function SidebarRow(props:{title:string, Icon:React.ComponentType}){
    return (
        <div className="ml-[5] flex items-center hover:bg-[#414141] cursor-pointer h-[30] m-[5] px-[10] ">
            {/* icon */}
            <div className="flex items-center w-[16px] h-[16px] "><props.Icon /></div>
            {/* title */}
            <h5 className="px-[7]">{props.title}</h5>
        </div>
    );
}