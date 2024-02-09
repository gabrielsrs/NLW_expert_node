import fastify from "fastify";
import cookie from "@fastify/cookie";
import websocket from "@fastify/websocket";

import { createPoll } from "../http/route/createPolls";
import { getPoll } from "../http/route/getPoll";
import { voteOnPoll } from "../http/route/voteOnPoll";
import { pollResults } from "./ws/pollResults";

const app = fastify()

app.register(cookie, {
    secret: "26E392^L2MD*8Ec@Ve%5J^lx",
    hook: 'onRequest',
})

app.register(websocket)

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)
app.register(pollResults)

app.listen({port: 3000}).then(() => {
    console.log("Server is running!!")
})