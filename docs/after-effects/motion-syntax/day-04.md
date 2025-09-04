---
title: "Motion Syntax - Day 4: Length, Distance Functions, and Time-Based Animation"
description: "Learn how to use length(), distance(), and time-based expressions in After Effects for dynamic, procedural animation."
---

# Motion Syntax - Day 4: Length, Distance Functions, and Time-Based Animation

## Introduction

In After Effects, expressions can measure the distance between points or modify properties based on time, enabling organic and dynamic animations without keyframes. These functions are widely used in UI design, motion graphics, and interactive elements, where objects react dynamically based on proximity or movement. This lesson focuses on the `length()` and `distance()` functions, and how time can be used to drive procedural motion.

## Understanding Length and Distance in Expressions

Two key functions for distance-based animations are:

- `length(x, y)` - Returns the distance between two scalar or vector values.
- `distance(point1, point2)` - Measures the distance between two points, useful for proximity-based effects.

These functions allow for animations that react dynamically to movement, such as fading elements as they move away or creating ripple effects.

## Using `length()` to Animate Properties

The `length()` function can be used to create gradient intensity effects, where a value changes based on proximity to a point.

### Example 1: Opacity based on distance from the center

```javascript
center = [thisComp.width / 2, thisComp.height / 2];
d = length(position[0] - center[0], position[1] - center[1]);
linear(d, 0, 300, 100, 0); // The further away, the more transparent
```

📌 **Tip:** This technique is useful for vignette effects, spotlight fades, or guiding user attention.

### Example 2: Scaling an object based on distance to another layer

```javascript
target = thisComp.layer("Control").position;
d = length(position[0] - target[0], position[1] - target[1]);
scaleFactor = linear(d, 0, 500, 150, 50);
[scaleFactor, scaleFactor];
```

📌 **Tip:** This creates a perspective effect, making objects appear larger when closer to a reference layer.

## Animating with `distance()`

The `distance()` function calculates the exact distance between two points, allowing for waves, pulses, and interactions based on proximity.

### Example 3: Creating concentric waves around a moving object

```javascript
center = thisComp.layer("Control").position;
d = distance(position, center);
sinWave = Math.sin(d * 0.05 - time * 2) * 50;
[position[0], position[1] + sinWave];
```

📌 **Tip:** Great for wave simulations, sound ripples, or UI interactions.

### Example 4: Proximity-Based Scale and Rotation (Falloff Effect)

```javascript
nullObj = thisComp.layer("Control").position;
d = distance(position, nullObj);
scaleFactor = linear(d, 0, 300, 200, 50);
rotationAmount = linear(d, 0, 300, 180, 0);
[scaleFactor, scaleFactor, rotationAmount];
```

📌 **Tip:** Adjusting the range (e.g., changing 300 to 500) will modify the falloff effect, making interactions smoother or more abrupt.

### Example 5: Color Change Based on Distance

```javascript
controller = thisComp.layer("Null").position;
d = distance(position, controller);
r = linear(d, 0, 300, 1, 0);
g = linear(d, 0, 300, 0, 1);
b = 0;
[r, g, b, 1];
```

📌 **Tip:** This effect is great for interactive UI elements or heatmap-like visuals.

### Example 6: Multi-Object Attraction Effect

```javascript
attractor1 = thisComp.layer("Attractor1").position;
attractor2 = thisComp.layer("Attractor2").position;
d1 = distance(position, attractor1);
d2 = distance(position, attractor2);
influence = linear(d1, 0, 400, 1, 0) + linear(d2, 0, 400, 1, 0);
scaleFactor = 100 + (influence * 50);
[scaleFactor, scaleFactor];
```

📌 **Tip:** Useful for swarm effects, objects responding to multiple attractors dynamically.

## Using Time for Continuous Motion

`time` is a fundamental element in procedural animation, allowing properties to change fluidly without keyframes. It enables continuous motion, looping animations, and dynamic behaviors without manual adjustments. By leveraging time, animations can be more flexible and responsive, adapting naturally to different compositions and interactions.

### Example 7: Circular Motion Based on Time

```javascript
radius = 100;
angle = time * 2;
x = Math.cos(angle) * radius;
y = Math.sin(angle) * radius;
[x + thisComp.width/2, y + thisComp.height/2];
```

📌 **Tip:** Great for orbits, UI indicators, and continuous loops.

### Example 8: Pulsing Opacity Over Time

```javascript
transform.opacity = (Math.sin(time * 3) * 50) + 50;
```

📌 **Tip:** Ideal for breathing effects, light pulses, or subtle UI animations.

## Practical Exercises

- **Proximity Fading** - Make an object fade in when another object gets close to it.
- **Expanding Ripples** - Modify Example 3 to create an expanding ripple that moves outward over time.
- **Pendulum Swing** - Use `distance()` and `time` to create a realistic pendulum movement.
- **Bouncing Ball** - Modify Example 7 to create a bouncing effect using `Math.abs()`.
- **Final Challenge** - Combine multiple concepts from this lesson to create a procedural animation where objects change scale, rotation, and opacity based on their distance from multiple moving controllers.

## Conclusion

The `length()`, `distance()`, and `time` functions provide powerful tools for procedural animation in After Effects. These techniques allow for natural movement, automated interactions, and physics-based behaviors without manual keyframes. Experiment with these functions to create dynamic effects and take your motion graphics to the next level!

🚀 **Next Up: Clamp, Fit, and Waves!**
