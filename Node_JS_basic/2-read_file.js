const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data
      .split('\n')
      .filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const students = lines.slice(1);
    const fields = {};

    for (const student of students) {
      const [firstname, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }

    const total = Object.values(fields).reduce((sum, list) => sum + list.length, 0);
    console.log(`Number of students: ${total}`);

    for (const field in fields) {
      const list = fields[field].join(', ');
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
