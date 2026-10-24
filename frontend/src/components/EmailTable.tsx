import type {Email} from '../types/email';

type EmailTableProps = {
    emails: Email[];
    activeTab: "Scheduled" | "Sent" ;
    onOpenEmail: (email: Email) => void;
}

function EmailTable({emails, activeTab, onOpenEmail}: EmailTableProps){
    if(emails.length === 0){
        return(
            <div className='py-[70px] text-center text-[11px] text-gray-400'>
                No {activeTab.toLowerCase()} emails to display
            </div>
        )
    }

    return(
    <div>
    {emails.map((email) => (
        <button
        key={email.id}
        onClick={() => onOpenEmail(email)}
        className="grid min-h-[41px] w-full grid-cols-[15px_120px_minmax(100px,1fr)_auto] items-center gap-[9px] border-t border-[#eff1ef] px-[3px] py-[7px] text-left text-[10px] hover:bg-[#fafcfb]"
        >
        <span className="h-[12px] w-[12px] rounded-[3px] border border-[#dce2dc]" />
        <span className="truncate font-semibold">{email.sender}</span>
        <span className="truncate">{email.subject}</span>
        <span
        className={`rounded-[4px] px-[6px] py-[4px] text-[8px] ${
        email.status === "Scheduled"
                ? "bg-[#fff1e2] text-[#b4772f]"
                : email.status === "Sent"
                ? "bg-[#e5f7eb] text-[#1b9958]"
                : "bg-[#ffe9e9] text-[#c94d4d]"
            }`}>
            {email.status}
        </span>
        </button>
    ))}
    </div>
    )
}
export default EmailTable;