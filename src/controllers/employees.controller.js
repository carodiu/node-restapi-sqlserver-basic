import { getConnection, sql, queries } from '../database';

const employeesController = {};

employeesController.get = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .query(queries.getAllEmployees);

        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

employeesController.new = async (req, res) => {
    const { documentId, fullName, address, email, phone, hireDate, birthDate, isFreelance, costPerHour} = req.body;

    if (documentId == null || fullName == null || address == null || hireDate==null)
        return res.status(400).json({ msg: 'Bad request. Please, fill all fields' })

    try {
        const pool = await getConnection();
        
        const result = await pool.request()
            .input("documentId", sql.VarChar, documentId)
            .input("fullName", sql.VarChar, fullName)
            .input("address", sql.VarChar, address)
            .input("email", sql.VarChar, email)
            .input("phone", sql.VarChar, phone)
            .input("hireDate", sql.DateTime, hireDate)
            .input("birthDate", sql.DateTime, birthDate)
            .input("isFreelance", sql.Bit, isFreelance)
            .input("costPerHour", sql.Decimal, costPerHour)
            .query(queries.insertEmployee);

        res.json({ documentId, fullName, address, email, phone, hireDate, birthDate, isFreelance, costPerHour });
    } catch (error) {
        console.log(error);
        res.status(500);
        res.send(error.message);
    }

}

employeesController.getById = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool.request()
        .input("id", id)
        .query(queries.getById);

    res.json(result.recordset);

};

employeesController.count = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .query(queries.getTotalEmployees);

        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

employeesController.update = async (req, res) => {

    const { documentId, fullName, address, email, phone, hireDate, birthDate, isFreelance, costPerHour} = req.body;

    const { id } = req.params;

    if (documentId == null || fullName == null || address == null || hireDate==null) {
        return res.status(400).json({ msg: "Bad request. Please, Fill all fields." })
    }

    const pool = await getConnection();
    const result = await pool.request()
        .input("documentId", sql.VarChar, documentId)
        .input("fullName", sql.VarChar, fullName)
        .input("address", sql.VarChar, address)
        .input("email", sql.VarChar, email)
        .input("phone", sql.VarChar, phone)
        .input("hireDate", sql.DateTime, hireDate)
        .input("birthDate", sql.DateTime, birthDate)
        .input("isFreelance", sql.Bit, isFreelance)
        .input("costPerHour", sql.Decimal, costPerHour)
        .input("id", sql.Int, id)
        .query(queries.update);

    res.json({ documentId, fullName, phone, hireDate, birthDate, isFreelance, costPerHour });

}

employeesController.deleteById = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool.request()
        .input("id", id)
        .query(queries.delete);

    res.json(result);
}


export { employeesController as employees };



