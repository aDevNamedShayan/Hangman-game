const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean
};

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] gap-2">
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            key={key}
            onClick={() => addGuessedLetter(key)}
            className={`w-full border-2 border-black bg-none aspect-square text-4xl uppercase p-2 font-bold cursor-pointer text-black hover:enabled:bg-sky-400 focus:enabled:bg-sky-400 ${
              isActive ? "bg-sky-600 text-white" : ""
            } ${isInactive ? "opacity-30" : ""}`}
            disabled={isInactive || isActive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

// inactive: opacity: .3
// active: darker sky, text-white
