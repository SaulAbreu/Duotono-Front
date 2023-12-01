import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ToasterProvider } from '@/lib/toaster-provider'
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from '@/components/storyblok/StoryblokProvider';
import Whatsapp from '@/components/contacto/whatsapp';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
 
storyblokInit({
  accessToken: "tIgfDUKHJfUvmChdLERJXAtt",
  use: [apiPlugin],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className={inter.className}>
        <ToasterProvider/>
        <Whatsapp/>
            {children}
        </body>
      </html>
    </StoryblokProvider>
  )
}
