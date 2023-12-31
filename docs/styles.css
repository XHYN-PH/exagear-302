/*===============
  global styles
===============*/

* {
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
  background-color: inherit;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  box-shadow: none;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Poppins", sans-serif;
  line-height: 1.5;
  color: var(--clr-fg);
  background-color: var(--clr-bg);
}

.light {
  --clr-bg: #fcfcfc;
  --clr-bg-alt: #fff;
  --clr-fg: #555;
  --clr-fg-alt: #444;
  --clr-primary: #2978b5;
  --shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.dark {
  --clr-bg: #23283e;
  --clr-bg-alt: #2a2f4c;
  --clr-fg: #bdbddd;
  --clr-fg-alt: #cdcdff;
  --clr-primary: #90a0d9;
  --shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}

::-moz-selection {
  background: var(--clr-primary);
  color: var(--clr-bg);
}

::-webkit-selection,
::selection {
  background: var(--clr-primary);
  color: var(--clr-bg);
}

h1,
h2,
h3,
h4 {
  line-height: 1.2;
  color: var(--clr-fg-alt);
}

h1 {
  font-size: 4rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.5rem;
}

h4 {
  font-size: 1.3rem;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}

@media (max-width: 900px) {
  h1 {
    font-size: 2.6rem;
  }
}

/*===================
  buttons and links
===================*/

.link {
  color: var(--clr-primary);
  padding: 0 0 0.3em 0;
  position: relative;
}

.link:hover {
  color: var(--clr-primary);
}

.link::before {
  content: "";
  display: inline;
  width: 0%;
  height: 0.2em;
  position: absolute;
  bottom: 0;
  background-color: var(--clr-primary);
  transition: width 0.2s ease-in;
}

.link:hover::before,
.link:focus::before {
  width: 100%;
}

.link--nav {
  color: var(--clr-fg);
  text-transform: lowercase;
  font-weight: 500;
}

.link--icon {
  color: var(--clr-fg);
  font-size: 1.2rem;
}

.btn {
  display: block;
  padding: 0.8em 1.4em;
  font-weight: 500;
  font-size: 0.9rem;
  text-transform: lowercase;
  transition: transform 0.2s ease-in-out;
}

.btn--outline {
  color: var(--clr-primary);
  border: 2px solid var(--clr-primary);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.btn--outline:focus,
.btn--outline:hover {
  color: var(--clr-bg);
}

.btn--outline:before {
  content: "";
  position: absolute;
  background-color: var(--clr-primary);
  right: 100%;
  bottom: 0;
  left: 0;
  top: 0;
  z-index: -1;
  transition: right 0.2s ease-in-out;
}

.btn--outline:hover::before,
.btn--outline:focus::before {
  right: 0;
}

.btn--plain {
  text-transform: initial;
  background-color: var(--clr-bg-alt);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  border: 0;
}

.btn--plain:hover {
  transform: translateY(-4px);
}

.btn--icon {
  padding: 0;
  font-size: 1.2rem;
}

.btn--icon:hover,
.btn--icon:focus {
  color: var(--clr-primary);
}

.btn--icon:active {
  transform: translateY(-5px);
}

/*========
  layout
========*/

.center {
  display: flex;
  align-items: center;
}

.header {
  height: 8em;
  max-width: 1100px;
  width: 95%;
  margin: 0 auto;
  justify-content: space-between;
}

main {
  max-width: 1100px;
  width: 95%;
  margin: 0 auto;
}

.section {
  margin-top: 5em;
}

.section__title {
  text-align: center;
  margin-bottom: 1em;
  text-transform: uppercase;
}

.nav__list {
  margin-right: 1.5em;
  display: flex;
}

.nav__list-item {
  margin-left: 1.5em;
}

.nav__hamburger {
  display: none;
  width: 1em;
}

.about {
  flex-direction: column;
  margin-top: 3em;
}

.about__name {
  color: var(--clr-primary);
}

.about__role {
  margin-top: 1.2em;
}

.about__desc {
  font-size: 1rem;
  max-width: 600px;
}

.about__desc,
.about__contact {
  margin-top: 2.4em;
}

.about .link--icon {
  margin-right: 0.8em;
}

.about .btn--outline {
  margin-right: 1em;
}

.projects__grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
  grid-gap: 2em;
}

.project {
  padding: 2em;
  margin: 0 auto;
  text-align: center;
  box-shadow: var(--shadow);
  transition: transform 0.2s linear;
}

.project:hover {
  transform: translateY(-7px);
}

.project__description {
  margin-top: 1em;
}

.project__stack {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1.2em 0;
}

.project__stack-item {
  margin: 0.5em;
  font-weight: 500;
  font-size: 0.8rem;
  color: var(--clr-fg-alt);
}

.project .link--icon {
  margin-left: 0.5em;
}

.skills__list {
  max-width: 450px;
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.skills__list-item {
  margin: 0.5em;
}

.contact {
  flex-direction: column;
}

.footer {
  padding: 3em 0;
  margin-top: 4em;
  text-align: center;
}

.footer__link {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--clr-fg);
}

.scroll-top {
  display: none;
  position: fixed;
  bottom: 1em;
  right: 2em;
  background-color: transparent;
  font-size: 1.8rem;
  transition: transform 0.2s ease-in-out;
}

@media (max-width: 600px) {
  .header {
    height: 6em;
  }

  .section {
    margin-top: 4em;
  }

  .nav__list {
    flex-direction: column;
    padding: 4em 0;
    position: absolute;
    right: 0;
    left: 0;
    top: 5em;
    background-color: var(--clr-bg);
    width: 0;
    overflow: hidden;
    transition: width 0.2s ease-in-out;
  }

  .display-nav-list {
    width: 100%;
  }

  .nav__list-item {
    margin: 0.5em 0;
  }

  .nav__hamburger {
    display: flex;
    margin-left: 0.8em;
  }

  .about {
    align-items: flex-start;
    margin-top: 2em;
  }

  .footer {
    padding: 2em;
    margin-top: 3em;
  }

  .scroll-container {
    display: none;
  }
}
