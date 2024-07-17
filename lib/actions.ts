'use server';
import { signIn, register as authRegister } from '@/auth';
import { AuthError } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function register(prevState: string | undefined, formData: FormData) {
  try {
    const firstName = formData.get('first-name') as string;
    const lastName = formData.get('last-name') as string;
    const credentials = {
      name: `${firstName} ${lastName}`,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };
    await authRegister(credentials);
    await authenticate(undefined, formData);
    revalidatePath('/');
    redirect('/');
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}