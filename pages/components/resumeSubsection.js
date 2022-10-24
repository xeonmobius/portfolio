export default function ResumeSubsection({jobTitle, points}) {
  return (
    <>
      <div>
        <h3 className="text-3xl">{jobTitle}</h3>
      </div>
      <div>
        <ul className="list-disc pl-6">
          <li>
            {points}
          </li>
        </ul>
      </div>
    </>
  );
}
