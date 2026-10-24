import { mockEmails } from "../data/mockEmail";
import type { Email } from "../types/email";
import { useState } from "react";
import EmailTable from "../components/EmailTable";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

type DashboardProps = {
    onCompose: () => void;
    onOpenEmail: (email: Email) => void;
    onLogout: () => void;
}

function DashboardPAge({
onCompose, onOpenEmail, onLogout}: DashboardProps){
    const [activeTab, setActiveTab] = useState<"Scheduled" | "Sent">("Scheduled");
    const [search,setSearch] = useState("");
    const visibleEmails=mockEmails.filter(
        (email)=>email.status===activeTab && `${email.sender} ${email.subject}`.toLowerCase().includes(search.toLowerCase())
    )

    return(
        <div className="flex min-h-screen bg-white text-[#26332a]">
            <Sidebar
            activeTab={activeTab}
            onTabChange={setActiveTab}
            scheduledCount={mockEmails.filter((email)=>email.status==="Scheduled").length}
            sentCount={mockEmails.filter((email)=>email.status==="Sent").length}
            onCompose={onCompose}
            onLogout={onLogout}
            />
            <main className="min-w-0 flex-1">
                <Header search={search} onSearchChange={setSearch}/>
                <section className="p-[17px]">
                    <div className="mb-[9px] flex items-center gap-[8px] ">
                        <h2 className="text-[11px] font-semibold">{activeTab}</h2>
                        <span className="rounded-[8px] bg-[#e5f7ec] px-[6px] py-[4px] text-[9px] text-[#15904f]">
                            {visibleEmails.length}
                        </span>
                    </div>
                    <EmailTable
                    emails={visibleEmails}
                    activeTab={activeTab}
                    onOpenEmail={onOpenEmail}
                    />

                </section>

            </main>

        </div>
    )

}

export default DashboardPAge;