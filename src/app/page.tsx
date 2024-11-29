import Section1 from "@/components/elements/Section1"

export default function Home() {
    return (
        <div className="">
            <header className="w-full relative">
                <img src="https://madeinmarseille.net/actualites-marseille/michael-getreu-4QIMp5cVrpk-unsplash-e1682600286347.jpg" alt="image principale" className="w-full  h-[40vh] border object-cover filter brightness-75 " />
                <p className="absolute text-center bg-primary text-white uppercase font-bold border-secondary border-2 bottom-1/2 left-1/2 -translate-x-1/2 py-2 px-4">"Votre partenaire juridique pour sécuriser et valoriser vos projets d'affaires."</p>
                <button className="absolute bg-primary text-white uppercase font-bold border-secondary border-2 bottom-1/4 left-1/2 -translate-x-1/2 py-2 px-4">Me Contacter</button>
            </header>
            <main>
                <Section1>
                    <h1 className="sectionTitle">Avocat Eva Nizard Dahan au burreau de Marseille</h1>
                    <p>Le Cabinet d’avocat de Maître KHALIL vous conseille et vous assiste dans toutes vos procédures relatives au droit de la famille, droit des victimes, violences conjugales, droit pénal, droit du préjudice corporel et droit de l’immobilier. L’avocat est également à même de vous assister dans le cadre d’une postulation ou d’une représentation devant la Cour d’appel. Maître Aurélia KHALIL peut ainsi intervenir devant l’ensemble des juridictions civiles, pénales et administratives sur le territoire français.
                    </p> <br/>
                    <p>
                        Situé au 18 cours Pierre Puget à Marseille, dans le quartier Estrangin-Préfecture, le Cabinet d’avocat est joignable par téléphone du lundi au vendredi, de 9h à 19h. N’hésitez pas à appeler pour un rendez-vous. Il est accessible par les transports en commun et, notamment, le métro (ligne M1 — arrêt Estrangin Préfecture), le bus (lignes 41, 518, 521 et 540 – arrêt Paradis Armeny) et le tram (Ligne 3 Arrêt place de Rome, en se dirigeant vers le palais de Justice).
                    </p> <br/>
                    <p>
                        Plusieurs parkings se situent également à proximité du cabinet (Parking Puget Rue du Docteur Combalat 13006, Parking Monthyon Rue Breteuil 13006, ou Parking à ciel ouvert cours Pierre Puget 13006).
                    </p> <br/>
                    <button className="py-2 px-4 w-fit block border mx-auto my-8">Voir plus</button>
                </Section1>

                <hr className="w-5/6 mx-auto" />

                <Section1>
                    <h2 className="sectionTitle">Les domaines de compétence du cabinet</h2>

                    Grâce à son expérience en droit privé, Maître Aurélia KHALIL vous accompagne dans ses différents domaines d’intervention :

                    Droit de la famille, divorce et divorce amiable
                    Droit des personnes, changement de nom et de prénom
                    Mesures de protection (tutelles, curatelles)
                    Assistance éducative et procédures devant le juge des enfants
                    Droit des successions et droit des régimes matrimoniaux
                    Droit de la filiation (reconnaissance ou contestation de paternité, expertise génétique)
                    Droit pénal des victimes de crimes (viol, meurtre, assassinat, terrorisme)
                    Droit pénal des victimes de délits (violences conjugales, vol, agression, tout types de violences)
                    Droit criminel, Cour d’Assises
                    Droits des parents, et des enfants dans les procédures les concernant
                    Accidents de la circulation ou accidents de la vie
                    Bail d’habitation
                    Procédure d’expulsion et droits locatifs
                    Litiges entre bailleurs (ou propriétaires) et locataires
                    Avocat pour bailleurs et bailleurs sociaux

                </Section1>
            </main>
        </div>
        
    )
}