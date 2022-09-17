import { MongoClient } from 'mongodb';

// / api/new-meetup
// POST /api/new-meetup

function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const { title, image, address, descripition } = data;

        const client = await MongoClient.connect('');
        const db = client.db();

        const meetupsCollection = dbb.collction('meetups');

        const result = await meetupsCollection.insertOne(data);
        console.log(result);

        client.close(); 

        res.status(201).json({ message: 'Meetup inserted' });
    }
}

export default handler;