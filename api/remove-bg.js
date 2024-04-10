export default function handler(req, res) {
  const { body, method } = req;

  if(method !== 'POST') {
    return res.status(404).json({ error: 'bad request, just POST allowed'});
  }
  res.status(200).json({ name: 'John Doe' })
}