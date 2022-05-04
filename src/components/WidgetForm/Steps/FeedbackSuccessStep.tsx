import { CloseButton } from "../../CloseButton";

import checkImageUrl from "../../../assets/check.svg";

interface FeedbackSuccessStep {
  onFeedbackRestartRequest: () => void;
}

export function FeedbackSuccessStep({ onFeedbackRestartRequest }: FeedbackSuccessStep) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={checkImageUrl} alt="Imagem de um check" />

        <span className="text-xl mt-2">
          Agradecemos o feedback!
        </span>

        <button
          type="button"
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand"
          onClick={onFeedbackRestartRequest}
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}