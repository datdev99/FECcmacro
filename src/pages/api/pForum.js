
import forum from './data'

export default async function handler(req, res) {
    try {
        const postId = parseInt(req.query.id);
        const post = forum.data.find(item => item.id = postId)
        if(post) {
            res.status(200).json(post)
        }
        else {
            res.status(404).json({ error: 'Bài viết không được tìm thấy' });
        }
    } catch (error) {
      console.error('Error fetching data: ', error);
      res.status(500).json({ error: 'Error fetching data' });
    }
}
    