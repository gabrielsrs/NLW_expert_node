import { z } from "zod";
import { FastifyInstance } from "fastify";
import { voting } from "../../utils/votingPupSub";

export async function pollResults(app: FastifyInstance) {
    app.get("/polls/:pollId/results", { websocket: true }, (connection, request) => {
        const getPollsParams = z.object({
            pollId: z.string().uuid(),
        })

        const { pollId } = getPollsParams.parse(request.params)
        
        voting.subscribe(pollId, (message) => {
            connection.socket.send(JSON.stringify(message))
        })
    })
}
