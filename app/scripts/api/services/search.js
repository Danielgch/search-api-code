/**
 * Function to fetch the results searching
 * @param {typing} param0 the query sended to the request.
 */

export default async (typing) => {
  const result = await fetch(`${process.env.BACKEND_API_URL}/search?q=${typing}`);
  return result.json();
};
