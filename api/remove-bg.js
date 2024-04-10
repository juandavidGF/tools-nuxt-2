import formidable, {errors as formidableErrors} from 'formidable';

export default async function handler(req, res) {
  if(req.method !== 'POST') {
    return res.status(404).json({ error: 'bad request, just POST allowed'});
  }

  const form = formidable({});
  let fields;
  let files;

  try {
    [fields, files] = await form.parse(req);
    console.log(fields);
    console.log(files);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error parsing the form data.' });
  }
  
  res.status(200).json({ fields: fields });
}