
const path = require('path')
const pathtoCards = path.join(__dirname,'..', 'data', 'cards.json')
const getFilecContent = require('../helpers/getFilecContent')


function getCards(req, res){
    return getFilecContent(pathtoCards)
        .then((cards) => {
            res.status(200).send(cards);
        })
}

module.exports = getCards;