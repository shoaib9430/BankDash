import OnDashboard from '../../Asstes/Icons/SidebarIcons/Blue/OnDashboard'
import OffDashboard from '../../Asstes/Icons/SidebarIcons/Grey/OffDashboard'
import OffAccount from '../../Asstes/Icons/SidebarIcons/Grey/OffAccount'
import OnAccount from '../../Asstes/Icons/SidebarIcons/Blue/OnAccount'
import OffCreditCard from '../../Asstes/Icons/SidebarIcons/Grey/OffCreditCard'
import OnCreditCard from '../../Asstes/Icons/SidebarIcons/Blue/OnCreditCard'
import OffInvesment from '../../Asstes/Icons/SidebarIcons/Grey/OffInvesment'
import OnInvesment from '../../Asstes/Icons/SidebarIcons/Blue/OnInvestment'
import OffLoan from '../../Asstes/Icons/SidebarIcons/Grey/OffLoan'
import OnLoan from '../../Asstes/Icons/SidebarIcons/Blue/OnLoan'
import OffPrivilage from '../../Asstes/Icons/SidebarIcons/Grey/OffPrivilage'
import OnService from '../../Asstes/Icons/SidebarIcons/Blue/OnService'
import OffService from '../../Asstes/Icons/SidebarIcons/Grey/OffService'
import OffSetting from '../../Asstes/Icons/SidebarIcons/Grey/OffSetting'
import OnSetting from '../../Asstes/Icons/SidebarIcons/Blue/OnSetting'
import OffTransaction from '../../Asstes/Icons/SidebarIcons/Grey/OffTransaction'
import OnTransaction from '../../Asstes/Icons/SidebarIcons/Blue/OnTransaction'


export const DASHBOARD_SIDEBAR_LINKS = [{
        key: 'Dashboard',
        label: "Dashboard",
        path: '/',
        Onicon: <OnDashboard />,
        Officon: <OffDashboard /> 
    },
    {
        key: 'Transaction',
        label: "Transaction",
        path: "/transaction",
        Onicon: <OnTransaction />,
        Officon: <OffTransaction />
    },
    {
        key: 'Account',
        label: "Accounts",
        path: "/account",
        Onicon: <OnAccount />,
        Officon: <OffAccount />
    },
    {
        key: 'Invesment',
        label: "Invesments",
        path: "/invesment",
        Onicon: <OnInvesment />,
        Officon: <OffInvesment />
    },
    {
        key: 'CreditCard',
        label: "Credit Card",
        path: '/creditcard',
        Onicon: <OnCreditCard />,
        Officon: <OffCreditCard />
    },
    {
        key: 'Loan',
        label: "Loans",
        path: '/loan',
        Onicon: <OnLoan />,
        Officon: <OffLoan />
    },
    {
        key: 'Service',
        label: "Services",
        path: '/service',
        Onicon: <OnService />,
        Officon: <OffService />
    },
    {
        key: 'Privilege',
        label: "Privileges",
        path: '/Privilege',
        Officon: <OffPrivilage />,
    },
    {
        key: 'Setting',
        label: "Setting",
        path: '/setting',
        Onicon: <OnSetting />,
        Officon: <OffSetting />
    }

]
