import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Nilton'},
    { id: 2, name: 'Tairine'},
    { id: 3, name: 'Duda'}
  ];

  return response.json(users);
}