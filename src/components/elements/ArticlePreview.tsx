export default function ArticlePreview({ title, date, content, tags }) {
    return (
      <article className="bg-text max-w-[300px] shadow-md rounded-2xl p-6 w-full">
        <header className="mb-4">
          <h2 className="text-2xl mb-2 font-bold text-accent">{title}</h2>
          <p className="text-sm text-gray-500">
            <span className="font-medium">{date}</span>
          </p>
        </header>
        <p className="text-base text-teal-900 leading-relaxed">
          {content}
        </p>
        <footer className="mt-4 border-t border-gray-400 pt-2 text-sm text-gray-500">
          <p>{tags.map((tag, index) => (
            <span key={index} className="mr-2">#{tag}</span>
          ))}</p>
        </footer>
      </article>
    );
  }