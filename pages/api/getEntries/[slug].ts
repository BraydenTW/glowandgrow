import { getAllEntries } from '@/lib/db-admin';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const userId = req.query.slug;
    console.log(userId);
    const { entries } = await getAllEntries(userId);
    res.status(200).json({ entries });
  } catch (error) {
    res.status(500).json({ error });
  }
};
