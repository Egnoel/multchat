import Image from "next/image";
import capa from "../assets/image1.png";
import "../globals.css";
import './style.css'

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
        <div className='flex flex-row w-full h-screen relative'>
          <div className='bg-white z-10 w-[47%] absolute h-[85%] left-0 top-[5%] flex  justify-center'>
            {children}
          </div>
        <div className='w-[45%] bg-[#F1F1F1] h-full flex flex-col justify-end items-center py-4 '>
            <footer>
                <p >
                    Direitos autorais © {" "}
                    <span>Equipechat</span>{" "}
                    2024
                </p>
                <p>Este site é protegido pelo reCAPTCHA Enterprise e pela Política de Privacidade e Termos de Serviço do Google</p>
            </footer>
        </div>
        <div className='w-[55%] bg-gradient-to-r from-[#0C5DB0] to-[#05274A] h-full flex items-center flex-col'>
            <div className="flex flex-col py-4 text-2xl text-white">
                <span>Entre em contacto pelo nosso Zap</span>
                <span>e <span className="text-[#186CC3]">solicite um orçamento.</span></span>
            </div>
            <Image src={capa} alt="capa" width={600} height={600} className=" ml-12" />
        </div>
    </div>
        </body>
      </html>
    );
  }