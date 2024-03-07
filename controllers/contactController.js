const asyncHandler = require("express-async-handler");
const Contact=require("../models/contact.model")
// Write a description for getting all contacts
// @route GET /api/contacts
// $access private 
const getContacts = asyncHandler(async(req, res) => {

  const contacts= await Contact.find({user_id:req.user.id});
  res.status(200).json(contacts);
});

// Write a description for creating a new contact
// @route POST /api/contacts
// $access  private 
const createContact = asyncHandler(async(req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All feilds are mandatory !");
  }
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User cannot  other user's contact");
  }
const contact = await Contact.create({
  name,
  email,
  phone,
  user_id:req.user.id
});

  res.status(201).json(contact);
});

// Write a description for getting a specific contact by ID
// @route GET /api/contacts/:id
// $access public
const getContact =asyncHandler (async (req, res) => {
  const contact=await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("Contact not found ")
  }
  res.status(200).json(contact);
});

// Write a description for updating a contact by ID
// @route PUT /api/contacts/:id
// $access private 

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found ");
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User cannot update other user's contact");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User cannot delete other user's contact");
  }

  await Contact.deleteOne({_id:req.params.id});
  res.status(200).json(contact);
});


module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
