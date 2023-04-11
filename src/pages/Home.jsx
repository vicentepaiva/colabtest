/* eslint-disable react/jsx-no-undef */
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


import LogoImg  from "../assets/colabLogo.jpeg";
import { UserList } from '../components/UsuarioList';


export function Home() {
    return(
        <>
        <div className="container mx-auto flex flex-col min-h-screen">
            <Header />

           <div className="my-8">
             <div className="mx-auto w-full px-4 lg:px-0 max-w-screen-xl">
              <img src={LogoImg} alt="imgHome" className="h-20" />
             </div>
          </div> 
  
          <main className="flex-1 items-center justify-center lg:justify-start max-w-screen-xl mx-auto">
          <UserList />
          </main>
  
            <Footer />
        </div>
      </>
    );
}