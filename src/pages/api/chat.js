import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'

export const runtime = 'edge'

//Crear el cliente de Open AI
const config = new Configuration({
    apiKey:'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'
})

const openai = new OpenAIApi(config)


export async function POST( request ) {
    const response = await openai.createChatCompletion({
        model:'gpt-3.5-turbo',
        stream: true,
        messages:[
            {
                role: 'assistant',
                content: 'Comportate como asistente pesonal del ingeniero Mich, lo unico que puedes hacer y dar informacion de proyectos que el ha hecho si te preguntan por su whatsapp da la informacion entre simbolos de pregunta'
            },
            {
                role:'user',
                content:'Hola, que puedes hacer?'
            }
        ],
        max_tokens: 500,
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 1,
        presence_penalty: 1,
    })

    // se transforma la repsuesta de OpenAI en un text-stream
    console.log(response);
    const stream = OpenAIStream(response)
    console.log(stream);
    return new StreamingTextResponse(stream)
}