const path = require('path')

const pathtoUsers = path.join(__dirname,'..', 'data', 'users.json')
const getFilecContent = require('../helpers/getFilecContent')

 

function getUsers(req, res){
    return getFilecContent(pathtoUsers)
        .then((users) => {
            res.status(200).send(users);
        })
}

function getOneUser(req, res){
    getFilecContent(pathtoUsers)
        .then((users) => {
            const user = users.find((user) => user._id === req.params._id);
            if (user) {
                return res.status(200).send(user);
            }
            return res.status(404).send({ message: 'User ID not found' });
        })
}

module.exports = {
    getOneUser,
    getUsers
}
