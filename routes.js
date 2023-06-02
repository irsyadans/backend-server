const {
    getListCustomers,
    getCustomerById
} = require("./controllers/customerController")

const routes = [{
        method: '*',
        path: '/',
        handler: (req, res) => {
            return 'Method yang anda gunakan tidak diizinkan!';
        }
    }, {
        method: 'GET',
        path: '/customers',
        handler: getListCustomers
    }, {
        method: 'GET',
        path: '/customer/{id}',
        handler: getCustomerById
    },
    {
        method: 'GET',
        path: '/{any*}',
        handler: (req, res) => {
            return 'Halaman tidak ditemukan.'
        }
    }
];

module.exports = routes;
