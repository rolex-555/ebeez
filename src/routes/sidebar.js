/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/app/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/app/manage-companies',
    icon: 'FormsIcon',
    name: 'Manage Companies',
  },
  {
    path: '/app/contacts',
    icon: 'CardsIcon',
    name: 'Contacts',
  },
  {
    path: '/app/charts',
    icon: 'ChartsIcon',
    name: 'Manage Ebeetech Users',
  },
  {
    path: '/app/buttons',
    icon: 'ButtonsIcon',
    name: 'Products',
  },
  {
    path: '/app/tables',
    icon: 'TablesIcon',
    name: 'All Invoices',
  },
  {
    path: '/app/modals',
    icon: 'ModalsIcon',
    name: 'All Tickets ',
  },
  {
    path: '/app/modals',
    icon: 'ModalsIcon',
    name: 'History',
  },
 
  // {
  //   icon: 'PagesIcon',
  //   name: 'Pages',
  //   routes: [
  //     // submenu
  //     {
  //       path: '/login',
  //       name: 'Login',
  //     },
  //     {
  //       path: '/create-account',
  //       name: 'Create account',
  //     },
  //     {
  //       path: '/forgot-password',
  //       name: 'Forgot password',
  //     },
  //     {
  //       path: '/app/404',
  //       name: '404',
  //     },
  //     {
  //       path: '/app/blank',
  //       name: 'Blank',
  //     },
  //   ],
  // },
]

export default routes
