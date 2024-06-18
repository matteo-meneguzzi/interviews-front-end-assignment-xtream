# Decision Log

This document outlines the key decisions made during the development of the project, along with the rationale behind them. It serves as a record to help future developers understand the context and reasoning behind these choices.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Technology Choices](#technology-choices)
3. [State Management](#state-management)
4. [API Integration](#api-integration)
5. [Routing](#routing)
6. [Styling](#styling)
7. [Linting and Formatting](#linting-and-formatting)
8. [Development](#development)

## 1. Project Structure

### Decision

I decided to use a modular structure with separate directories for components, hooks, services, and utilities.

### Rationale

This structure promotes code reusability, maintainability, and scalability. It makes it easier to navigate the project and locate specific functionalities.

## 2. Technology Choices

### Decision

I questioned whether to use third-party libraries and decided to do so.

### Rationale

I decided to use third-party libraries due to the short development time available and because these libraries are widely used and trusted within the community. Leveraging these libraries allows us to implement robust solutions more quickly and with less effort.

## 3. State Management

### Decision

I opted to use native state management.

### Rationale

Application does not have complex requirements that necessitate the use of structured state managers.

## 4. API Integration

### Decision

I decided to use Axios for making HTTP requests.

### Rationale

Axios is a promise-based HTTP client with a simple API, making it easier to handle HTTP requests and responses compared to the native `fetch` API. It also offers features such as interceptors, request cancellation, and automatic JSON data transformation, which simplifies API integration and error handling.

### Decision

I decided not to use Axios interceptors.

### Rationale

Application does not have complex requirements that necessitate the use of interceptors. Direct error handling keeps the code simple and easy to understand.

## 5. Routing

### Decision

I decided to use React Router for client-side routing.

### Rationale

React Router is a powerful and flexible routing library for React applications. It allows for dynamic routing, nested routes, and route parameters, making it easier to manage navigation and URL structure in a single-page application. Its declarative API integrates ill with React's component-based architecture, enhancing code readability and maintainability.

## 6. Styling

### Decision

I decided to use Tailwind CSS for styling.

### Rationale

Tailwind CSS is a utility-first CSS framework that offers a low-level utility classes approach to styling. It allows for rapid prototyping and development with consistent and maintainable styles across the application. Tailwind CSS also provides excellent documentation and community support, making it a suitable choice for this project.

## 7. Linting and Formatting

### Decision

I integrated ESLint and Prettier for linting and code formatting.

### Rationale

ESLint helps catch potential issues and enforce coding standards, while Prettier ensures consistent code formatting. Using both tools together helps maintain a clean and readable codebase.

## 7. Development

### Decision

I decided to give same effort for styling and structure.

### Rationale

As a FE dev, i would assume is equally important to know both logic (Typescript) and styling (Tailwind / css).
