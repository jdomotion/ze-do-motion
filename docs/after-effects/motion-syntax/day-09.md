---
title: "Motion Syntax - Day 9: Arrays and Loops – Enhancing Expressions with Iteration"
description: "Learn how to use arrays and loops in After Effects expressions to create dynamic and procedural animations efficiently."
---

# Motion Syntax - Day 9: Arrays and Loops – Enhancing Expressions with Iteration

## Introduction

Expressions in After Effects can be enhanced significantly with arrays and loops, allowing us to control multiple properties dynamically. Arrays store multiple values in a single variable, while loops iterate through data to perform repeated calculations efficiently. These techniques are useful for working with multiple layers, distributing animations, and generating procedural effects.

In this lesson, you will learn how to:
✅ Use arrays to handle multiple values.  
✅ Implement loops to create automated behaviors.  
✅ Apply iteration techniques for dynamic motion.  

## Understanding Arrays in Expressions

Arrays allow us to store multiple values inside a single variable, making expressions more efficient and reducing repetitive code. They are particularly useful for handling position, scale, color, and multi-dimensional data, enabling complex behaviors with minimal adjustments. In After Effects, arrays are commonly used to group related values and simplify calculations.

### Example 1: Storing Multiple Values in an Array

```javascript
myArray = [100, 200];
myArray[0]; // Returns 100
myArray[1]; // Returns 200
```

📌 **Tip:** Arrays start at index `0`, meaning the first item is accessed with `myArray[0]`.

### Example 2: Using Arrays to Control Position

```javascript
x = 300;
y = 500;
positionArray = [x, y];
positionArray;
```

📌 **Tip:** This is useful for storing and reusing position values.

## Using Loops for Automation

Loops allow us to repeat operations dynamically, eliminating the need for repetitive code.

### Example 3: Creating a Loop to Offset Multiple Layers

```javascript
offset = 50;
newPos = [value[0] + (index * offset), value[1]];
newPos;
```

📌 **Tip:** Each layer shifts further to the right based on its index value. Increasing the offset value results in a larger gap between layers, while decreasing it makes them more compact. This technique is useful for creating evenly spaced grids, aligning elements dynamically, or distributing motion across multiple layers.

### Example 4: Summing Values in an Array Using a Loop

```javascript
values = [10, 20, 30, 40];
sum = 0;
for (i = 0; i < values.length; i++) {
    sum += values[i];
}
sum;
```

📌 **Tip:** This loop adds all values in an array dynamically.

## Applying Loops to Motion and Effects

Loops can be used to generate procedural animation and distribute transformations across layers.

### Example 5: Creating a Wave Animation Across Multiple Layers

```javascript
waveSpeed = 2;
wavelength = 0.5;
yOffset = Math.sin(time * waveSpeed + index * wavelength) * 50;
[position[0], position[1] + yOffset];
```

📌 **Tip:** Each layer moves in a wave-like motion based on its index. This technique is useful for animating elements like a school of fish, flowing particles, or synchronized UI animations, where multiple objects follow a rhythmic movement pattern.

### Example 6: Assigning Random Colors to Multiple Layers

```javascript
seedRandom(index, true);
randomColor = [random(1), random(1), random(1), 1];
randomColor;
```

📌 **Tip:** Each layer gets a unique random color. The `seedRandom(index, true);` function ensures that each layer receives a consistent but unique random value based on its index. This prevents colors from changing every frame while maintaining variation across multiple layers.

## Practical Exercises

- Use an array to store multiple position values and apply them dynamically.
- Create a loop that offsets multiple layers based on their index.
- Generate a wave motion effect using a loop.
- Apply a loop to animate opacity across multiple layers.
- Experiment with nested loops to create complex procedural animations.

**Final Challenge:** Combine arrays and loops to create a procedural animation where layers move, change color, and scale over time.

## Conclusion

Arrays and loops enhance expressions by making animations scalable and dynamic. By understanding these tools, you can automate repetitive tasks, distribute motion, and create complex procedural animations efficiently.

🚀 Keep exploring and experimenting with expressions! There’s always more to learn, and new techniques can be added to expand your motion design skills!
