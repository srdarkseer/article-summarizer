import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="xyRo-logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/srdarkseer")}
          className="github_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        xyRo <span className="invisible"> </span>
        <span className="gray_gradient">Article Summarizer</span>
      </h1>
      <h2 className="desc">Make reading simpler by using xyRo to condense lengthy articles into brief summaries. </h2>
    </header>
  );
};

export default Hero;
