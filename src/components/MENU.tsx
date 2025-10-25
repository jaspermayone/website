// components/MENU.tsx
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
    <div className="pb-2 w-full">
      <div className="pt-5 w-full">
        <div className="flex w-full justify-center items-center mb-2 text-center">
          <AnimatedTitle
            firstWord={pageFirstWord}
            secondWord={pageSecondWord}
            thirdWord={pageThirdWord}
            color={color}
          />
        </div>
        <div className="flex w-full justify-center">
          <PageNavigation color={color} />
        </div>
      </div>
      {!disableSquig && (
        <SquigglyLine
          frequency={50}
          amplitude={0.4}
          className="w-full"
          color="#56ba8e"
        />
      )}
    </div>
  );
};

export default MENU;
