import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import { FaCamera } from "react-icons/fa6";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export default function PhotosHeader() {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-4 px-6 shadow-lg">
      <Link href="/" className="text-2xl font-bold text-white">
        Jasper Mayone
      </Link>
      <div className="flex items-center space-x-6">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link href="https://www.github.com/jaspermayone/" aria-label="Github" className="text-white text-xl">
                <SiGithub />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Github</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Link href="https://www.instagram.com/jasper.does.circus/" aria-label="Circus Instagram" className="text-white text-xl">
                <SiInstagram />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Circus Instagram</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Link href="https://www.instagram.com/jasper.mayone.photography" aria-label="Photography Instagram" className="text-white text-xl">
                <SiInstagram />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Photography Instagram</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Link href="https://www.linkedin.com/in/jaspermayone/" aria-label="LinkedIn" className="text-white text-xl">
                <SiLinkedin />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>LinkedIn</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Link href="/photos" aria-label="Photos" className="text-white text-2xl">
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
