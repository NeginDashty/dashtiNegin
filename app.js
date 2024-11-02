import fs from 'fs/promises';
import readline from 'readline';
import { readJSONFile, saveJSONFile } from './Data/Modules/fileHandler.js';
import { movieFilter } from './Data/Modules/movieProcessor.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, resolve);
    });
}


class MovieRecommendation {
    constructor(movieFilter) {
        this.movieFilter = movieFilter;
        this.userInput = {};
    }

    async getUserInput() {
        try {
            this.userInput.genre = await askQuestion('Enter the genre: ');
            this.userInput.minRating = parseFloat(await askQuestion('Enter movie min rating: '));
            this.userInput.minYear = parseInt(await askQuestion("Enter minimum year: "), 10);
            this.userInput.maxYear = parseInt(await askQuestion("Enter maximum year: "), 10);

            if (isNaN(this.userInput.minRating) || isNaN(this.userInput.minYear) || isNaN(this.userInput.maxYear)) {
                throw new Error('Invalid input, only numbers are allowed!');
            }

            const userData = {
                genre: this.userInput.genre,
                minRating: this.userInput.minRating,
                minYear: this.userInput.minYear,
                maxYear: this.userInput.maxYear
            };

            await this.movieFilter.saveUserData(userData);

        } catch (error) {
            console.log('Error :', error.message);
        }
    }

    showRecommendedMovies(movies) {
        if (movies.length > 0) {
            console.log('Recommended movies: ');
            movies.forEach(movie => {
                console.log(`- ${movie.title} (${movie.year}) - Rating: ${movie.rating}`);
            });
        } else {
            console.log('No movies!');
        }
    }

    async run() {
        await this.movieFilter.movieInFile();
        await this.getUserInput();
        const recommendedMovies = this.movieFilter.filterMovies(this.userInput);
        this.showRecommendedMovies(recommendedMovies);
        rl.close();
    }
}
async function rProgram() {
    const MovieFilter = new movieFilter('./Data/movieData.json', './Data/user.JSON');
    const movieRecommendation = new MovieRecommendation(MovieFilter);
    await movieRecommendation.run();
}


rProgram().catch(error => {
    console.error('An error occurred:', error.message);
});