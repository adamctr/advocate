import ArticlePreview from "../../components/elements/ArticlePreview"

const page = () => {
    const exTags = ['tag1', "tag2"];
  return (
    <>
    <div className="bg-accent text-text mx-auto pb-8">
        <div className="h-24 md:h-32"></div>

        <div className="">
            <h1 className="sectionTitle my-12 mx-auto w-fit border-b ">Les actualités</h1>
        </div>
    </div>
    <div className="max-w-[1024px] mx-auto px-2 mt-16">
        <ul className='flex flex-wrap justify-center leading-[.1rem] px-2 py-2 text-text font-medium mt-8 mx-auto w-fit  gap-8'>
           <a href="" className="font-bold text-text border-b-2 pb-[.4rem] border-text"><li>TOUT</li></a>
           <a href=""><li>Droit des affaires</li></a>
           <a href=""><li>Droit des affaires</li></a>
           <a href=""><li>Droit des affaires</li></a>
        </ul>
    </div>
    <div className="max-w-[1024px] mt-8 justify-center flex flex-wrap gap-8 mx-auto px-4">
        <ArticlePreview tags={exTags} content={"Lorem Ipsum"} title={"Titre de l'article"} date={"Il y a 3 jours"}/>
        <ArticlePreview tags={exTags} content={"Lorem Ipsum"} title={"Titre de l'article"} date={"Il y a 3 jours"}/>
        <ArticlePreview tags={exTags} content={"Lorem Ipsum"} title={"Titre de l'article"} date={"Il y a 3 jours"}/>
        <ArticlePreview tags={exTags} content={"Lorem Ipsum"} title={"Titre de l'article"} date={"Il y a 3 jours"}/>
    </div>

    </>
  )
}

export default page