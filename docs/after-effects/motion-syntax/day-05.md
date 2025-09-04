---
title: "Motion Syntax - Day 5: Modulo, Quantization, and Pattern-Based Motion"
description: "Learn how to use the modulo operator and quantization techniques to create looping patterns, stepped animations, and controlled motion effects in After Effects."
---

# Motion Syntax - Day 5: Modulo, Quantization, and Pattern-Based Motion

## Introduction

In this lesson, we will explore how to use the modulo operator (%) and quantization techniques to create looping patterns, stepped animations, and controlled motion effects. The modulo operation is a fundamental mathematical tool in expressions that allows us to repeat patterns, synchronize movements, and build controlled cycling behaviors without manually setting keyframes.

These techniques are widely used in LED animations, retro gaming effects, and mechanical movements, where precise and repetitive motion is necessary. For example, modulo is often used to control blinking lights in pixel-based displays or to create consistent frame cycles in sprite-based animations. Quantization, on the other hand, is useful for creating blocky, stepped movements reminiscent of early computer graphics or robotic motion.

By the end of this lesson, you will understand how to:
✅ Use modulo to create repeating loops.
✅ Apply quantization to make smooth animations appear stepped.
✅ Combine these techniques to create procedural patterns and rhythmic movements.

## Understanding the Modulo Operator (%)

The modulo operator (%) returns the remainder of a division. This is useful for creating repeating patterns, as any value that reaches the divisor resets to 0.

### Example 1: Looping an Animation Every 5 Seconds

```javascript
time % 5;
```

📌 **Tip:** This expression continuously cycles between 0 and 5, making it useful for repeating behaviors.

### Example 2: Creating a Stepped Movement Every 10 Frames

```javascript
stepSize = 10;
frame = timeToFrames(time);
frame % stepSize == 0 ? 1 : 0;
```

📌 **Tip:** Adjusting `stepSize` changes how often the animation updates. A lower value makes movement feel more fluid, while a higher value results in a more noticeable, choppy effect—ideal for mechanical or low-frame-rate animations.

## Using Modulo for Repeating Motion

Modulo is often used to control cycles in animations, allowing movement to reset at specific intervals.

### Example 3: Making a Layer Move in a Loop Every 3 Seconds

```javascript
loopTime = 3;
loopProgress = time % loopTime;
x = loopProgress * 100;
[x, value[1]];
```

📌 **Tip:** This makes the layer move from left to right and reset every 3 seconds.

### Example 4: Alternating a Layer's Opacity Every Second

```javascript
time % 2 < 1 ? 100 : 0;
```

📌 **Tip:** This toggles the opacity between 100% and 0% every second, simulating a blinking effect.

## Quantization: Making Motion Stepped Instead of Smooth

Quantization is the process of rounding values to fixed intervals. This creates blocky movements, useful for mechanical animations or retro-style motion.

### Example 5: Snapping Position to a Grid

```javascript
gridSize = 50;
x = Math.round(position[0] / gridSize) * gridSize;
y = Math.round(position[1] / gridSize) * gridSize;
[x, y];
```

📌 **Tip:** This ensures the layer moves in fixed 50px increments, snapping to a grid.

### Example 6: Creating a Staggered Animation Effect

```javascript
step = 5;
steppedTime = Math.floor(time / step) * step;
steppedTime * 10;
```

📌 **Tip:** This makes an animation progress in jumps instead of smooth interpolation.

## Combining Modulo and Quantization for Patterns

By mixing modulo with quantization, we can create interesting procedural patterns. While modulo is great for looping behaviors and cyclic motion, quantization helps control precision and stepped movement. Using them together allows for effects like choppy rhythmic motion, grid-based animations, or pixelated visual styles where smooth interpolation is not ideal.

### Example 7: Creating a Looping Pulse Effect

```javascript
scaleFactor = (Math.sin(time * 3) + 1) / 2;
quantizedScale = Math.round(scaleFactor * 5) / 5;
[quantizedScale * 100, quantizedScale * 100];
```

📌 **Tip:** This creates a stepped pulsing effect instead of a smooth pulse. Increasing the divisor in `Math.round(scaleFactor * 5) / 5` results in smaller step increments, making the motion more fluid. Decreasing it creates larger steps, producing a more distinct, blocky pulsing effect.

### Example 8: Building a Procedural Grid Animation

```javascript
row = Math.floor(index / 5);
col = index % 5;
x = col * 100;
y = row * 100;
[x, y];
```

📌 **Tip:** Automatically places layers in a 5x5 grid, great for cloning effects.

## Practical Exercises

- Use modulo to make an animation reset every 4 seconds.
- Create a blinking effect that changes color every second.
- Use quantization to make a bouncing ball move in discrete steps.
- Build a loop that moves an object in a square path using modulo.
- **Final Challenge:** Combine modulo, quantization, and `sin()` to create a rhythmic animation that reacts to an external slider.

## Conclusion

The modulo operator and quantization techniques provide powerful tools for controlling looping motion, stepped animations, and repeating patterns. These expressions enable procedural animation with a mathematical approach, removing the need for manual keyframes.

Experiment with these techniques to create unique rhythmic motions, glitch effects, and precise mechanical animations!

🚀 **Next Up:** Understanding Wrangles and How to Use Expressions to Manipulate Other Layers!
