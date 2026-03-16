🚍 MargaSanchār – Smart Public Transport Tracking & Prediction System

MargaSanchār is a mobile-first smart public transport tracking prototype designed to improve accessibility and travel planning in Tier-2 and Tier-3 cities.

The application helps passengers plan trips, track buses, check crowd levels, and access transport information even without internet connectivity through simulated SMS-based queries.

🌍 Project Vision

Public transport systems in many developing cities lack real-time tracking and accessible information systems.

MargaSanchār aims to provide a simple, inclusive, and scalable digital transport assistant that allows commuters to easily access bus information, plan routes, and receive updates using smartphones or even basic SMS services.

✨ Key Features
🏠 Home Dashboard

Simple mobile-first interface

Quick access to:

Plan a Trip

Scan QR for bus stop information

Offline SMS query simulation

🚍 Trip Planning

Select origin and destination

Get best bus suggestion

View ETA and crowd level

📋 Bus List

Displays available buses

Shows:

Bus number

Estimated arrival time

Crowd level

Route

🗺️ Live Bus Tracking (Simulation)

Simulated route map

Moving bus icon

Displays next stop and ETA

📷 QR Stop Scanner (Simulation)

Scan a QR code at bus stops

Instantly see buses arriving at that stop

📡 Offline SMS Mode

Designed for low connectivity areas.

Users can simulate SMS queries such as:

Enter station code

Select direction

Receive bus information via chat-style interface

🧠 Problem Statement

Many public transport systems suffer from:

Lack of real-time information

Poor accessibility for non-smartphone users

Unpredictable waiting times

Overcrowding without visibility

MargaSanchār solves this by combining:

Trip planning

Real-time bus simulation

QR stop information

Offline SMS interaction

🛠️ Technologies Used

React JS

Vite

TypeScript

Tailwind CSS

shadcn UI components

📱 Design Principles

Mobile-first responsive layout

Clean minimal interface

Blue/green public transport theme

Smooth navigation without page reloads

🏗️ Project Structure
src
 ├ components
 │   ├ Home
 │   ├ PlanTrip
 │   ├ BusList
 │   ├ LiveMap
 │   ├ ScanQR
 │   ├ OfflineSMS
 │   └ BusInfoModal
 │
 ├ App.tsx
 ├ main.tsx
 └ index.css
