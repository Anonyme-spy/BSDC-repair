import './../assets/css/About.css';
export function AboutUs() {
  return (
    <div className="flex text-center self-center items-center justify-center flex-col">
      <h1 className="flex flex-col items-center justify-center text-center pb-10" id="about-h1">
        ABOUT US
          <img src="/revert.png" width="47" height="11" align="center" alt="tree dot" className="accent-black pt-3" />
      </h1>
      <article className="flex text-center items-center">
        <p className="text-center" id="about-p">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a
          type specimen book. It has
          survived not only five centuries, but also the leap into electronic typesetting, remaining. Lorem Ipsum is
          simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
          ever
          since the 1500s, when
          an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
          only
          five centuries, but also the leap into electronic typesetting, remaining .
        </p>
      </article>
    </div>
)
}