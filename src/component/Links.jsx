import dashboard from '../assets/tms/dashboard.svg'
import dashboardA from '../assets/tms/dashboardA.svg'
import location from '../assets/tms/location.svg'
import locationA from '../assets/tms/locationA.svg'
import Agent from '../assets/tms/Agent.svg'
import AgentA from '../assets/tms/AgentA.svg'
import customer from '../assets/tms/customer.svg'
import customerA from '../assets/tms/customerA.svg'
import profile from '../assets/tms/profile.svg'
import profileA from '../assets/tms/profileA.svg'
import payment from '../assets/tms/payment.svg'
import paymentA from '../assets/tms/paymentA.svg'
import remitance from '../assets/tms/remitance.svg'
import remitanceA from '../assets/tms/remitanceA.svg'
import acquirers from '../assets/tms/aquirers.svg'
import acquirersA from '../assets/tms/aquirersA.svg'
import terminal from '../assets/tms/terminal.svg'
import terminalA from '../assets/tms/terminalA.svg'
import savings from '../assets/tms/savings.svg'
import savingsA from '../assets/tms/savingsA.svg'
import hsm from '../assets/tms/hsm.svg'
import hsmA from '../assets/tms/hsmA.svg'
import logout from '../assets/logout.png'
// import reporting from '../assets/reporting.svg'

export const links = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        img: dashboard,
        active:dashboardA
    },
    {
        name: 'Customers',
        url: '/customers',
        img: customer,   
        active:customerA
    },
    {
        name: 'Savings',
        url: '/savings',
        img: savings,
        active:savingsA
    },
    {
        name: 'Remitance',
        url: '/remitance',
        img: remitance,
        active:remitanceA
        
    },
    {
        name: 'Profile',
        url: '/profile',
        img: profile,
        active:profileA
    },
    // {
    //     name: 'Payouts',
    //     url: '/payouts',
    //     img: payment,
    //     active:paymentA
    // },
    {
        name: 'Logout',
        url: '/',
        img: logout,
        // active:paymentA
    },
];

export const linkAdmin = [
    {
        name: 'Dashboard',
        url: '/admin/dashboard',
        img: dashboard,
        active:dashboardA
    },
    {
        name: 'Location',
        url: '/admin/location',
        img: location,
        active:locationA
    },
    {
        name: 'Agents',
        url: '/admin/agents',
        img: Agent,
        active:AgentA
    },
    {
        name: 'Customers',
        url: '/admin/customers',
        img: customer,   
        active:customerA
    },
    {
        name: 'Savings',
        url: '/admin/savings',
        img: savings,
        active:savingsA
    },
    {
        name: 'Remitance',
        url: '/admin/remitance',
        img: remitance,
        active:remitanceA
        
    },
    {
        name: 'Profile',
        url: '/admin/profile',
        img: profile,
        active:profileA
    },
    // {
    //     name: 'Payouts',
    //     url: '/admin/payouts',
    //     img: payment,
    //     active:paymentA
    // },
    {
        name: 'Logout',
        url: '/',
        img: logout,
        // img: payment,
        // active:paymentA
    },
];