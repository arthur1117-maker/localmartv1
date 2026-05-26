import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider }        from "@/context/ThemeContext";
import { WishlistProvider }     from "@/context/WishlistContext";
import { AuthProvider }         from "@/context/AuthContext";
import { CartProvider }         from "@/context/CartContext";
import { NotificationProvider } from "@/context/NotificationContext";
import { ChatProvider }         from "@/context/ChatContext";
import { ToastProvider }        from "@/components/ui";
import { ScrollProgress }       from "@/components/ui/ScrollProgress";

export const metadata: Metadata = {
  title: "LocalMart Connected — Монголын Дижитал Зах",
  description: "Монголын малчид, фермерүүдийн шинэхэн бүтээгдэхүүнийг шууд захиалж, гэртээ хүргүүлээрэй. Баталгаат чанар, шудрага үнэ.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mn" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider>
          <AuthProvider>
            <CartProvider>
              <NotificationProvider>
                <ChatProvider>
                  <WishlistProvider>
                    <ToastProvider>
                      <ScrollProgress />
                      {children}
                    </ToastProvider>
                  </WishlistProvider>
                </ChatProvider>
              </NotificationProvider>
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
