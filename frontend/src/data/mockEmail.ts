import type { Email } from '../types/email';

export const mockEmails: Email[]=[
    {
        id:1,
        sender: "oliver@onbdomain.io",
        recipient:"alex@company.com",
        subject:"Welcome to ONB",
        preview: "Welcome to the team!",
        time:"Today,10:00 AM",
        status:"Scheduled"
    },
    {
        id:2,
        sender: "oliver@onbdomain.io",
        recipient:"jane@company.com",
        subject:"Your weekly update",
        preview: "Here's your weekly update!",
        time:"Today,10:00 AM",
        status:"Scheduled"
    },
    {
        id:3,
        sender: "oliver@onbdomain.io",
        recipient:"bob@company.com",
        subject:"Project launch details",
        preview: "We are launching soon....",
        time:"Yesterday,11:00 AM",
        status:"Sent"
    },
]