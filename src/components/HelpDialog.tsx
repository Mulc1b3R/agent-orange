import React from "react";
import { FaBrain, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Dialog from "./Dialog";

export default function HelpDialog({
  show,
  close,
}: {
  show: boolean;
  close: () => void;
}) {
  return (
    <Dialog header="Welcome to Agent Orange GPT" isShown={show} close={close}>
      <div className="text-md relative flex-auto p-2 leading-relaxed">
        <p>
          <strong>AgentOrange</strong> allows you to Build, configure and deploy
          Autonomous AI agents on the www . Ask it to perform any task you require.
        </p>
        <div>
          <br />
          Future add ons and integrations i am working on:
          <ul className="ml-5 list-inside list-disc">
            <li>Code reduction for less energy usage and more speed</li>
            <li>Responsive background using particles.js</li>
            <li>Text to speech for people with disabilities</li>
            <li>Python itegration</li>
          </ul>
          <br />
          <p className="mt-2">Details below:</p>
        </div>
        <div className="mt-4 flex w-full items-center justify-center gap-5">
          <div
            className="cursor-pointer rounded-full bg-black/30 p-3 hover:bg-black/70"
            onClick={() =>
              window.open("https://time-series-forecasting.vercel.app", "_blank")
            }
          >
            <FaBrain size={30} />
          </div>
          <div
            className="cursor-pointer rounded-full bg-black/30 p-3 hover:bg-black/70"
            onClick={() =>
              window.open(
                "https://zendog-psico-mojo.vercel.app/",
                "_blank"
              )
            }
          >
            <FaExternalLinkAlt size={30} />
          </div>
          <div
            className="cursor-pointer rounded-full bg-black/30 p-3 hover:bg-black/70"
            onClick={() =>
              window.open("https://github.com/psico-mojo/aibot", "_blank")
            }
          >
            <FaGithub size={30} />
          </div>
        </div>
      </div>
    </Dialog>
  );
}
