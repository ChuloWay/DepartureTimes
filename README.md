# SF Movies Service

This service provides a map-based visualization of movie filming locations in San Francisco. Users can filter the view using autocompletion search and explore where various movies have been filmed across the city. The data is sourced from DataSF's Film Locations dataset.

## Features

- **Map Visualization**: The service displays filming locations of movies on a map interface, allowing users to visually explore different areas of San Francisco where movies have been filmed.

- **Autocompletion Search**: Users can search for specific movies using autocompletion, making it easy to filter and find filming locations based on movie titles.

## Data Source

The data used in this service is sourced from DataSF's Film Locations dataset, which provides information about the filming locations of various movies in San Francisco.

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.

- **Axios**: A promise-based HTTP client for making requests to external APIs.

- **Mapbox**: An API for building custom map experiences.

## Getting Started

To run the service locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies using `npm install`.
4. Set up your environment variables, including the Mapbox API key.
5. Start the server using `npm start`.

## Usage

- **Search**: Use the autocompletion search feature on the frontend page `/home` to filter filming locations by movie titles.
  
- **Map Visualization**: Explore filming locations across San Francisco on the map interface.

## End-to-End Testing

You can run end-to-end tests on the service endpoints using the command:

`npm run test:e2e`

This will execute automated tests to ensure the correctness and reliability of the service endpoints.

## Frontend Page

The frontend page to test this service is available at `/home`.

## API Documentation

The Swagger API documentation is available at `/api`.
## License

This project is licensed under the [MIT License](LICENSE).
