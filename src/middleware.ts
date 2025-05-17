import { NextRequest, NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';
import { jwtVerify } from 'jose';

export async function middleware(req: NextRequest) {
  const cookieHeader = req.headers.get('cookie') || ''; // Si es null, usa un string vacío
  const cookies = new Map(
    cookieHeader.split('; ').map(c => {
      const [key, ...value] = c.split('='); // Divide la cookie en clave y valor
      return [key, value.join('=')]; // Reensambla valores con `=` en su contenido
    })
  );
  
  const token = cookies.get('token'); // Obtiene el token de las cookies

  if (!token) {
    return NextResponse.redirect(new URL('/signin', req.url));
  }
  try {
    //   jwt.verify(token, process.env.JWT_SECRET as string);
    await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET as string));
    return NextResponse.next();
  } catch (error) {
    console.log(error)
    return NextResponse.redirect(new URL('/signin', req.url));
  }
}

// Opcional: Configura en qué rutas se aplica el middleware
export const config = {
  matcher: ['/'],
};