const axios = require('axios');
const FormData = require('form-data');
import formidable from 'formidable';

export default function handler(req, res) {
  if(req.method !== 'POST') {
    return res.status(404).json({ error: 'bad request, just POST allowed'});
  }

  const form = new formidable.IncomingForm();

  form.parse(rqu, (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error parsing the form data.' });
    }
    console.log(fields);
    console.log(files);
  })

  res.status(200).json({ name: 'John Doe' });
}