import AnimatedTitle from "@/components/AnimatedTitle";
import PageNavigation from "@/components/PageNavigation";
import WavyDivider from "@/components/WavyDivider";

interface MENUProps {
  pageFirstWord: string;
  pageSecondWord?: string;
}

const MENU = (props: MENUProps) => {
  const { pageFirstWord, pageSecondWord } = props;

  return (
    <div>
      <div className="flex justify-center">
        <AnimatedTitle firstWord={pageFirstWord} secondWord={pageSecondWord} />
      </div>
      <PageNavigation />
      <WavyDivider />
    </div>
  );
};

export default MENU;
