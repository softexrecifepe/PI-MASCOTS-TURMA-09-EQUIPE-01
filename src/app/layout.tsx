import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import { AppointmentQueueProvider } from "./contexts/appointmentQueueContext";
import { MedicalAppointmentProvider } from "./contexts/medicalAppointment";

const robotoThin = localFont({
  src: "./assets/fonts/Roboto-Thin.ttf",
  variable: "--font-roboto-thin",
  weight: "100",
});
const robotoLigth = localFont({
  src: "./assets/fonts/Roboto-Light.ttf",
  variable: "--font-roboto-light",
  weight: "300",
});
const robotoRegular = localFont({
  src: "./assets/fonts/Roboto-Regular.ttf",
  variable: "--font-roboto-regular",
  weight: "400",
});
const robotoMedium = localFont({
  src: "./assets/fonts/Roboto-Medium.ttf",
  variable: "--font-roboto-medium",
  weight: "500",
});
const robotoBold = localFont({
  src: "./assets/fonts/Roboto-Bold.ttf",
  variable: "--font-roboto-bold",
  weight: "700",
});
const quickSandLight = localFont({
  src: "./assets/fonts/Quicksand-Light.ttf",
  variable: "--font-quicksand-light",
  weight: "300",
});
const quickSandRegular = localFont({
  src: "./assets/fonts/Quicksand-Regular.ttf",
  variable: "--font-quicksand-regular",
  weight: "400",
});
const quickSandMedium = localFont({
  src: "./assets/fonts/Quicksand-Medium.ttf",
  variable: "--font-quicksand-medium",
  weight: "500",
});
const quickSandSemiBold = localFont({
  src: "./assets/fonts/Quicksand-SemiBold.ttf",
  variable: "--font-quicksand-semibold",
  weight: "600",
});
const quickSandBold = localFont({
  src: "./assets/fonts/Quicksand-Bold.ttf",
  variable: "--font-quicksand-bold",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Mascot's",
  description: "Sistema para Gerenciamento de Clínicas veterinárias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${robotoThin.variable} ${robotoLigth.variable} ${robotoRegular.variable} 
        ${robotoMedium.variable} ${robotoBold.variable} ${quickSandLight.variable}
        ${quickSandRegular.variable} ${quickSandMedium.variable} ${quickSandSemiBold.variable} ${quickSandBold.variable} antialiased`}
      >
        <MedicalAppointmentProvider>
          <AppointmentQueueProvider>{children}</AppointmentQueueProvider>
        </MedicalAppointmentProvider>
        <Script
          src="https://kit.fontawesome.com/94c1cd0640.js"
          crossOrigin="anonymous"
          strategy="afterInteractive" // Carrega o script após a interação
        />
      </body>
    </html>
  );
}
