import { AlarmClockOff, ArrowDownNarrowWide, ArrowUpNarrowWide, LucideIcon } from "lucide-react";


interface IInfoCard {
    title:string;
    icon: LucideIcon;
    bodyText:string;
    id:number;
}

const infoCards: IInfoCard[] = [
    {
        title: "Decision Support",
        bodyText: "One-stop assisted diagnosis system for medical practitioners",
        icon: ArrowUpNarrowWide,
        id: 1
    },
    {
        title: "Productivity",
        bodyText: "Facilitate early intervention and preventive measures",
        icon: AlarmClockOff,
        id: 2
    },
    {
        title: "Accuracy",
        bodyText: "Enhance the Diagnostics recommendation",
        icon: ArrowDownNarrowWide,
        id: 3
    },
]

export default infoCards
