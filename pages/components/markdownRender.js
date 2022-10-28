import md from "markdown-it";

export default function MarkdownRender({ content }) {
  const toHTML = md().render(content);
  return (
    <>
      <div>
        <article
          className="prose raleway prose-h1:mb-5 prose-ul:-mt-5 prose-h2:-mt-1 lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: toHTML }}
        ></article>
      </div>
    </>
  );
}
