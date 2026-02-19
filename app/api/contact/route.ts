import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmails } from '@/lib/mailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Všechna pole jsou povinná.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Neplatný formát e-mailové adresy.' },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Zpráva musí obsahovat alespoň 10 znaků.' },
        { status: 400 }
      );
    }

    await sendContactEmails({ name, email, message });

    return NextResponse.json(
      { success: true, message: 'E-mail byl úspěšně odeslán.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Došlo k chybě při odesílání e-mailu. Zkuste to prosím později.' },
      { status: 500 }
    );
  }
}
