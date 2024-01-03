const User = require("../model/userModel");

const getUsers = async (req, res) => {
    try {
        //  query for fetch all users from db
        const result = await User.find({});

        //  send response to client
        if (result) {
            res.status(200).json({
                status: 200,
                message: "User fetch successfully.",
                data: result,
            });
        } else {
            res.status(404).json({
                status: 404,
                message: "Users not found.",
                data: [],
            });
        }
    } catch (error) {
        // handle error if occourd
        res.status(500).json({ status: 500, message: error.message });
    }
};

const createUser = async (req, res, next) => {
    debugger;
    try {
        const { name, email, phone, age, dob, password } = req.body;

        // check validation (validation status code : 422)
        if (!name || !email || !phone || !age || !dob || !password) {
            res.status(422).json({ status: 422, message: "All fields is required!" });
        }

        // create object of user model type
        const user = new User({
            name,
            email,
            phone,
            age,
            dob,
            password,
        });

        //  insert user record in db
        const result = await user.save();

        //  send response to client
        if (result) {
            res.status(201).json({
                status: 201,
                message: "User created successfully.",
                data: result,
            });
        } else {
            res.status(400).json({
                status: 400,
                message: "User created successfully.",
                data: result,
            });
        }
    } catch (error) {
        // handle error if occourd
        res.status(500).json({ status: 500, message: error.message });
    }
};

const getUser = async (req, res) => {
    try {
        //  get id from query params from url
        const id = req.params.id;

        // query for get single user based on id
        const result = await User.findById({ _id: id });

        //  send response to client
        if (result) {
            res.status(200).json({
                status: 200,
                message: "User fetch successfully.",
                data: result,
            });
        } else {
            res.status(404).json({
                status: 404,
                message: "User not found.",
                data: [],
            });
        }
    } catch (error) {
        // handle error if occourd
        res.status(500).json({ status: 500, message: error.message });
    }
};

const deleteUser = async (req, res, next) => {
    try {
        //  get id from query params from url
        const id = req.params.id;

        //  delete user query for mongodb
        const result = await User.findByIdAndDelete({ _id: id });

        //  send response to client
        if (result) {
            res.status(200).json({
                status: 200,
                message: "User delete successfully.",
                data: result,
            });
        } else {
            res.status(404).json({
                status: 404,
                message: "User not found.",
                data: [],
            });
        }
    } catch (error) {
        // handle error if occourd
        res.status(500).json({ status: 500, message: error.message });
    }
};

const updateUser = async (req, res) => {
    debugger;
    try {
        const id = req.params.id;
        const { name, email, phone, age, dob, password } = req.body;

        // check validation (validation status code : 422)
        if (!name || !email || !phone || !age || !dob || !password) {
            res.status(422).json({ status: 422, message: "All fields is required!" });
        }

        //  ready payload for update record with all fields
        const updatePayload = {
            name,
            email,
            phone,
            age,
            dob,
            password,
        };

        //  update query
        const result = await User.findByIdAndUpdate({ _id: id }, updatePayload, {
            new: true,
        });

        //  send response to client
        if (result) {
            res.status(200).json({
                status: 200,
                message: "User updated successfully.",
                data: result,
            });
        } else {
            res.status(404).json({
                status: 404,
                message: "User not found.",
                data: [],
            });
        }
    } catch (error) {
        // handle error if occourd
        res.status(500).json({ status: 500, message: error.message });
    }
};


module.exports = { getUsers, getUser, deleteUser, updateUser,createUser };