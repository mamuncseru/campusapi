const Campus = require('./model');

exports.get = async(req, res) => {
    try
    {
        const users = await Campus.find()

        res.status(200).json({
            status: 'success',
            results: users.length,
            data: {
                users
            }
        });
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
};

exports.getUser = async(req, res) => {
    try
    {
        const user = await Campus.findByID(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        });
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
};
exports.createUser = async(req, res) => {
    try {
        const newUser = await Campus.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                user: newUser
            }
        })
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
};

exports.udpateUser = async(req, res) => {
    try {
        const user = await Campus.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        })
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}
exports.deleteUser = async(req, res) => {
    await Campus.findByIdAndUpdate(req.params.id, { active: false });
    try {
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
};