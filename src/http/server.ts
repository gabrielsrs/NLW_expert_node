import fastify from "fastify";
import { createPoll } from "../http/route/createPolls"
import { getPoll } from "../http/route/getPoll"

const app = fastify()

app.register(createPoll)
app.register(getPoll)

app.listen({port: 3000}).then(() => {
    console.log("Server is running!!")
})