import AnimatedTitle from "@/components/AnimatedTitle";
import PageNavigation from "@/components/PageNavigation";
import SquigglyLine from "@/components/SquigglyLine";

interface MENUProps {
  pageFirstWord: string;
  pageSecondWord?: string;
  pageThirdWord?: string;
  color?: string;
  disableSquig?: boolean;
}

const MENU = (props: MENUProps) => {
  const { pageFirstWord, pageSecondWord, pageThirdWord, color, disableSquig } =
    props;
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
      {!disableSquig && (
        <SquigglyLine
          frequency={50}
          amplitude={0.4}
          className="min-w-screen"
          color="#56ba8e"
        />
      )}
    </div>
  );
};

export default MENU;
