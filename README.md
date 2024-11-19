# AR Object Viewer

A React Native application that lets users view and interact with 3D objects in augmented reality using ViroReact. The app currently supports displaying two 3D models (a Kinder chocolate gift and a dice) in AR space with the ability to switch between them.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Troubleshooting](#troubleshooting)
- [Contact](#contact)
- [References](#references)

## Installation

### Prerequisites

- Node.js
- npm or yarn
- React Native development environment set up
- Android Studio (for Android development)
- Xcode (for iOS development)
- Physical mobile device with USB debugging enabled

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/tahahasan7/elab-ar-react-native.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

   The following key packages will be installed:

   - `@reactvision/react-viro`: For AR functionality
   - `react-native`: Core framework
   - Additional required dependencies as specified in package.json

3. Link native dependencies:

   For iOS:

   ```bash
   cd ios && pod install && cd ..
   ```

   For Android:
   Make sure your environment is set up with Android Studio.

4. Connect your mobile device via USB cable and ensure USB debugging is enabled

5. Run the application:

   For iOS:

   ```bash
   react-native run-ios
   ```

   For Android:

   ```bash
   react-native run-android
   ```

   This will launch the app on your connected device.

## Usage

1. Connect your mobile device to your computer using a USB cable
2. Enable USB debugging on your device
3. Run the application using the appropriate command
4. Point your camera at a flat surface
5. Use the buttons at the bottom of the screen to switch between different 3D objects:
   - "Display old man" button shows the Kinder chocolate gift model
   - "Display second object" button shows the dice model

## Features

- **AR Visualization**: View 3D objects in augmented reality
- **Object Switching**: Toggle between different 3D models
- **Material Support**: Custom textures for each 3D model
- **Ambient Lighting**: Proper lighting for 3D objects
- **Position Controls**: Objects are positioned for optimal viewing
- **Scale Management**: Appropriate scaling for different 3D models

## Project Structure

```
project-root/
├── assets/
│   ├── chocolate_gift.obj/
│   │   ├── chocolate_gift.obj
│   │   └── 00.png
│   └── Die-OBJ/
│       ├── Die-OBJ.obj
│       └── ClassicColor/
├── components/
├── App.tsx
└── package.json
```

## Prerequisites

- A compatible mobile device with:
  - Working camera
  - USB debugging enabled
  - Sufficient storage space
  - iOS 11+ or Android 7+

## Troubleshooting

Common issues and solutions:

1. **Device Not Recognized**

   - Ensure USB debugging is enabled
   - Try a different USB cable
   - Verify drivers are installed correctly

2. **AR Not Working**

   - Check camera permissions
   - Ensure sufficient lighting
   - Verify device compatibility

3. **Models Not Loading**
   - Verify asset paths
   - Check model file format compatibility
   - Ensure textures are properly linked

## Contact

For questions, feedback, or contributions, feel free to reach out:

- **Taha Hasan**
  - **Email**: taha.hasan@student.ehb.be
  - **GitHub**: [tahahasan7](https://github.com/tahahasan7)

## References

- **ViroReact Documentation**: [ViroReact](https://viro-community.readme.io/)
- **React Native Documentation**: [React Native](https://reactnative.dev/docs/getting-started)
- **3D Model Resources**:
  - [dice](https://www.turbosquid.com/3d-models/3d-model-high-poly-die-classic-and-red-and-white-1960832)
  - [kinder gift](https://www.turbosquid.com/3d-models/chocolate-gift-3d-2236973)
