# Fingerprint Attendance System

A modern attendance management system that uses fingerprint authentication for secure and efficient attendance tracking. This system consists of three main components: an ESP32-based fingerprint scanner, a Node.js backend server, and an Angular frontend application.

## 🚀 Features

- **Fingerprint Authentication**: Secure biometric attendance tracking
- **Real-time Updates**: Instant attendance recording and updates
- **User Management**: Comprehensive user management system
- **Attendance Reports**: Detailed attendance reports and analytics
- **Cross-platform**: Accessible from any web browser

## 🛠️ Tech Stack

### Backend
- Node.js with TypeScript
- Express.js
- MongoDB
- JWT Authentication

### Frontend
- Angular
- TypeScript
- Material Design
- RxJS

### Hardware
- ESP32 Microcontroller
- Fingerprint Sensor Module

## 📦 Project Structure

```
.
├── backend/           # Node.js backend server
├── frontend/          # Angular frontend application
└── ESP32/            # ESP32 firmware code
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Angular CLI
- Arduino IDE (for ESP32)
- MongoDB
- ESP32 Development Board
- Fingerprint Sensor Module

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fingerprint-attendance-system.git
   cd fingerprint-attendance-system
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your configuration
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ng serve
   ```

4. **ESP32 Setup**
   - Open `ESP32/main.ino` in Arduino IDE
   - Install required libraries
   - Upload to ESP32 board

### Configuration

1. Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

## 🔧 Usage

1. Power on the ESP32 device
2. Access the web application through your browser
3. Register users and their fingerprints
4. Start recording attendance

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📫 Support

For support, open an issue in the repository.
