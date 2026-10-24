import{ Clock3, Send, Plus, ChevronDown, Settings, LogOut} from "lucide-react";

type SidebarProps = {
    activeTab: "Scheduled" | "Sent";
    onTabChange: (tab: "Scheduled" | "Sent") => void;
    scheduledCount: number;
    sentCount: number;
    onCompose: () => void;
    onLogout: () => void;

}
function Sidebar({
    activeTab,onTabChange, scheduledCount, sentCount, onCompose, onLogout
}: SidebarProps){
    return(
        <aside className="flex min-h-screen w-[210px] shrink-0 flex-col border-r border-[#e9ede9] bg-white px-[12px] py-[14px]" >
            <h1 className="mb-[16px] px-[5px] text-[20px] font-extrabold tracing-[-1px]">
                ONB
            </h1>
            <div className="mb-[17px] flex items-center gap-[7px] px-[5px] py-[7px]">
                <div className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#dceee2] text-[10px] font-bold text-[#287449]">
                    O
                </div>
                <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold">Oliver Brown</p>
                    <p className="truncate text-[8px] text-gray-400">oliver@onbdomain.io</p>
                </div>
                <ChevronDown size={13} className="text-gray-400" />
            </div>
            <button 
            onClick={onCompose}
            className="mb-[18px] flex h-[30px] items-center justify-center gap-[6px] rounded-[4px] bg-[#e4f6eb] text-[9px] font-semibold text-[#128c4c] hover:bg-[#d5f0df] ">
                <Plus size={12} />
                Compose
            </button>
            <p className="mb-[7px] px-[7px] text-[8px] font-bold tracking-[1px] text-gray-400">Mailbox </p>
        <button onClick={()=>onTabChange("Scheduled")}
                className={`flex items-center gap-[8px] rounded-[4px] px-[8px] py-[9px] text-left text-[10px] ${
                    activeTab === "Scheduled" ? "bg-[#e3f6eb] font-semibold text-[#078849]":"text-[#68746b] hover:bg-gray-50"
                }`}>
            <Clock3 size={12} />
            Scheduled
            <span className="ml-auto">{scheduledCount}</span>
        </button>
        <button onClick={()=>onTabChange("Sent")}
                className={`flex items-center gap-[8px] rounded-[4px] px-[8px] py-[9px] text-left text-[10px] ${
                    activeTab === "Sent" ? "bg-[#e3f6eb] font-semibold text-[#078849]":"text-[#68746b] hover:bg-gray-50"
                }`}>
            <Send size={12} />
            Sent
            <span className="ml-auto">{sentCount}</span>
        </button>
        <div className="mt-auto border-t border-[#eef1ee] pt-[9px] ">
            <button className="flex w-full items-center gap-[8px] px-[8px] py-[9px] text-[10px] text-gray-500">
                <Settings size={12} />
                Settings
            </button>
            <button onClick={onLogout} className="flex w-full items-center gap-[8px] px-[8px] py-[9px] text-[10px] text-gray-500">
                <LogOut size={12} />
                Logout
            </button>
        </div>
        </aside>
    )
}

export default Sidebar;