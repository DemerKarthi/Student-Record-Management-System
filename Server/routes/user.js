const express = require('express');
const router = express.Router();
const db = require('../config/db');


router.post('/add-student', (req, res) => {
  const { Fname, Lname, Phone, Email } = req.body;

  if (!Fname || !Lname || !Phone || !Email) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const sql = 'INSERT INTO student_details (Fname, Lname, Phone, Email) VALUES (?, ?, ?, ?)';
  
  db.query(sql, [Fname, Lname, Phone, Email], (err, result) => {
    if (err) {
      return res.status(500).send({ error: 'Database error', details: err , status : false });
    }

    res.status(201).json({
      message: 'Student details added successfully',
      status: true,
    });
  });
});


// Route to fetch all students
router.get('/students', (req, res) => {
    const sql = 'SELECT * FROM student_details';  // SQL query to fetch all students
  
    db.query(sql, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Database error', details: err , statuts : false });
      }
  
    //   // If no data is found, return a message
    //   if (result.length === 0) {
    //     return res.status(200).json({ message: 'No students found' , statuts : false });
    //   }
  
      // Return the result as JSON
      res.status(200).json({statuts : true , data : result});
    });
  });


router.put('/update-student/:id', (req, res) => {
    const { id } = req.params;
    const { Fname, Lname, Phone, Email } = req.body;
  
    if (!Fname && !Lname && !Phone && !Email) {
      return res.status(400).json({ error: 'At least one field must be provided for updating.' , status : false });
    }
  
    // Build the SQL query dynamically based on the provided fields
    let updates = [];
    if (Fname) updates.push(`Fname = '${Fname}'`);
    if (Lname) updates.push(`Lname = '${Lname}'`);
    if (Phone) updates.push(`Phone = '${Phone}'`);
    if (Email) updates.push(`Email = '${Email}'`);
  
    const sql = `UPDATE student_details SET ${updates.join(', ')} WHERE id = ?`;
  
    // Execute the query to update the student
    db.query(sql, [id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Database error', details: err , status : false });
      }
  
      // Check if any rows were updated
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Student not found or no changes made.' , status : false });
      }
  
      // Respond with success message
      res.status(200).json({ message: 'Student details updated successfully.' , status : true });
    });
  });
  
// Route to delete a student by ID
router.delete('/delete-student/:id', (req, res) => {
    const { id } = req.params; // Get the student ID from the URL
  
    // SQL query to delete the student by ID
    const sql = 'DELETE FROM student_details WHERE id = ?';
  
    db.query(sql, [id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Database error', details: err , status : false });
      }
  
      // Check if any rows were affected (i.e., student was deleted)
      if (result.affectedRows === 0) {
        return res.status(200).json({ message: 'Student not found' , status : false });
      }
  
      // Return success response
      res.status(200).json({ message: 'Student deleted successfully' , status : true });
    });
  });

module.exports = router;