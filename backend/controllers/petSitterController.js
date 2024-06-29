const PetSitter = require('../models/PetSitter');

exports.getPetSitters = async (req, res) => {
  try {
    const petSitters = await PetSitter.find({ available: true });
    res.json(petSitters);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.createPetSitter = async (req, res) => {
  const { name, age, experience } = req.body;
  try {
    let petSitter = new PetSitter({ name, age, experience });
    await petSitter.save();
    res.json(petSitter);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.bookPetSitter = async (req, res) => {
  const { id } = req.body;
  try {
    let petSitter = await PetSitter.findById(id);
    if (!petSitter) {
      return res.status(404).json({ msg: 'Pet Sitter not found' });
    }
    petSitter.available = false;
    await petSitter.save();
    res.json(petSitter);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
