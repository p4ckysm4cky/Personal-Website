import styles from '../styles/Home.module.scss'
import ProjectCard from '../components/ProjectCard'
import { FaGithub } from 'react-icons/fa'
import { BsCodeSlash } from 'react-icons/bs'

// images
import calculatorImage from "../images/projects/calculator.png"
import pixelDraw from "../images/projects/pixel_draw.png"
import rockPaperScissors from "../images/projects/rock_paper_scissors.png"
import ticTacToe from "../images/projects/tic_tac_toe.png"
import libraryImage from "../images/projects/library.png"
import animeSearch from "../images/projects/animeSearch.jpg"

export default function Home() {
  return (
    <div className={styles.pageStructure}>
      <div className={styles.banner}>
        <div className={styles.about}>
          <div className={styles.aboutText}>
            <h2>About</h2>
            <p>Hi, I'm Jacky. A student studying Computer Science and Information Technology Management.</p>
          </div>
        </div>
      </div>
      <div className={styles.project}>
          <h2>
            Programming Projects
          </h2>
          {/* This is where my projects go */}
          <div className={styles.container}> 
            <ProjectCard
              image={animeSearch}
              title="Anime Character Search"
              url="https://github.com/p4ckysm4cky/search_anime_character"
              description={<p>A <b>React App</b> that uses <b>ApolloClient</b> to search for anime characters through <b>GraphQL</b> using the Anilist API.</p>}
           
            />
            <ProjectCard
              image={libraryImage}
              title="Library Reader Tracker"
              url="https://github.com/p4ckysm4cky/library_app"
              description={<p>An <b>Object-Orientated-Programming</b> based webapp that keeps track of books that you have read. it uses <b>Javascript localstorage</b> to store the information.</p>}
            />

            <ProjectCard
              image={calculatorImage}
              title="Calculator"
              url="https://github.com/p4ckysm4cky/web_calculator"
              description={<p>A GUI calculator based on the Dracula colour scheme, which I made to practise <b>CSS Grid</b>.</p>}
            />
             <ProjectCard
              image={ticTacToe}
              title="Tic Tac Toe"
              url="https://github.com/p4ckysm4cky/Tic-Tac-Toe"
              description={<p>A project I made to practise my Javascript skills.</p>}
            />
            <ProjectCard
              image={pixelDraw}
              title="Pixel Draw"
              url="https://github.com/p4ckysm4cky/pixel_doodle"
              description={<p>A webapp that allows you to draw pixel art with your mouse. This project helped me understand <b>Javascript DOM Events</b>.</p>}
            />
            <ProjectCard
              image={rockPaperScissors}
              title="Rock Paper Scissors"
              url="https://github.com/p4ckysm4cky/rock_paper_scissors"
              description={<p>I made this webapp, so I could practise the basics of <b>CSS</b> and <b>Flexbox</b>.</p>}            
            />

          </div>

          
      </div>
      <footer>
        <a href="https://github.com/p4ckysm4cky">
          <FaGithub
            className={styles.icons}
          />
        </a>
        <p>
          Website built with <a href="https://nextjs.org/">NextJS</a> and <a href="https://sass-lang.com/">Sass</a>
        
        </p>

        <a href="https://github.com/p4ckysm4cky/Personal-Website">
          <BsCodeSlash
            className={styles.icons}
          />
        </a>
      </footer>
    </div>

  )
}

