import React from "react";
import { FaBrain, FaGithub, FaTwitter } from "react-icons/fa";
import Dialog from "./Dialog";

export default function HelpDialog({
  show,
  close,
}: {
  show: boolean;
  close: () => void;
}) {
  return (
    <Dialog header="Welcome to AgentOrange" isShown={show} close={close}>
      <div className="text-md relative flex-auto p-2 leading-relaxed">
        <p>
          <strong>AgentOrange</strong> allows you to Build, configure and deploy
          Autonomous AI agentson the www . Ask it to perform any task you require.
        </p>
        <div>
          <br />
          This platform is currently in beta, we are currently working on:
          <ul className="ml-5 list-inside list-disc">
            <li>Memory 🧠</li>
            <li>Web browsing 🌐</li>
            <li>Interaction with websites and people 👨‍👩‍👦</li>
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
                "https://twitter.com/asimdotshrestha/status/1644883727707959296",
                "_blank"
              )
            }
          >
            <FaTwitter size={30} />
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
