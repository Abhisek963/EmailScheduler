import {Search , Settings, MoreHorizontal} from "lucide-react";

type HeaderProps = {
    search:string;
    onSearchChange:(value:string)=>void;
}

function Header({search, onSearchChange}:HeaderProps){
    return(
        <header className="flex h-[50px] items-center justify-between border-b border-[#edf0ed] px-[17px] py-[10px]">
            <div className="flex w-[240px] items-center gap-[7px] rounded-[4px] border border-[#f7f9f7] px-[8px] py-[6px] text-gray-400">
        <Search size={12} />
        <input 
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search"
        className="w-full bg-transparent text-[10px] text-gray-700 outline-none"
        />
            </div>
        <div className="flex items-center gap-[12px] text-gray-400">
            <button aria-label="Settings">
                <Settings size={12} />
            </button>
        <button aria-label="More-Options">
                <MoreHorizontal size={12} />
            </button>
            <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#dceee2] text-[10px] font-bold text-[#287449]">
                O
            </div>
        </div>

        </header>
    )
}

export default Header;