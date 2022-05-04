import { ArrowLeft, Camera } from "phosphor-react";

import { FeedbackType, feedbackTypes } from "..";

import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequest: () => void;
}

export function FeedbackContentStep({ feedbackType, onFeedbackRestartRequest }: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <>
      <header>
        <button 
          className="top-4 left-4 absolute text-zinc-400 hover:text-zinc-100 p-1" 
          title="Voltar a seleção de feedback"
          onClick={onFeedbackRestartRequest}
        >
          <ArrowLeft className="w-4 h-4" weight="bold" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />

          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form className="my-4 w-full">
        <textarea 
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand focus:ring-brand focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder={feedbackTypeInfo.placeholder}
        />

        <footer className="flex gap-2 mt-2">
          <button
            type="button"
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand"
          >
            <Camera className="w-6 h-6" />
          </button>

          <button
            type="submit"
            className="p-2 bg-brand rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand transition-colors"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}