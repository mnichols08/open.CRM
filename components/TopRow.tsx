import Summary from "@/components/Summary";
import Box from "@/components/Box";

export default function TopRow({
  summary,
  Card1,
  Card2,
}: {
  summary: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
  Card1: { title: string; description: string; content: string, progress?: number };
  Card2: { title: string; description: string; content: string, progress?: number };
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      <Summary
        title={summary.title}
        description={summary.description}
        buttonText={summary.buttonText}
        buttonLink={summary.buttonLink}
      />
      <Box
        title={Card1.title}
        description={Card1.description}
        content={Card1.content}
        progress={Card1.progress}
      />
      <Box
        title={Card2.title}
        description={Card2.description}
        content={Card2.content}
        progress={Card2.progress}
      />
    </div>
  );
}
