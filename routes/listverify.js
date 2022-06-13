const router = require('express').Router();
const list = require('../model/List');
const List = require('../model/List')
const { tokenVerified } = require('./verifyToken');

// Register Router
router.post('/lists', async (req, res) => {
  // Validasi Data
  //const { error } = listValidation(req.body);
  //if (error) return res.status(400).send(error.details[0].message);

  // Check apakah user ada di Database
  //const listExist = await List.findOne({ name: req.body.name });
  //if (listExist) return res.status(400).send('list already exist!');
 // const listExist = await list.findOne({ email: req.body.email });
  //if (listExist) return res.status(400).send('list already exist!');

  const list = new List({
    name: req.body.name,
    description: req.body.description,
    photo: req.body.photo,
  });
  try {
    res.json(list)
     const savedList = await list.save();
    // res.status(200).send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/lists', tokenVerified, (req, res) => {
  res.send(list)
})


module.exports = router;