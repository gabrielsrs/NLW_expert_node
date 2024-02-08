import fastify from "fastify";
import cookie from "@fastify/cookie";
import { createPoll } from "../http/route/createPolls";
import { getPoll } from "../http/route/getPoll";
import { voteOnPoll } from "../http/route/voteOnPoll";

const app = fastify()

app.register(cookie, {
    secret: "26E392^L2MD*8Ec@Ve%5J^lx",
    hook: 'onRequest',
})

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.listen({port: 3000}).then(() => {
    console.log("Server is running!!")
})