import { AlarmClockOff, ArrowDownNarrowWide, ArrowUpNarrowWide, LucideIcon } from "lucide-react";


interface IInfoCard {
    title:string;
    icon: LucideIcon;
    bodyText:string;
    id:number;
}

const infoCards: IInfoCard[] = [
    {
        title: "Increasing Medical accessibility",
        bodyText: "Clinexus aids in reducing administrative burdens, it empowers healthcare providers to focus on delivering quality care and make it more accessible.",
        icon: ArrowUpNarrowWide,
        id: 1
    },
    {
        title: "No Time Wasted",
        bodyText: "Clinexus eliminates delays by leveraging AI optimization to complete documentation in minutes, maximizing efficiency for healthcare providers.",
        icon: AlarmClockOff,
        id: 2
    },
    {
        title: "Decreased burn-out in medical experts",
        bodyText: "Clinexus boosts happiness in medical experts by removing mundane tasks, letting them focus on meaningful patient care.",
        icon: ArrowDownNarrowWide,
        id: 3
    },
]

export default infoCards
