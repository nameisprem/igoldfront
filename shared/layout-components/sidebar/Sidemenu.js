export const MENUITEMS = [
    {
        menutitle: "MAIN",
        Items: [
            { path: `/components/dashboard/dashboard`, icon: 'fe fe-home', type: 'link', active: false, selected: false, title: 'Dashboard' },
        ]
    },
    {
        menutitle: "Menu",

        Items: [

            {
                title: 'Package', icon: "fe fe-slack", type: 'sub', Name:"",Names:"", active: false, selected: false, children: [

                    { path: `/components/apps/ActivatePackage`, type: 'link', active: false, selected: false, title: 'Activate Package' },
                    { path: `/components/apps/MyPackage`, type: 'link', active: false, selected: false, title: 'My Package' },

                ]
            },
        ]
    },
    {
        menutitle: "INCOMES",
        Items: [
            {
                title: 'INCOMES', icon: "fe fe-users", type: 'sub',Name:"",Names:"", active: false, selected: false, children: [
                    { path: `/components/income/DailyIncome`, type: 'link', active: false, selected: false, title: 'Daily Income' },
                    { path: `/components/income/LevelIncome`, type: 'link', active: false, selected: false, title: 'Level Income' },
                    { path: `/components/income/RoyaltyIncome`, type: 'link', active: false, selected: false, title: 'Royalty Income' },
                    { path: `/components/income/RoyaltyStatus`, type: 'link', active: false, selected: false, title: 'Royalty Status' },
                   
                ]
            },
        ]
    },
    {
        menutitle: "LOGOUT",
        Items: [
            { path: `/Logout/LogoutUser`, icon: 'fe fe-lock', type: 'link', active: false, selected: false, title: 'Logout' },
        ]
    }
    // {
    //     menutitle: "Other",
    //     Items: [
    //         {
    //             title: 'Logout', icon: "fe fe-users", type: 'sub',Name:"",Names:"", active: false, selected: false, children: [
    //                 { path: `/components/income/DailyIncome`, type: 'link', active: false, selected: false, title: 'Logout' }
                   
    //             ]
    //         },
    //     ]
    // },

]