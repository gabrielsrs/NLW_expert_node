import { z } from "zod";
import { prisma } from "../../lib/prisma";
import { FastifyInstance } from "fastify";


export async function createPoll(app: FastifyInstance) {
    app.post("/polls", async (request, reply) => {
        const createPollsBody = z.object({
            title: z.string()
        })
    
        const { title } = createPollsBody.parse(request.body)
    
        const poll = await prisma.poll.create({
            data: {
                title,
            }
        })
    
        return reply.status(201).send({ pollId: poll.id })
    })
}