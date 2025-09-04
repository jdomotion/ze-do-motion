---
title: "Motion Syntax - Day 11: Advanced Text Manipulation"
description: "Breaking, Formatting, and Dynamic Styling in After Effects with Expressions."
---

# Motion Syntax - Day 11: Advanced Text Manipulation – Breaking, Formatting, and Dynamic Styling!

## Introduction

Manipulating text in After Effects with expressions allows for dynamic adjustments that save time and open up creative possibilities. Today, we explore advanced techniques such as breaking text into words/characters, formatting dynamically, and applying custom styling via expressions.

## Breaking Text into Words and Characters

Breaking text into separate words or characters enables motion control at a granular level. The `split()` method in JavaScript is helpful for this task.

### Splitting Text into Words

```javascript
var text = sourceText;
var words = text.split(" ");
words[index] || "";
```

#### How it works:
- `sourceText` retrieves the text content from the layer.
- `split(" ")` divides the text wherever spaces appear.
- The indexed `words[index]` selects specific words.

#### Example Usage:
- Apply this to a Text Layer and create multiple duplicates.
- Modify `index` dynamically for animations.

### Splitting Text into Characters

```javascript
var text = sourceText;
var chars = text.split("");
chars[index] || "";
```

#### How it works:
- Similar to word splitting, but instead, `split("")` separates each character.

## Formatting Text Dynamically

You can dynamically adjust text case, spacing, or alignment using expressions.

### Convert Text to Uppercase

```javascript
sourceText.toUpperCase();
```

### Convert Text to Lowercase

```javascript
sourceText.toLowerCase();
```

### Adding Prefixes and Suffixes

```javascript
"Prefix - " + sourceText + " - Suffix";
```

### Replacing Words Dynamically

```javascript
sourceText.replace("oldWord", "newWord");
```

## Dynamic Styling with Expressions

You can manipulate text appearance by controlling properties like color, size, or tracking with expressions.

### Animate Fill Color Based on Index

```javascript
var colors = [
  [1, 0, 0, 1], // Red
  [0, 1, 0, 1], // Green
  [0, 0, 1, 1]  // Blue
];
colors[index % colors.length];
```

#### How it works:
- Assigns different colors to words or characters dynamically based on their index.

### Adjusting Text Size Based on Length

```javascript
var size = clamp(20 + sourceText.length * 2, 20, 100);
[size, size];
```

#### How it works:
- Dynamically increases the font size depending on the length of the text while staying within limits.

### Animating Tracking Based on Time

```javascript
var baseTracking = 0;
var animatedTracking = baseTracking + time * 10;
animatedTracking;
```

#### How it works:
- Expands the tracking (letter spacing) over time, creating a smooth motion effect.

## Conclusion

Mastering text manipulation with expressions allows you to create more flexible and responsive animations in After Effects. Experiment with these techniques and integrate them into your motion projects!

### For a challenge, try:
- Creating a typewriter effect where each character appears sequentially.
- Generating random text transformations every few seconds.
- Applying color variations to every second word in a sentence.

**Happy animating!**
