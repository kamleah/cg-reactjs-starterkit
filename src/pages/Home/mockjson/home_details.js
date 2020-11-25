const HomeConstants = {
    Packs: [
        { key: 'Customer Search', value: 'Existing Customer Search' },
        { key: 'Customer Activities', value: 'View Customer Activities' },
        { key: 'Summary', value: 'Intensive Summary report' },
        { key: 'BILL', value: 'GST SELF BILL' },
        { key: 'Invoic', value: 'Invoic & DO' }
        // { key: 'Internet Quota', value:'basicInternet'}
    ],
    MENU: [ 
        { key: '/screens', value: 'Home' },
        { key: '/existing-customer', value: 'Existing Customer' },
        { key: '/inventorymgmt', value: 'Inventory Mgmt' },
        { key: '/resource', value: 'Resource' },
        { key: '/storemgmt', value: 'Store Mgmt' },
        { key: '/dealerinvtmgmt', value: 'Dealer Invt Mgmt' }
        
    ],
     Method : {
        GET: 'GET',
        POST: 'POST',
        PUT: 'PUT',
        DELETE: 'DELETE'
    },
    ApiEndpoint : {
      
        // Ott
        HOME_DETAILS: 'http://jsonplaceholder.typicode.com/users'
    }
};

export { HomeConstants };