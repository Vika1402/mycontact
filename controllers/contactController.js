const asyncHandler = require("express-async-handler");
const Contact=require("../models/contact.model")
// Write a description for getting all contacts
// @route GET /api/contacts
// $access public
const getContacts = asyncHandler(async(req, res) => {

  const contacts= await Contact.find();
  res.status(200).json(contacts);
});

// Write a description for creating a new contact
// @route POST /api/contacts
// $access public
const createContact = asyncHandler(async(req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All feilds are mandatory !");
  }
const contact = await Contact.create({
  name,
  email,
  phone
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
// $access public
const updateContact = asyncHandler( async(req, res) => {

  const contact=await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("Contact not found ")
  }
const updateContact=await Contact.findByIdAndUpdate(
  req.params.id,
  req.body,
  {new:true}
);
  res.status(200).json(updateContact);
});

// Write a description for deleting a contact by ID
// @route DELETE /api/contacts/:id
// $access public
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  await Contact.findByIdAndDelete(req.params.id); // Correct method to delete by ID
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
