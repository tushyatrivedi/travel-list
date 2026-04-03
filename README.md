# Far Away - Travel Packing List App

A React-based packing list application designed to help travelers organize and track items needed for their trips. The app provides an intuitive interface to manage items, track packing progress, and organize items through multiple sorting options.

## Overview

Far Away is a fully functional React application that demonstrates modern React patterns and best practices. It allows users to:

- Add items to a packing list with custom quantities
- Mark items as packed using checkboxes
- Delete unpacked items
- Sort items by description, input order, or packing status
- View real-time statistics about packing progress
- Clear the entire list with one click

## Features

### Core Functionality

1. **Item Management**
   - Add items with quantities (1-20 units)
   - Each item has a unique ID based on timestamp for reliable tracking
   - Display format: `[quantity] [item name]`

2. **Packing Tracking**
   - Toggle items as packed using checkboxes
   - Visual feedback: Packed items show a checkmark (✓), unpacked items show a delete button (✕)
   - Real-time statistics showing total items and packed count

3. **Sorting Options**
   - **By Description**: Alphabetically sort items A-Z
   - **By Input Order**: Display items in reverse chronological order (newest first)
   - **By Packed Status**: Group unpacked items first, then packed items

4. **List Management**
   - Delete individual unpacked items
   - Clear the entire list at once
   - Persistent state during session

## React Features & Concepts Used

### 1. **Hooks - useState**

The app uses the `useState` hook extensively for state management:

- **App.js**: Manages the items array and sort preference
  ```javascript
  const [items, setItems] = useState(itemArr);
  const [sort, setSort] = useState("");
  ```
- **Form.js**: Manages form input state with an object containing text, count, and checked status

### 2. **Component Composition**

The app follows a hierarchical component structure:

```
App
├── Logo
├── Form
├── PackingList
│   ├── ItemList
│   │   └── Item (mapped multiple times)
│   └── ListFunctions
└── Stats
```

### 3. **Props & Prop Drilling**

Data flows downward through props while callbacks flow upward:

- App passes `items`, `onChange`, `onDelete` to PackingList
- PackingList distributes these to ItemList and Item
- Callbacks like `handleChange`, `handleDelete` enable child-to-parent communication

### 4. **Event Handling**

Multiple event types are handled throughout the app:

- **onClick**: Button clicks for adding items, deleting, clearing
- **onChange**: Form inputs, checkboxes, select dropdowns
- **Controlled Components**: Form elements maintain their state through React state

### 5. **Conditional Rendering**

Used in Item.js to show different UI based on packing status:

```javascript
{
  item.checked ? (
    <FaCheck className="check" />
  ) : (
    <div className="delete" onClick={() => onDelete(item.id)}>
      <ImCross className="cross" />
    </div>
  );
}
```

### 6. **Lists and Keys**

The app implements proper list rendering with unique keys:

- Uses item IDs (timestamps) as keys for ItemList rendering
- Each item in the map has a unique key to help React identify changes

### 7. **Immutable State Updates**

State is updated immutably throughout the app:

- **Adding items**: `setItems([...items, newItem])`
- **Updating items**: Uses `.map()` to create new arrays instead of mutating
- **Deleting items**: Uses `.filter()` to create a new array without the deleted item
- **Form state**: Uses spread operator `{ ...data, field: value }`

### 8. **Array Methods & Sorting**

Advanced JavaScript array operations are used in App.js:

- **Cloning**: `[...items]` prevents direct state mutation
- **Sorting**: Three different comparators for different sort criteria
  - Alphabetical with `localeCompare()`
  - Numeric comparison for timestamps
  - Boolean conversion for packing status
- **Filtering**: `items.filter()` for getting packed/unpacked counts and clearing
- **Mapping**: Used throughout for rendering lists and transforming data

### 9. **Unique Identifiers**

Each item uses `new Date().getTime()` as a unique ID:

- Ensures items maintain consistent identity across renders
- Enables sorting by insertion order
- Allows reliable item deletion and updates

### 10. **Form Patterns**

The Form component demonstrates controlled form patterns:

- Dropdown for quantity selection (1-20 range)
- Text input for item name
- State synchronization with form elements
- Custom event handling with no form submission

## Project Structure

```
src/
├── App.js              # Main component - state management & sorting logic
├── Form.js             # Input form for adding items
├── PackingList.js      # Container component for list display
├── ItemList.js         # List rendering component
├── Item.js             # Individual item component
├── Stats.js            # Statistics display component
├── ListFunctions.js    # Sorting and clear controls
├── Logo.js             # Header/branding component
├── index.js            # React entry point
└── index.css           # Styling
public/
├── index.html          # HTML template
├── manifest.json       # PWA manifest
└── robots.txt          # SEO configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm build
```

This creates an optimized production build in the `build/` folder.

## Dependencies

- **React** (v19.2.4): JavaScript library for building user interfaces
- **React DOM** (v19.2.4): React package for rendering in the DOM
- **react-icons** (v5.6.0): Icon library providing checkmark and cross icons
- **react-scripts** (5.0.1): Build and configuration scripts for Create React App

### Development Dependencies

- Testing libraries (@testing-library/\*)
- Jest for test running
- Web Vitals for performance monitoring

## Component Details

### App.js (Main Component)

- Manages global app state (items and sort preference)
- Implements three sorting algorithms
- Provides all callback handlers for child components
- Calculates and passes statistics (total, packed count)

### Form.js

- Handles user input for adding new items
- Maintains form state with text, count, and default checked status
- Generates dropdown options 1-20

### Item.js

- Displays individual item with checkbox
- Shows packed/unpacked status visually
- Handles check and delete actions

### ItemList.js

- Maps items array to Item components
- Provides unique keys for list rendering

### ListFunctions.js

- Provides sort dropdown
- Clear list button

### Stats.js

- Displays statistics: total items and packed count

### Logo.js

- Simple branding component

## Code Quality

The app demonstrates several best practices:

- **Pure Components**: Functional components with no side effects
- **Single Responsibility**: Each component has a focused purpose
- **DRY Principle**: Reusable components and functions
- **Immutability**: State never mutated directly
- **Proper Key Usage**: Stable unique identifiers in lists
- **Event Delegation**: Efficient event handling patterns

## Future Enhancement Possibilities

- Local storage persistence
- Categories/sections for items
- Estimated vs actual packing comparison
- Drag-and-drop to reorder items
- Edit existing items
- Share lists with others
- Multiple list support

---

**Wireframe of the app**

![alt text](image.png)
