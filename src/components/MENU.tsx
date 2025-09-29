import AnimatedTitle from "@/components/AnimatedTitle";
import PageNavigation from "@/components/PageNavigation";
import SquigglyLine from "@/components/SquigglyLine";

interface MENUProps {
  pageFirstWord: string;
  pageSecondWord?: string;
  pageThirdWord?: string;
  color?: string;
}

const MENU = (props: MENUProps) => {
  const { pageFirstWord, pageSecondWord, pageThirdWord, color } = props;

  return (
    <div className="pb-2">
      <div className="pt-5">
        <div className="flex justify-center mb-2">
          <AnimatedTitle
            firstWord={pageFirstWord}
            secondWord={pageSecondWord}
            thirdWord={pageThirdWord}
            color={color}
          />
        </div>
        <PageNavigation color={color} />
      </div>
      <SquigglyLine
        height={10}
        frequency={25}
        amplitude={1.2}
        strokeWidth={1.5}
        className="w-full"
        color="#4299e1"
      />
    </div>
  );
};

export default MENU;
