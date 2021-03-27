
const path = require('path')
//const pathtoCards = path.join(__dirname,'..', 'data', 'cards.json')
//const getFilecContent = require('../helpers/getFilecContent')//


const Card = require("../models/card");



function getCards(req, res){
    Card.find({})
        .then((cards) => {
            res.status(200).send(cards);
        })
        .catch()
}

function deleteCard(req, res){
    Card.findByIdAndRemove((req.params.cardId)
      .then((card) => {
        if (card) {
          res.status(200).send(card);
        }
        res.status(404).send({ message: 'Card not found to delete' })
      })
      .catch((err) => {
        if (err.name === "searchError") {
          res.status(500).send({ message: "Internal Server Error" });
        } else {
          res.status(400).send({message: "This is not the card you are looking for"});
        }
      })
    )
}

function createCard(req,res){
  const { name, link } = req.body;
  Card.create({name, link})
  .then((card) => {
      res.status(200).send(card)})
  .catch((err) => {
    if (err.name === "validateError") {
      res.status(500).send({ message: "Internal Server Error" });
    } else {
      res.status(400).send({message: "Cannot create the card"});
    }
  })
}
const likeCard = (req, res) => {
  Card.findByIdAndUpdate(req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true })
  .then((card) => {
    if (card) {
      res.status(200).send(card);
    }
    res.status(404).send({ message: 'Card not found to like' })
  })
  .catch((err) => {
    if (err.name === "searchError") {
      res.status(500).send({ message: "Internal Server Error" });
    } else {
      res.status(400).send({message: "This is not the card you are looking for"});
    }
  })
};

const dislikeCard = (req, res) => {
  Card.findByIdAndUpdate( req.params.cardId,
    { $pull: { likes: req.user._id } }, // remove _id from the array
    { new: true })
  .then((card) => {
    if (card) {
      res.status(200).send(card);
    }
    res.status(404).send({ message: 'Card not found to dislike' })
  })
  .catch((err) => {
    if (err.name === "searchError") {
      res.status(500).send({ message: "Internal Server Error" });
    } else {
      res.status(400).send({message: "This is not the card you are looking for"});
    }
  })
}

module.exports = {
  getCards,
  deleteCard,
  createCard,
  likeCard,
  dislikeCard
}