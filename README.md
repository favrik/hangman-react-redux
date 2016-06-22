# Hangman game in React + Redux
This project is an implementation of the [Hangman game](https://en.wikipedia.org/wiki/Hangman_(game)). It is a work in progress with the intention of learning Redux and React.

## Running the game
1. Clone this repository
2. Change to the project directory (eg. hangman-react-redux)
3. `npm install`
4. `npm start`

## Roadmap
- [x] Base logic implementation
- [x] Define CSS/images strategy (A combination of Radium and global CSS)
- [x] Initial Chances view (the hangman, but can be anything that provides adequate feedback)
- [x] Redux-dev-tools integration
- [x] Game over logic
- [x] Word pool from predefined values, or external fetch, and logic to select/pick them
- [ ] Initial theme/layout design
- [ ] Hangman methaphor selector and a couple of metaphors
- [ ] Hints
- [ ] i18n?


## Contributing
Pull requests welcome!


## Notes:
### Word list was generated in an Ubuntu system by running:
`egrep -i "[\'ééèĕê]" --invert-match /usr/share/dict/words |  egrep '.{3,}' >  wordlist.js`
