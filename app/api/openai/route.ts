import {NextResponse} from 'next/server';
import OpenAI from 'openai';
type ResponseData = {
  message: string
}

export async function GET(req: Request) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });
    console.log('generowanie rozpoczete')
    const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'W pierwszej wiadomości wygeneruj mi krótkie kazanie (homilię)' }],
    model: 'gpt-4o',
  })

    return NextResponse.json({ message: chatCompletion.choices[0].message.content as string});
}
