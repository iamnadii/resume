import '../styles/globals.css';
import Sidebar from './components/Sidebar';
import { personalData } from '../data/page-data';

export const metadata = {
    title: 'Muhammad Nadeem',
    description: 'Generated by Next.js',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="flex flex-col lg:flex-row">
                <Sidebar data={personalData} />
                <main className="grow-full p-8 lg:p-16 basis-2/3 ml-auto w-full bg-grey">
                    {children}
                </main>
            </body>
        </html>
    );
}
