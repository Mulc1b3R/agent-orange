import React from "react";
import Button from "./Button";
import { FaKey } from "react-icons/fa";
import Dialog from "./Dialog";
import Input from "./Input";

export default function SettingsDialog({
  show,
  close,
  customApiKey,
  setCustomApiKey,
}: {
  show: boolean;
  close: () => void;
  customApiKey: string;
  setCustomApiKey: (key: string) => void;
}) {
  const [key, setKey] = React.useState<string>(customApiKey);

  const handleClose = () => {
    setKey(customApiKey);
    close();
  };

  const handleSave = () => {
    setCustomApiKey(key);
    close();
  };

  return (
    <Dialog
      header="Settings ⚙"
      isShown={show}
      close={handleClose}
      footerButton={<Button onClick={handleSave}>Save</Button>}
    >
      <div className="text-md relative flex-auto p-2 leading-relaxed">
        <p className="mb-3">
          Welcome to AgentOrange...
        </p>
        <p className="mb-3">
        Please provide an api key...{" "}
          <em>
            Data is not stored and is encrypted using base64...
          </em>{" "}
         get your API ket here...{" "}
          <a
            href="https://platform.openai.com/account/api-keys"
            className="text-blue-500"
          >
            link.
          </a>
        </p>
        <Input
          left={
            <>
              <FaKey />
              <span className="ml-2">Key:</span>
            </>
          }
          placeholder={"sk-..."}
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <strong className="mt-10">
          NOTE: Please use this machine learning model responsibly...
        </strong>
      </div>
    </Dialog>
  );
}
