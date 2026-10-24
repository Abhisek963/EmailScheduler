export type Email = {
    id:number;
    sender:string;
    recipient:string;
    subject:string;
    preview:string;
    time:string;
    status: "Scheduled" | "Sent" | "Failed";
}