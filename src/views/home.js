import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Features from '../components/features'
import Doctor from '../components/doctor'
import Practice from '../components/practice'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>AI Bulls</title>
        <meta name="description" content="AI Bulls" />
        <meta property="og:title" content="AI Bulls" />
        <meta property="og:description" content="AI bulls" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f67c78d6-2f90-4bc0-97c2-7533864d72e6/d88c89cd-3893-4c40-a9d7-286a285197b8?org_if_sml=1"
        />
      </Helmet>
      <div data-modal="practices" className="home-modal">
        <div className="home-practices">
          <div className="home-heading">
            <span className="home-header">Our practices</span>
            <svg
              viewBox="0 0 1024 1024"
              data-close="practices"
              className="home-close"
            >
              <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </div>
          <div className="home-grid">
            <div className="home-section">
              <div className="home-heading01">
                <span className="home-header01">Cardiology</span>
                <span className="home-caption">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image"
                />
              </div>
            </div>
            <div className="home-section1">
              <div className="home-heading02">
                <span className="home-header02">Orthopedics</span>
                <span className="home-caption1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text01">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image01"
                />
              </div>
            </div>
            <div className="home-section2">
              <div className="home-heading03">
                <span className="home-header03">Ophtalmology</span>
                <span className="home-caption2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text02">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image02"
                />
              </div>
            </div>
            <div className="home-section3">
              <div className="home-heading04">
                <span className="home-header04">Pediatrics</span>
                <span className="home-caption3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text03">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image03"
                />
              </div>
            </div>
            <div className="home-section4">
              <div className="home-heading05">
                <span className="home-header05">Nutrition</span>
                <span className="home-caption4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text04">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image04"
                />
              </div>
            </div>
            <div className="home-section5">
              <div className="home-heading06">
                <span className="home-header06">General</span>
                <span className="home-caption5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text05">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image05"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="home-hero">
        <header data-thq="thq-navbar" className="home-navbar">
          <div className="home-left">
            <a
              href="https://aibulls.xyz"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link"
            >
              <img
                alt="image"
                src="/Bulls/124-1500h.png"
                className="home-logo"
              />
            </a>
            <nav className="home-links">
              <a href="#how-it-works" className="home-link1">
                Roadmap
              </a>
              <a href="#team" className="home-link2">
                Team
              </a>
              <span className="home-link3">Hall of Fame</span>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="home-right">
            <a
              href="https://mint.aibulls.xyz"
              target="_blank"
              rel="noreferrer noopener"
              className="home-book button button-main"
            >
              <span className="home-text06">Mint</span>
            </a>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-container1">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  className="home-image06"
                />
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav1"
              >
                <span className="home-text07">Features</span>
                <span className="home-text08">How it works</span>
                <span className="home-text09">Prices</span>
                <span className="home-text10">Contact</span>
                <button className="home-book1 button button-main">
                  <img
                    alt="image"
                    src="/Icons/calendar.svg"
                    className="home-image07"
                  />
                  <span className="home-text11">Book an appointment</span>
                </button>
              </nav>
            </div>
          </div>
        </header>
        <div className="home-main">
          <div className="home-content">
            <div className="home-heading07">
              <h1 className="home-header07">AI BULLS</h1>
              <p className="home-caption6">First of a kind AI made pfp</p>
            </div>
            <a
              href="https://twitter.com/AIBulls"
              target="_blank"
              rel="noreferrer noopener"
              className="home-book2 button button-main"
            >
              <span>Twitter</span>
            </a>
          </div>
          <div className="home-image08">
            <img
              alt="image"
              src="/Bulls/71-1500w.png"
              className="home-image09"
            />
          </div>
        </div>
        <div id="features" className="home-features">
          <div className="home-content01">
            <Features
              Title="What's AI Bulls"
              Description="Fun project to test out the limits of AI artistry"
            ></Features>
            <Features
              Title="How's it made?"
              Description="Used stablediffusion img2img, edited on photopea &amp; compiled by Hashlips art engine"
            ></Features>
            <Features
              Title="Why?"
              Description="Bulls are back but this time with a degree in finance. As Bull Jordan once said Obstacles don’t have to stop you. If you run into a wall smash it"
            ></Features>
          </div>
        </div>
        <div className="home-background"></div>
      </section>
      <section id="team" className="home-meet">
        <div className="home-heading08">
          <h2 className="home-text13">Our Team</h2>
          <p className="home-text14">Web3 enthusiasts &amp; builders</p>
        </div>
        <div className="home-list">
          <div className="home-controls">
            <img
              alt="image"
              src="/Icons/circle-arrow.svg"
              data-doctors="previous"
              className="arrow"
            />
            <img
              alt="image"
              src="/Icons/circle-arrow.svg"
              data-doctors="next"
              className="home-forward arrow"
            />
          </div>
          <div data-teleport="doctors" className="home-doctors">
            <Doctor
              text="Coolest CoFounder"
              heading="Nscnt"
              image_src="/Bulls/99-300w.png"
            ></Doctor>
            <Doctor
              text="Twitter Shitposter"
              heading="Hustle"
              image_src="/Bulls/129-300w.png"
            ></Doctor>
            <Doctor
              text="StableDiffusion Enjoyer"
              heading="BonAppetitJovi"
              image_src="/Bulls/66-300w.png"
            ></Doctor>
            <Doctor
              text="Solid in Solidity "
              heading="Limo"
              image_src="/Bulls/4-300w.png"
            ></Doctor>
          </div>
        </div>
      </section>
      <section className="home-practices1">
        <div className="home-heading09">
          <h2 className="home-text15">
            <span className="home-text16">ERC721A</span>
            <br></br>
            <br></br>
            <span>Free Mint</span>
            <br></br>
            <br></br>
            <span>AI Art</span>
            <br></br>
          </h2>
        </div>
        <div className="home-content02">
          <div className="home-grid1">
            <Link to="/">
              <div className="home-practice-wrapper">
                <Practice Title="2300" Description="bulls"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper1">
                <Practice
                  Title="1 free/wallet"
                  Description="0.0069/extra"
                ></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper2">
                <Practice Title="11bulls" Description="wallet limit"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper3">
                <Practice Title="100Mil+" Description="combinations"></Practice>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="home-why">
        <div className="home-heading10">
          <h2 className="home-header08">Roadmap</h2>
        </div>
        <div className="home-content03">
          <div className="home-caption7">
            <h3 className="home-header09">
              Stomping new trails, exploring new stuff
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h3>
          </div>
        </div>
      </section>
      <section className="home-features1">
        <div className="home-section6">
          <div className="home-content04">
            <div className="home-header10">
              <h2 className="home-heading11">
                Discussing Dishing &amp; Dissing the newest &amp; best crypto
                projects
              </h2>
              <p className="home-capton">
                Whether web3 games or tokenization to newest ponzi on the block,
                we&apos;ll walk around the block checking for the most exciting
                &amp; the most hoopla making projects &amp; events
              </p>
            </div>
          </div>
          <img
            alt="image"
            src="/bullish/10-1500w.png"
            className="home-image10"
          />
        </div>
        <div className="home-section7">
          <div className="home-content05">
            <div className="home-header11">
              <h2 className="home-heading12">Dr Bulls Sessions</h2>
              <p className="home-capton1">
                Spaces revolving around sharing the wisdom gained in the years
              </p>
            </div>
          </div>
          <img
            alt="image"
            src="/bullish/72-1500w.png"
            className="home-image11"
          />
        </div>
        <div className="home-section8">
          <div className="home-content06">
            <div className="home-header12">
              <h2 className="home-heading13">Royal Rankups</h2>
              <p className="home-capton2">
                Keeping the ears &amp; eyes peeled for the most exciting
                projects
              </p>
            </div>
          </div>
          <img
            alt="image"
            src="/bullish/31-1500w.png"
            className="home-image12"
          />
        </div>
        <button className="home-book3 button button-main">
          <span>Book a virtual appointment</span>
        </button>
      </section>
      <section className="home-news">
        <div className="home-heading14">
          <h2 className="home-text25">Hall of Fame</h2>
          <p className="home-text26">
            <span className="home-text27">
              Airspace for the funniest stuff I saw people saying about us
            </span>
            <br></br>
          </p>
        </div>
        <div className="home-list1">
          <div className="home-item">
            <div className="home-image13">
              <img
                alt="image"
                src="/bullish/158-1500w.png"
                className="home-image14"
              />
            </div>
            <div className="home-content07">
              <div className="home-details">
                <span className="home-date">James Bond</span>
                <p className="home-quick-description">
                  <span className="home-text29">
                    Well definitely the coolest bulls on the block
                  </span>
                  <br></br>
                  <br></br>
                  <span>I dub my bull 0023</span>
                  <br></br>
                  <br></br>
                  <span>-High Praise Mr Bond</span>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
          <div className="home-item1">
            <div className="home-image15">
              <img
                alt="image"
                src="/Bulls/71-1500w.png"
                className="home-image16"
              />
            </div>
            <div className="home-content08">
              <div className="home-details1">
                <span className="home-date1">Obama</span>
                <p className="home-quick-description1">
                  <span className="home-text37">I love AI Bulls</span>
                  <br></br>
                  <br></br>
                  <span>-</span>
                  <span>why thank you good sir</span>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
          <div className="home-item2">
            <div className="home-image17">
              <img
                alt="image"
                src="/Bulls/23-1500w.png"
                className="home-image18"
              />
            </div>
            <div className="home-content09">
              <div className="home-details2">
                <span className="home-date2">Redfoo</span>
                <p className="home-quick-description2">
                  <span className="home-text43">Keep rocking</span>
                  <br></br>
                  <br></br>
                  <span>- will do redfoo</span>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="home-download">
        <div className="home-main1">
          <img alt="image" src="/Bulls/28-1500w.png" className="home-image19" />
          <div className="home-content10">
            <h2 className="home-text48">
              Join us on twitter for fun or mint to be an AI Bull
            </h2>
            <div className="home-buttons">
              <a
                href="https://twitter.com/AIBulls"
                target="_blank"
                rel="noreferrer noopener"
                className="home-i-os button button-main"
              >
                <span>Twitter</span>
              </a>
              <a
                href="https://mint.aibulls.xyz"
                target="_blank"
                rel="noreferrer noopener"
                className="home-android button button-main"
              >
                <span>
                  <span>Mint</span>
                  <br></br>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <DangerousHTML
          html={`<script>
const modalOpen = document.querySelectorAll('[data-open]');
const modalClose = document.querySelectorAll('[data-close]');

modalOpen.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.open}"]\`);
        modal.style.display = "flex";
    });
});

modalClose.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.close}"]\`);
        modal.style.display = "none";
    });
});
</script>
`}
        ></DangerousHTML>
      </div>
      <div>
        <DangerousHTML
          html={`<script>
const dataLetters = document.querySelectorAll("[data-letter]");
let activeLetters = [];
const maxResults = 6;

dataLetters.forEach(letter => {
  letter.addEventListener("click", function() {
    if (this.classList.contains("letter-active")) {
      this.classList.remove("letter-active");
      activeLetters = activeLetters.filter(a => a !== this.dataset.letter);
    } else {
      this.classList.add("letter-active");
      activeLetters.push(this.dataset.letter);
    }
    if (activeLetters.length == 0) {
      document.querySelector("[data-teleport='results']").style.display = "none";
      return;
    }
    showResults();
  });
});

const showResults = () => {
  fetch("https://raw.githubusercontent.com/Shivanshu-Gupta/web-scrapers/master/medical_ner/medicinenet-diseases.json")
    .then(response => response.json())
    .then(data => {
      const filteredData = data.filter(item => {
        const firstLetter = item.disease.charAt(0).toLowerCase();
        if (activeLetters.includes(firstLetter)) {
          return true;
        }
        return false;
      });

      document.querySelector("[data-teleport='results']").style.display = "flex";
      const resultsContainer = document.querySelector("[data-results='letters']");
      resultsContainer.innerHTML = "";

      let counter = 0;
      const diseaseGroups = {};
      const totalActiveLetters = activeLetters.length;

      filteredData.forEach(disease => {
        const firstLetter = disease.disease[0].toLowerCase();
        if (diseaseGroups[firstLetter]) {
          diseaseGroups[firstLetter].push(disease);
        } else {
          diseaseGroups[firstLetter] = [disease];
        }
      });

      Object.keys(diseaseGroups).sort().forEach((firstLetter, index) => {
        const diseasesForThisLetter = diseaseGroups[firstLetter];
        const diseasesToShow = diseasesForThisLetter.slice(0, Math.ceil(maxResults / totalActiveLetters));

        diseasesToShow.forEach(disease => {
          const resultContainer = document.createElement("div");
          resultContainer.classList.add("search-result");
          resultContainer.classList.add("invisible");
          resultContainer.style.animationDelay = \`\${counter * 0.25}s\`;

          const resultText = document.createElement("span");
          resultText.classList.add("result-text");
          resultText.textContent = disease.disease;

          resultContainer.appendChild(resultText);
          resultsContainer.appendChild(resultContainer);
          counter++;

          if (counter === maxResults) {
            const moreContainer = document.createElement("div");
            moreContainer.classList.add("search-result");
            moreContainer.classList.add("more-results");

            const moreText = document.createElement("span");
            moreText.classList.add("result-text");
            moreText.textContent = "More";

            moreContainer.appendChild(moreText);
            resultsContainer.appendChild(moreContainer);
            addedMoreContainer = true;
            return;
          }
        });
      });
    });
};
</script>
`}
        ></DangerousHTML>
      </div>
      <div>
        <DangerousHTML
          html={`<script>
function scroll(direction) {
  const doctorsDiv = document.querySelector('[data-teleport="doctors"]');
  const scrollAmount = 300;
  if (direction === 'previous') {
    doctorsDiv.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  } else if (direction === 'next') {
    doctorsDiv.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}

const buttons = document.querySelectorAll('[data-doctors]');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const direction = button.dataset.doctors;
    scroll(direction);
  });
});
</script>`}
        ></DangerousHTML>
      </div>
    </div>
  )
}

export default Home
