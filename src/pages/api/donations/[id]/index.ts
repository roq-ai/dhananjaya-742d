import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { donationValidationSchema } from 'validationSchema/donations';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.donation
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getDonationById();
    case 'PUT':
      return updateDonationById();
    case 'DELETE':
      return deleteDonationById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getDonationById() {
    const data = await prisma.donation.findFirst(convertQueryToPrismaUtil(req.query, 'donation'));
    return res.status(200).json(data);
  }

  async function updateDonationById() {
    await donationValidationSchema.validate(req.body);
    const data = await prisma.donation.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteDonationById() {
    const data = await prisma.donation.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
