# nwordle
3-7 letter Wordle based on Oxford 5000 list (answers) with the check lists derived from Ubuntu's built-in American English dictionary. Moby Project's SINGLE.TXT can be used as well (as described below), but it contains too many junk pseudowords imo.

There's no license to it as it's 99% Josh Wardle's code lifted from the original website well before NYT's acquisition, use at your own discretion. As for myself, I started messing around with it in order to make 3- and 4-letter versions of it with only the most common words used in the answer list, so that my 5-yo daughter could practise spelling.

## Word list preparation scripts (macOS)
* Download SINGLE.TXT (single words excluding proper nouns, acronyms, compound words and phrases, but including archaic words and significant variant spellings, according to Wikipedia);
* Remove silly Windows-style line endings:
```
tr -d '\r' < single.txt > single-linux-eol.txt
```
* Get n-letter long words (4 in this particular case) without any apostrophes or such:
```
cat single-linux-eol.txt | grep '^[a-z][a-z][a-z][a-z]$' > dict4.txt
```
* Convert the plain text word list into a JS string array (requires building my C++ converter code first):
```
clang++ words-to-js.cpp -std=c++17 -o words-to-js
./words-to-js dict4.txt 16 > dict4.js
```

The answer word lists are extracted in the exact same way, but from much smaller dictionaries including only most common words. Oxford 5000 was used for this projects. Note that it's usually stored as Oxford 3000 plus Oxford 5000, the latter including only 3001-5000 word range. These lists can be found [here](https://github.com/jnoodle/English-Vocabulary-Word-List) among other places.
The answer list also needs to be randomly shuffled:
```
cat oxford3000.txt oxford5000.txt | grep '^[a-z][a-z][a-z][a-z]$' | gshuf > dict4.txt
```

## How to run
Just go to the folder you checked it out into and serve with a simple HTTP server:
```
python3 -m http.server
```
Enjoy your 6-letter Wordle at <http://localhost:8000/index6.html>, same for 3-er (too easy) to 7-er (torturous).

It is also deployed via GitHub Pages, so you can test it out here right away: <br>
https://witaly-iwanow.github.io/nwordle/index3.html<br>
https://witaly-iwanow.github.io/nwordle/index4.html<br>
https://witaly-iwanow.github.io/nwordle/index5.html<br>
https://witaly-iwanow.github.io/nwordle/index6.html<br>
https://witaly-iwanow.github.io/nwordle/index7.html

## Screenshots
<img width="508" alt="Screenshot 2022-12-04 at 10 53 49" src="https://user-images.githubusercontent.com/37587207/205473494-79fb4e5e-a3b7-413d-b1b0-afa7664d6844.png">

---

<img width="524" alt="Screenshot 2022-12-04 at 10 53 25" src="https://user-images.githubusercontent.com/37587207/205473571-9a34dd33-aff3-4cf6-99d8-6d386a019575.png">

