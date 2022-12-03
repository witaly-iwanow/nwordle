# nwordle
3-7 letter Wordle based on Oxford 5000 list (answers) with the check lists derived from [Moby Project's SINGLE.TXT](https://www.gutenberg.org/files/3201/files/SINGLE.TXT).

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
