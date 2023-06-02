const {
    showListCustomers,
    showCustomerById
} = require("../models/customers");

const getListCustomers = async (req, res) => {
    try {
        const customers = await showListCustomers();
        return res.response(customers);
    }
    catch (err) {
        return res.response(err).code(500);
    }
};
const getCustomerById = async (req, res) => {
    try {
        const customer = await showCustomerById(req.params.id);
        return res.response(customer);
    }
    catch (err) {
        return res.response(err).code(500);
    }
};


module.exports = {
    getListCustomers,
    getCustomerById
};
