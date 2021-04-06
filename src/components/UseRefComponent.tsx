import { useRef, useState } from 'react';

const UseRefComponent = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [text, setText] = useState<string | null>(null);
  return (
    <div>
      <div>
        <p>
          Input Text: <strong>{text}</strong>
        </p>
      </div>

      <input
        placeholder='Hellloooo world'
        ref={inputRef}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default UseRefComponent;
