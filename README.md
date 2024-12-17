# Buisness Card

This project using React Native CLI version 0.71

## Getting Started

### Installing For iOS

For running this project you shoud have node >= 18 and your device must have XCode. Follow these steps:

    yarn install

    cd ios

    pod install

    cd ..

    npm run ios

## After that, it automatically open terminal and iOS simulator

## Troubleshooting: Clearing Cache and Rebuilding the App

If you're experiencing issues despite ensuring that all dependencies are properly installed, you can try the following steps to clear the cache and rebuild your application.

### 1. **Clear React Native Cache**

Sometimes, leftover cache can cause issues in your React Native application. You can clear the cache by running the following commands:

#### a. **Clear Metro Cache**

Metro is the bundler used by React Native, and its cache can sometimes cause problems.

```bash
npx react-native start --reset-cache
```

#### b. **Clear npm/yarn Cache and Reinstall Node Modules**

If the issue persists, try removing the `node_modules` folder and clearing the npm/yarn cache, then reinstall your dependencies.

```bash
rm -rf node_modules
npm cache clean --force
npm install
```

Alternatively, if you're using **Yarn**:

```bash
rm -rf node_modules
rm package-lock.json
yarn cache clean
yarn install
```

### 2. **Rebuild the App**

After clearing the cache, rebuild your app to ensure that all changes are applied correctly.

#### a. **Rebuild for Android**

If you're developing for Android, run the following command to clean and rebuild your app:

```bash
npx react-native run-android
```

#### b. **Rebuild for iOS**

If you're working with iOS, follow these steps to clean the cache and rebuild the app:

```bash
cd ios
pod deintegrate
pod install or pod install --repo-update
cd ..
npm run ios
```

### 3. **Restart Emulator or Device**

If you're using an emulator or a physical device, try restarting the emulator or device to ensure that all changes and updates are properly applied.

---

By following these steps, you can clear the cache and rebuild your app to ensure everything is functioning correctly. If the issue persists after clearing the cache and rebuilding, be sure to check the error logs or open an issue in the related repository.

---
