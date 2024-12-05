interface IPricingCard {
    // price:number;
    title:string;
    benefits:string[];
    id:number;
    oneliner:string;
}

const pricingCards:IPricingCard[] = [
    {
        title: "Lets Solve Analytics",
        benefits: [
          ""  
        ],
        id: 1,
        oneliner: "We bring ideas into reality with our team of experts in IT consulting"
    },
    // {
    //     price: 99,
    //     title: "Rumo Enterprise",
    //     benefits: [
    //         "Everything In Pro Tier, and:",
    //         "Data-driven recommendations",
    //         "Customizable sales workflows",
    //         "Real-time alerts and notifications",
    //     ],
    //     id: 2,
    //     oneliner: "Comprehensive sales optimization for accelerated revenue gains"
    // },
]

export default pricingCards