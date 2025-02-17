# Animated Navbar Component

## 🔥 Features
- Fully responsive navbar with Framer Motion animations.
- Supports both desktop and mobile navigation.
- Customizable logo, navigation links, and colors.
- Accessible with `aria-labels` and keyboard support.

## 📦 Installation
1. Copy the `Navbar.jsx`, `MobileNavbar.jsx`, and `FilledButton.jsx` files into your Next.js project.
2. Install dependencies:

Components
FilledButton
The FilledButton component is a customizable button with dynamic background and hover colors. It also supports being used as a clickable link or a standard button.

Props:
text: The text displayed inside the button (string, required).
onClick: A callback function that gets triggered when the button is clicked (function, optional).
link: An optional link that will turn the button into a clickable navigation item (string, optional).
bgColor: A dynamic background color for the button. Defaults to #6AA4D9 if not provided (string, optional).
hoverColor: A dynamic hover color for the button. Defaults to #683695 if not provided (string, optional).

Usage:
```
import FilledButton from './components/FilledButton';

// Default button with default colors
<FilledButton text="Contact Us" onClick={() => console.log("Clicked")} />

// Button used as a link with custom colors
<FilledButton 
  text="Shop Now" 
  link="/shop" 
  bgColor="#FFD700" 
  hoverColor="#FF4500" 
/>
```

Key Features
Dynamic Background and Hover Colors: The button allows users to set custom colors for both the background and hover effect.
Reusable for Links and Buttons: The component can be used either as a button (onClick) or as a navigation link (link).
Framer Motion Animations: Smooth animations for hover and click effects, powered by Framer Motion.

Customization
You can easily customize the following properties in the FilledButton component:

Background Color (bgColor): Set the button’s initial background color.
Hover Color (hoverColor): Change the background color when the button is hovered.
If no colors are provided, the button will default to the following:

Background Color: #6AA4D9
Hover Color: #683695

License
This project is licensed under the MIT License - see the LICENSE file for details.
