const db = require("../config");

const showListCustomers = async () => {
    try {
        const qry = `SELECT * FROM customers ORDER BY customer_id`;
        const client = await db.connect();
        const result = await client.query(qry);
        client.release();
        return result.rows;
    }
    catch (err) {
        throw new Error('Gagal mengambil data customer dari database');
    }
}
const showCustomerById = async (userId) => {
    try {
        const qry = `SELECT * FROM customers WHERE customer_id = ${userId}`;
        const client = await db.connect();
        const result = await client.query(qry);
        client.release();
        return result.rows;
    }
    catch (err) {
        throw new Error('Gagal mengambil data customer dari database');
    }
}

module.exports = {
    showListCustomers,
    showCustomerById
};
