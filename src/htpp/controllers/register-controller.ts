import { FastifyRequest, FastifyReply } from "fastify"
import { z } from "zod"
import { RegisterService } from "@/services/register"
import { PrismaUsersRepository } from "@/repositories/prisma-users-repository"


export async function register(
    request: FastifyRequest,
    response: FastifyReply) {

    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6)
    })

    const { name, email, password } = registerBodySchema.parse(request.body)

    try {

        const usersRepository = new PrismaUsersRepository()

        const registerService = new RegisterService(usersRepository)

        await registerService.execute({
            name,
            email,
            password
        })

    } catch (err) {
        return response.status(409).send()
    }
    return response.status(201).send()
}