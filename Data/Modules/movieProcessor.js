import { readJSONFile, saveJSONFile } from './fileHandler.js';
export class movieFilter {
    constructor(moviesFilePath, userFilePath) {
        this.moviesFilePath = moviesFilePath;
        this.userFilePath = userFilePath;
        this.movies = [];
    }

    async movieInFile() {
        try {
            this.movies = await readJSONFile(this.moviesFilePath);
            console.log('Movies loaded ');
        } catch (error) {
            console.log('Error loading data:', error.message);
        }
    }

    async saveUserData(userData) {
        try {
            const existingData = await readJSONFile(this.userFilePath);
            existingData.push(userData);
            await saveJSONFile(this.userFilePath, existingData);
        } catch (error) {
            console.log('Error saving user data:', error.message);
        }
    }

    filterMovies({ genre, minRating, minYear, maxYear }) {
        try {
            return this.movies.filter(movie => {
                const genre2 = movie.genre && movie.genre.toLowerCase().includes(genre.toLowerCase());
                const rating = movie.rating && movie.rating >= minRating;
                const year = movie.year && movie.year >= minYear && movie.year <= maxYear;


                return genre2 && rating && year;
            });
        } catch (error) {
            console.log("Error filtering movies:", error.message);
            return [];
        }
    }

}