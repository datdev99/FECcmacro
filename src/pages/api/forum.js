import forum from './data'

export default async function handler(req, res) {
    try {
      const data = forum;
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching data: ', error);
      res.status(500).json({ error: 'Error fetching data' });
    }
}
    
