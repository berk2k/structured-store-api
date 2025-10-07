# E-commerce Structured Data Demo

A full-stack Node.js + React project demonstrating schema.org JSON-LD integration for structured product data.

## Project Overview

This project is a mini e-commerce demo built to showcase how to work with structured data, schema.org, and JSON-LD in a full-stack environment.

It includes:

A RESTful API built with Node.js, Express, and PostgreSQL (via Sequelize ORM).

A frontend application built with React + TypeScript (Vite).

Automatic schema.org JSON-LD generation for each product, enabling SEO and Google Rich Results compatibility.

The goal is to represent product data in a way that is both:

💻 Human-readable (on the UI)

🧠 Machine-readable (for search engines and AI systems)

## Tech Stack
| Layer               | Technologies                                |
| ------------------- | ------------------------------------------- |
| **Frontend**        | React, TypeScript, Vite, Axios              |
| **Backend**         | Node.js, Express, Sequelize                 |
| **Database**        | PostgreSQL (via Docker)                     |
| **Structured Data** | schema.org JSON-LD (Product, Offer, Review) |

## Features
Backend (Node.js + PostgreSQL)

RESTful API for CRUD operations on products

Sequelize ORM configuration for PostgreSQL

Environment variable setup with .env

Containerized PostgreSQL instance via Docker

## Frontend (React + TypeScript)

Fetches product data from the API

Displays a responsive product list

Dynamically injects schema.org JSON-LD tags for SEO

Validated using Google Rich Results Test

## Example JSON-LD markup:

```json
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Wireless Headphones",
  "description": "Noise-cancelling Bluetooth headphones",
  "image": "https://example.com/headphones.png",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "99.99",
    "availability": "https://schema.org/InStock"
  }
}

```

🧠 ## Why JSON-LD?

JSON-LD (JavaScript Object Notation for Linked Data) enables web content to be understood by machines.
When added to a web page, it helps:

Search engines display Rich Results (e.g., price, stock, ratings)

AI systems (like ChatGPT or Bing Copilot) interpret your data

Improve SEO and web visibility

The project uses schema.org/Product and schema.org/Offer to describe products in a standardized, semantic way.

## Example Output

Visible (React UI):

```bash
🎧 Wireless Headphones  
Noise-cancelling Bluetooth headphones  
$99.99 – In Stock

```

## Invisible (JSON-LD):
```json
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Wireless Headphones",
  "price": "99.99",
  "availability": "InStock"
}

```

🚀 ## Highlights

✅ Full-stack architecture (Node + React + PostgreSQL)

✅ SEO & Rich Snippet ready

✅ Structured data integration (JSON-LD)

✅ TypeScript for strong typing

✅ Clean and modular code structure

