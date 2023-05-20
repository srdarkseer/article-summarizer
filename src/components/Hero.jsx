import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="xyRo-logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/srdarkseer")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Sumamrize Articles with <br className="max-md:hidden" />
        <span className="gray_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">Use xyRo, an open-source article summarizer, to make reading easier by turning large articles into succinct summaries. </h2>
    </header>
  );
};

export default Hero;
