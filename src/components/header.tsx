import { SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaCamera } from "react-icons/fa6";

export default function Header() {
  return (
    <div className="flex items-center justify-between py-2">
      <Link href="/" className="text-xl">Jasper Mayone</Link>
      <div className="flex items-center space-x-4 px-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href="https://www.github.com/jaspermayone/"
                aria-label="Github"
                className="text-gray-400 text-xl"
              >
                <SiGithub />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Github</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href="https://www.instagram.com/jasper.does.circus/"
                aria-label="Circus Instagram"
                className="text-gray-400 text-xl"
              >
                <SiInstagram />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Circus Instagram</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href="https://www.instagram.com/jasper.mayone.photography"
                aria-label="Photography Instagram"
                className="text-gray-400 text-xl"
              >
                <SiInstagram />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Photography Instagram</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href="https://www.linkedin.com/in/jaspermayone/"
                aria-label="Email"
                className="text-gray-400 text-xl"
              >
                <SiLinkedin />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Email</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href="/photos"
                aria-label="Photos"
                className="text-gray-400 text-2xl"
              >
                <FaCamera />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Photos</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
