import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * Returns verson information about the app.
 */
async function version(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    if (req.method !== 'GET') {
      return res.status(405).send('Method not allowed');
    }

    res.status(200).json({
      NAME: process.env.REACT_APP_NAME,
      ENV: process.env.NEXT_PUBLIC_ENV,
      VERSION: process.env.REACT_APP_VERSION,
      BUILD_DATE: process.env.NEXT_PUBLIC_BUILD_DATE,
    });
  } catch (error) {
    res.status(500).send('Error while sending version information');
  }
}

export default version;
