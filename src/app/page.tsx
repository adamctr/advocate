import dynamic from "next/dynamic";
import Section1 from "../components/elements/Section1";
import { Fade, Bounce, Slide, Zoom } from "react-awesome-reveal";

const HeroAnimation = dynamic(
  () => import("../components/animations/HeroAnimation"),
  { ssr: true }
);

const EvaAnimation = dynamic(
  () => import("../components/animations/EvaAnimation"),
  { ssr: true }
);


export default function Home() {

  return (
    <>
      {/* Le composant d'animation est chargé côté client uniquement */}
      <HeroAnimation />
      <EvaAnimation />

      <header className="w-full relative ">
        <img
          src="bgheroimage3.webp"
          id="heroImage"
          alt="image principale"
          className="w-full h-[85vh] md:h-[80vh] border object-cover filter brightness-[0.1]"
        />

        <div className="absolute overflow-hidden items-center top-[35%] w-full flex flex-col gap-4">
          <Zoom direction="up" triggerOnce>
          <p id="heroDesc"
            className="max-w-4xl  w-full text-center font-medium text-xl leading-10 md:leading-normal md:text-4xl  md:w-fit text-text uppercase font-boldpy-2 px-4"
          >
            Votre partenaire juridique pour sécuriser et valoriser vos projets
            d'affaires.
          </p>
          </Zoom>
          <Bounce delay={700} triggerOnce>
            <button
            id="contactButton"
            className=" rounded-xl mt-4 text-text uppercase font-bold bgmorphism border-2 py-2 px-4"
          >
            Me Contacter
          </button>
          </Bounce>
          
        </div>
      </header>

      <main className="relative">

        {/* <div id="bannerdesign" className="h-32 my-16 md:my-32 -rotate-12 w-screen border-teal-900 border-t-4 border-b-4 bg-teal-800 bgpattern"></div> */}

        <Section1 id={`evaSection`} className={`my-8 md:mb-[16rem]
        before:content-[''] before:z-0 before:absolute before:w-full before:h-full before:bg-accent md:before:translate-x-6 md:before:translate-y-10 before:rounded
        `}>
          <div className="relative z-30">
            <Fade triggerOnce>
              <h2 className="sectionTitle px-4">
                Les domaines de <br/>compétence du cabinet
              </h2>
            </Fade>
          </div>
          <div className="relative z-20 flex flex-col gap-8 md:flex-row ">
            <Fade delay={500} triggerOnce>
              <div className="w-full flex justify-end">
                <img src="eva.webp" id="dahanphoto" className="relative rounded my-8 contrast-75 z-0 w-64 md:w-[100rem] right-0 top-0  md:-left-8 md:top-[100px]" alt="" />
              </div>
            </Fade>

            <Fade triggerOnce>
              <div className="px-6 -translate-y-44 mb-[-11rem] md:translate-y-0">
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
              </div>
            </Fade>
          </div>
        </Section1>

        <Section1 className="my-16 bgmorphismwhite px-4 py-2 max-w-[90%] md:max-w-[800px]">
          <div className="flex flex-col gap-4 w-full mx-auto">
            <h2 className="text-teal-800 text-2xl text-center font-bold  my-4">Je veux planifier un appel gratuit</h2>
            <form action="" className="flex flex-col gap-4 ">
              <input type="email" className="text-teal-900 bg-gray-200 rounded px-4 py-2" placeholder="exemple@gmail.com" required/>
              <button type="submit" className="bg-teal-900 rounded py-2 my-2 hover:font-bold">Je souhaite être appelé</button>
            </form>
          </div>
        </Section1>

        
        <div className="before:content-[''] before:z-0 before:absolute before:w-full before:h-full before:bg-accent before:rounded">
                   
          <Section1 className="px-4">
            <Fade  triggerOnce>
              <h2 className="sectionTitle z-0 relative ">
                  Avocat Eva Nizard Dahan au burreau de Marseille
              </h2>
            </Fade>
            
            <div className="px-4">
              <Fade  triggerOnce> 
                <div className="flex flex-wrap gap-4">
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
              </Fade>
            </div>
          </Section1>
        </div>   
      </main>
    </>
  );
}
