// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from '../../lib/wundergraph';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    success: boolean;
};

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const { data, error } = await client.mutate({
        operationName: "SetName",
        input: {
            name: "mysupername"
        }
    });

    console.log("data=", data);


    res.status(200).json({ success: true });
}
