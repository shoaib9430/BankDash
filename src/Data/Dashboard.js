import MyCard from '../Asstes/Icons/RecentTransaction/MyCard';
import Paypal from '../Asstes/Icons/RecentTransaction/Paypal';
import Jemi from '../Asstes/Icons/RecentTransaction/Jemi';
import Livia from '../Asstes/Icons/QuickIcon/Mask Group1.svg';
import Press from '../Asstes/Icons/QuickIcon/Mask Group2.svg';
import Workman from '../Asstes/Icons/QuickIcon/Mask Group3.svg';
import Arrow from '../Asstes/Icons/QuickIcon/Ellipse 20.svg'

const Recent = [
    {
        id:1,
        label:"Deposit from my Card",
        Date:'28 January 2021',
        Amount:'-$850',
        icon:<MyCard />,
        deduction:true,
        logoColor: '#FFF5D9'
    },
    {
        id: 2,
        label: "Deposit Paypal",
        Date: '25 January 2021',
        Amount: '+$2,500',
        icon:<Paypal />,
        deduction: false,
        logoColor: '#E7EDFF',
    },
    {
        id: 3,
        label: "Jemi Wilson",
        Date: '21 January 2021',
        Amount: '+$5,400',
        icon:<Jemi />,
        deduction: false,
        logoColor: '#DCFAF8',
    },
    
    
]
export const Quick = [
    {
        id:1,
        label:"Livia Bator",
        status:"CEO",
        icon:<img src={Livia} alt='card chip' />
    },
    {
        id:2,
        label:"Randy Press",
        status:"Director",
        icon:<img src={Press} alt='card chip' />
    },
    {
        id:3,
        label:"Workman",
        status:"Designer",
        icon:<img src={Workman} alt='card chip' />
    },
    {
        ArrowIcon:<img src={Arrow} alt='Arrow' />
    }
]

export const data = [{
        name: "Sat",
        "Deposit": 450,
        "Withdrawal": 250,
        amt: 2000
    },
    {
        name: "Sun",
        "Deposit": 350,
        "Withdrawal": 150,
        amt: 2210
    },
    
    {
        name: "Mon",
        "Deposit": 345,
        "Withdrawal": 275,
        amt: 2290
    },
    {
        name: "Tue",
        "Deposit": 490,
        "Withdrawal": 390,
        amt: 2000
    },
    {
        name: "Wed",
        "Deposit": 150,
        "Withdrawal": 250,
        amt: 2181
    },
    {
        name: "Thu",
        "Deposit": 394,
        "Withdrawal": 250,
        amt: 2500
    },
    {
        name: "Fri",
        "Deposit": 400,
        "Withdrawal": 350,
        amt: 2100
    },

];
export const CardValue = [
    {
        Balance: "$5,756",
        Holder: "Eddy Cusuma",
        Valid: "12/22",
        CardNo: "3778 **** **** 1234"
    }
]

export default Recent;