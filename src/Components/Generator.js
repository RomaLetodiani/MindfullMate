import React from 'react';
import { Button } from './Button';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import TwitterIcon from '@mui/icons-material/Twitter';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CopyToClipboard from 'react-copy-to-clipboard';

const Generator = ({
  error,
  currentText,
  fetchdata,
  currentAuthor,
  title,
  setIsOn,
  isOn,
}) => {
  const handleVolumeUpClick = () => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = currentText;
    window.speechSynthesis.speak(msg);
  };

  return (
    <>
      <button
        className="py-2 px-5 text-[#5188ff] transition bg-[#ffffff9c] hover:bg-[#ffffffc9] shadow-lg rounded-full self-end"
        onClick={() => setIsOn(!isOn)}
      >
        Try {isOn ? 'Advice Generator' : 'Quotes Generator'}
      </button>
      <div className="px-10 py-8 rounded-3xl text-[#fff] bg-[#ffffff4c]">
        <header className="text-center">
          <h1 className=" font-bold text-[clamp(18px,5vw,40px)]">
            {title} of The Day
          </h1>
          {error && <p>Error: {error}</p>}

          <div>
            <p className=" py-3 text-[clamp(15px,3vw,20px)]">"{currentText}"</p>
            {currentAuthor && (
              <p className="text-right text-[clamp(13px,3vw,18px)]">
                ~ <i>{currentAuthor} ~</i>
              </p>
            )}
          </div>
        </header>
        <footer className="flex flex-col justify-center items-center">
          <button
            onClick={() => fetchdata()}
            className="my-8 min-w-[200px] py-2 px-8 text-[#fff] bg-[#5188ff] shadow-lg rounded-full transition-all hover:bg-[#2d25c9a3] "
          >
            New {title}
          </button>
          <div className="w-full flex justify-around gap-5">
            <Button onClick={handleVolumeUpClick}>
              <VolumeUpIcon />
            </Button>
            <CopyToClipboard
              text={`"${currentText}"${
                currentAuthor ? ` - ${currentAuthor}` : ''
              }`}
            >
              <Button>
                <ContentCopyIcon />
              </Button>
            </CopyToClipboard>
            <a
              href={`https://twitter.com/intent/tweet?text="${currentText}"${
                currentAuthor ? ` - ${currentAuthor}` : ''
              }`}
              target="__blank"
            >
              <Button>
                <TwitterIcon />
              </Button>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Generator;
