import NextNProgress from 'nextjs-progressbar';
import Navbar from '@/components/Navbar';
import './globals.css';

export default function RootLayout({ children }) {
  const neonColor = "#00e5ff"; 
  
  return (
    <html>
      <head>
        <title>GAME168 Console</title>
      </head>
      <body>
        
        <NextNProgress 
          color={neonColor} 
          startPosition={0.3} 
          stopDelayMs={200} 
          height={3} 
          showOnShallow={true} 
        />
        
        <Navbar />

        {/* เพิ่ม padding-top เพื่อให้เนื้อหาไม่ถูก Navbar บัง */}
        <div style={{ paddingTop: '5rem' }}> 
          {children}
        </div>
        
      </body>
    </html>
  );
}

