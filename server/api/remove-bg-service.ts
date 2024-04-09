
export default defineEventHandler(async e => {
  if(e.method !== 'POST') {
    throw createError({ statusCode: 405, statusMessage: 'Method Not Allowed' });
  }

  const { image } = await readBody(e)
  console.log('body: ', image);

  return image;
});
