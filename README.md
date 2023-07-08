# Maintenance Requests Management - Front End

This repository contains the front-end code for the Maintenance Requests Management web application. The application is designed to help organizations efficiently manage and track maintenance requests.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and role-based access control
- Dashboard for an overview of maintenance requests
- Create, view, edit, and delete maintenance requests
- Filter and sort maintenance requests based on various parameters
- Responsive design for mobile and desktop devices

## Installation

To get started with the Maintenance Requests Management front-end, follow these steps:

1. Clone the repository:

   `````
   git clone https://github.com/mostafakt/Maintenance-requests-management-Front-End.git
   cd Maintenance-requests-management-Front-End
   ```

2. Install the required dependencies:

   ````
   npm install
   ````

3. Start the development server:

   ````
   npm start
   ````

4. Open a web browser and navigate to `http://localhost:3000`.

## Usage

To use the Maintenance Requests Management application:

1. Register a new user account or log in using existing credentials.
2. Navigate to the dashboard to view all maintenance requests.
3. Use the actions available (create, edit, or delete) to manage maintenance requests.
4. Apply filters and sorting options to narrow down the list of requests.

## API Integration

This front-end application requires a back-end API for handling data storage and retrieval. Make sure to set up the [Maintenance Requests Management API](https://github.com/mostafakt/Maintenance-requests-management-Back-End) and update the `API_URL` variable in the `src/config.js` file.

```javascript
export const API_URL = 'http://localhost:5000/api'; // Replace with your API URL
```

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page ↗](https://github.com/mostafakt/Maintenance-requests-management-Front-End/issues) and submit pull requests.

## License

This project is licensed under the [MIT License ↗](https://opensource.org/licenses/MIT). See the [LICENSE ↗](https://github.com/mostafakt/Maintenance-requests-management-Front-End/blob/main/LICENSE) file for more details.
