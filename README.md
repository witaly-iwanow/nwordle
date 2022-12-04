# nwordle
3-7 letter Wordle based on Oxford 5000 list (answers) with the check lists derived from [Moby Project's SINGLE.TXT](https://www.gutenberg.org/files/3201/files/SINGLE.TXT).

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

The answer word lists are extracted in the exact same way, but from much smaller dictionaries including only most common words. Oxford 5000 was used for this projects.
Note that it's usually stored as Oxford 3000 plus Oxford 5000, the latter including only 3001-5000 word range. These lists can be found [here](https://github.com/jnoodle/English-Vocabulary-Word-List) among other places.

## How to run
Just go to the folder you checked it out into and serve with a simple HTTP server:
```
python3 -m http.server
```
Enjoy your 6-letter Wordle at <http://localhost:8000/index6.html>, same for 3-er to 7-er.
