import ContactForm from "../../components/elements/Contact";


export default function page() {
    
    return (
        <>
        <div className="max-w-[1024px] pb-32 mx-auto bg-accent ">
            <div className="h-24 md:h-32"></div>
            <h1 className="sectionTitle my-12 mx-auto w-fit border-b ">Me contacter</h1>

            <div className="text-center mb-12 px-4">
                <p>Vous souhaitez avoir plus d'informations concernant nos services, ou bien prendre un rendez-vous ?</p>
                <p>Contactez-nous via les coordonnées ou le formulaire ci-dessous.</p>
            </div>
        </div>

        <div className="-translate-y-24">
                <div className="flex flex-wrap px-4 gap-4 justify-center items-start">
                    <ContactForm/>

                    <div className="min-w-[400px] max-w-[500px] text-accent flex-1 flex items-center justify-center p-2">
                        <div className="max-w-lg w-full bg-white shadow-2xl rounded-2xl p-8">
                            <div className="text-3xl mb-6 font-bold text-accent ">Le bureau</div>
                            <div className="flex flex-col">
                                <h3 className="text-lg font-bold">Marseille</h3>
                                <p>3, Place Félix Baret - 13286 Marseille Cedex 06
                                </p>
                                <a href="/">
                                    <img src="logoeva.png" className="mt-8 w-16 invert" alt="logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
