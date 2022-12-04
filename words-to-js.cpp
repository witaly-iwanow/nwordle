#include <iostream>
#include <fstream>
#include <string>
#include <charconv>
#include <cstring>

int main(int argc,char **argv){
    std::string filename;
    int wordsPerLine = -1;
    if (argc == 3) {
        filename = argv[1];

        auto [ptr, ec] { std::from_chars(argv[2], argv[2] + std::strlen(argv[2]), wordsPerLine) };

        if (ec != std::errc() || wordsPerLine < 1) {
            std::cerr << "Failed to parse second argument (number of words per line)";
            wordsPerLine = -1;
        }
    }

    if (filename.empty() || wordsPerLine < 1) {
        std::cerr << "Usage: " << argv[0] << " filename num_words_per_line\n";
        return -1;
    }

    std::ifstream file(filename);
    if (file.good() && file.is_open()) {
        std::cout << "const wordList = [\n";

        int wordCntr = 0;
        std::string word;
        while (getline(file, word)) {
            std::cout << (wordCntr > 0 ? "," : "") << "'" << word << "'";
            if (++wordCntr >= wordsPerLine) {
                std::cout << ",\n";
                wordCntr = 0;
            }
        }

        std::cout << "];\n";
    }

    return 0;
}
