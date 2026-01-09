import './globals.scss';

export const metadata = {
  title: 'Mercy Yakubu | Frontend Developer',
  description: 'Professional frontend developer portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}