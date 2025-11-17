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
  addBackground?: boolean;
}

const MENU = (props: MENUProps) => {
  const {
    pageFirstWord,
    pageSecondWord,
    pageThirdWord,
    color,
    disableSquig,
    addBackground,
  } = props;
  return (
    <div className="pb-2 w-full">
      <div className="pt-5 w-full">
        <div className="flex w-full justify-center items-center mb-6 text-center">
          <div
            style={
              addBackground
                ? {
                    background: "#e0eb60",
                    padding: "1rem 3rem",
                    borderRadius: "50px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }
                : {}
            }
          >
            <AnimatedTitle
              firstWord={pageFirstWord}
              secondWord={pageSecondWord}
              thirdWord={pageThirdWord}
              color={color}
              addTextShadow={addBackground}
            />
          </div>
        </div>
        <div className="flex w-full justify-center mb-4">
          <PageNavigation color={color} addTextShadow={addBackground} />
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
