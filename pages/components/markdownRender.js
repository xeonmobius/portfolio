import md from "markdown-it";

export default function MarkdownRender({ content }) {
  const toHTML = md().render(content);
  return (
    <>
      <div>
        <article
          className="prose lg:prose-xl raleway"
          dangerouslySetInnerHTML={{ __html: toHTML }}
        ></article>
      </div>
    </>
  );
}
