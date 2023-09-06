const Footer = () => {
    return ( 
        <footer className="bg-white border-t">
            <div className="flex mx-auto py-6">
                <div className="grid content-center text-left  pl-10 flex-grow">
                    <p className="text-xs text-black">&copy; 2023 New Ba&Tu Ltd Şti. Bütün hakları saklıdır.</p>
                </div>
                <div className="text-right pr-10">
                    <div className="grid content-center my-auto">                
                        <p className="text-xs text-black">Telefon: +90 542 710 8489</p>
                        <p className="text-xs text-black">Adres: New Batu Hırdavat Yapı Malzeme, Doğantepe, Hacı Bayram Veli Cd. No:249/A, 06140 Altındağ/Ankara</p>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;