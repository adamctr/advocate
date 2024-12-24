import dynamic from "next/dynamic";
import Section1 from "../components/elements/Section1";

// Chargement dynamique du composant d'animation pour le rendre côté client uniquement
const HeroAnimation = dynamic(
  () => import("../components/animations/HeroAnimation"),
  { ssr: true }
);

export default function Home() {
  return (
    <div className="">
      {/* Le composant d'animation est chargé côté client uniquement */}
      <HeroAnimation />

      <header className="w-full relative">
        <img
          src="bgheroimage.webp"
          id="heroImage"
          alt="image principale"
          className="w-full h-[100vh] md:h-[80vh] border object-cover filter brightness-50"
        />
        <p
          id="heroDesc"
          className="absolute text-center w-11/12 md:w-fit text-white uppercase font-bold border-2 top-1/4 md:top-1/3 left-1/2 -translate-x-1/2 py-2 px-4"
        >
          "Votre partenaire juridique pour sécuriser et valoriser vos projets
          d'affaires."
        </p>
        <button
          id="contactButton"
          className="absolute text-white uppercase font-bold bg-black rounded border-2 bottom-1/3 left-1/2 -translate-x-1/2 py-2 px-4"
        >
          Me Contacter
        </button>
      </header>

      <main className="z-20">
        <Section1>
          <h1 className="sectionTitle">
            Avocat Eva Nizard Dahan au burreau de Marseille
          </h1>
          <div className="flex gap-4">
            <p>
              Le Cabinet d’avocat de Maître KHALIL vous conseille et vous
              assiste dans toutes vos procédures relatives au droit de la
              famille, droit des victimes, violences conjugales, droit pénal,
              droit du préjudice corporel et droit de l’immobilier. L’avocat est
              également à même de vous assister dans le cadre d’une postulation
              ou d’une représentation devant la Cour d’appel. Maître Aurélia
              KHALIL peut ainsi intervenir devant l’ensemble des juridictions
              civiles, pénales et administratives sur le territoire français.
            </p>
            <img src="eva.webp" className="float w-64" alt="" />
          </div>

          <br />
          <p>
            Situé au 18 cours Pierre Puget à Marseille, dans le quartier
            Estrangin-Préfecture, le Cabinet d’avocat est joignable par
            téléphone du lundi au vendredi, de 9h à 19h. N’hésitez pas à appeler
            pour un rendez-vous. Il est accessible par les transports en commun
            et, notamment, le métro (ligne M1 — arrêt Estrangin Préfecture), le
            bus (lignes 41, 518, 521 et 540 – arrêt Paradis Armeny) et le tram
            (Ligne 3 Arrêt place de Rome, en se dirigeant vers le palais de
            Justice).
          </p>
          <br />
          <p>
            Plusieurs parkings se situent également à proximité du cabinet
            (Parking Puget Rue du Docteur Combalat 13006, Parking Monthyon Rue
            Breteuil 13006, ou Parking à ciel ouvert cours Pierre Puget 13006).
          </p>
          <br />
        </Section1>

        <hr className="w-5/6 mx-auto" />

        <Section1>
          <h2 className="sectionTitle">
            Les domaines de compétence du cabinet
          </h2>
          {/* Ajoutez plus de contenu ici */}
        </Section1>
      </main>
    </div>
  );
}
