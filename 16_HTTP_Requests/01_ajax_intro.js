// **************************************
// AJAX - Asynchronous JavaScript and XML
// **************************************

// AJAX is an approach to getting data and potentially changing the contents
// of a webpage without needing to reload the current page or redirect to
// a new page.

// Although X in Ajax stands for XML, JSON is used more than XML nowadays
// because of its many advantages such as being lighter and a part of
// JavaScript. Both JSON and XML are used for packaging information in the
// Ajax model.

// ********************************
// XML - Extensible Markup Language
// ********************************

// Uses tags like HTML; they do not represent elements but rather keys that
// are associated with the values inside of them.

// name -> todd
// email -> todd@gmail
// age -> 40

<name>
  <first>Todd</first>
  <last>Jones</last>
</name>
<email>todd@gmail</email>
<age>40</age>

// *********************************
// JSON - JavaScript Object Notation
// *********************************

// JSON is the preferred method for sending data packets.

// NOTE: Both keys and values in JSON objects must be wrapped in double quotes! // JSON objects can contain arrays but not JS functions.

{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower"
  "active": true,
  "members": [
    "Molecule Man",
    "Madame Uppercut",
    "Eternal Flame"
  ]
}