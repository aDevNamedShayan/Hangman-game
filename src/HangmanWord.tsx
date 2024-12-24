type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div className="flex gap-[.25em] text-8xl font-bold uppercase font-mono">
      {wordToGuess.split("").map((letter, index) => (
        <span className={`w-[.5em] border-b-[.1em] border-b-black`} key={index}>
          <span
            className={`
              ${guessedLetters.includes(letter) || reveal ? "visible" : "hidden"}
              ${guessedLetters.includes(letter) ? "text-green-600" : ""}
              ${!guessedLetters.includes(letter) ? "text-red-600" : ""}
              `}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
