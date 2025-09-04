---
title: "Motion Syntax - Day 3: Channel Ramps and Procedural Waveforms"
description: "Exploring channel ramps, procedural waveforms, and value mapping using expressions in After Effects."
---

# Motion Syntax - Day 3: Channel Ramps and Procedural Waveforms

## Introduction

Expressions in After Effects allow for dynamic control over animations, and one of the most powerful tools for shaping values visually is the channel ramp (chramp equivalent in Houdini). If you've used the Curves tool in Photoshop, this will feel familiar. A channel ramp provides an editable graph where you define how an input value (X-axis) maps to an output value (Y-axis). This is incredibly useful for creating custom waves, easing, stepped animations, and remapping values dynamically.

Channel ramps and procedural waveforms are commonly used in music visualizers, motion design transitions, and UI animations, where smooth motion shaping is crucial. They also play a vital role in character animation and physics-based effects, helping refine natural movement and creating gradual deceleration, elasticity, and impact simulations. Today, we will explore how to use expressions to replicate channel ramp behavior and build procedural waveforms.

## Understanding Channel Ramps and Value Mapping

A channel ramp allows you to visually control how a property changes over time or based on another variable. Instead of manually tweaking numbers in expressions, you can edit a curve that dictates the behavior of the animation.

## Simulating a Channel Ramp with `ease()` and `linear()`

In After Effects, we don’t have a built-in `chramp()` function like Houdini, but we can simulate similar behavior using `ease()`, `linear()`, and manual remapping techniques.

### Example 1: Remapping a Value Using `ease()`
```javascript
ease(time, 0, 5, 0, 100);
```
📌 *Tip: This smoothly remaps time from 0 to 5 seconds into a 0 to 100% range, creating a controlled animation curve.*

### Example 2: Using `ease()` to Define a Custom Falloff
```javascript
control = effect("Slider Control")(1);
ease(control, 0, 100, 0, 1);
```
📌 *Tip: Adjusting the slider input will dynamically modify how the property transitions.*

## Creating Procedural Waves

We can use sine waves in combination with `ease()` or `fit()` to create custom waveforms, similar to a channel ramp.

### Example 3: Custom Waveform Using `sin()` and `ease()`
```javascript
w = ease(time % 1, 0, 1, -1, 1);
transform.position = [value[0], value[1] + w * 50];
```
📌 *Tip: This simulates wave motion, but with a custom easing effect for smoother animation.*

### Example 4: Stepped Wave with `Modulo` and `Math.round()`
```javascript
w = Math.round(Math.sin(time * 2) * 3) * 30;
transform.position = [value[0], value[1] + w];
```
📌 *Tip: Creates a stepped wave effect, similar to a square wave, useful for robotic or digital motion. This type of motion is ideal for pixel art animations, mechanical movements, or stylized retro effects where smooth interpolation is not desirable.*

### Example 5: Dynamic Falloff with Distance-Based Wave Deformation
```javascript
d = length(position, thisComp.layer("Control").position);
d = linear(d, 0, 500, 0, 1);
w = Math.sin(time * 2) * d * 50;
transform.position = [value[0], value[1] + w];
```
📌 *Tip: The wave decreases in intensity as the layer moves further from the control layer.*

## Simulating a Custom Curve with `ease()` Variations

By adjusting input ranges, we can simulate steeper falloffs, soft curves, or sharp transitions, mimicking what a channel ramp does in Houdini. These curves can be particularly useful for character animation, helping to refine natural movements like ease-ins and ease-outs in limb motions. They are also valuable in physics-based effects, such as gradual deceleration of a bouncing object or controlled elasticity in UI elements.

### Example 6: Adjusting a Curve for Smoother Motion
```javascript
control = effect("Slider Control")(1);
output = easeInOut(control, 0, 100, 0, 1);
transform.opacity = output * 100;
```
📌 *Tip: Adjusting the slider creates a custom easing curve that can control opacity, position, or any property.*

## Practical Exercises

- Create a looping sine wave animation using `sin()`.
- Modify an object’s scale dynamically with a slider using `ease()`.
- Build a stepped motion effect using `Math.round()` to create a blocky movement.
- Combine `linear()` with a distance function to simulate falloff intensity.
- **Final Challenge**: Use `ease()`, `sin()`, and distance-based calculations to create an animation where objects pulse in size as they approach a control layer.

## Conclusion

Channel ramps and procedural waveforms provide intuitive ways to shape motion. Using `ease()`, `linear()`, and `sin()` together allows you to customize movement curves, create unique falloff effects, and control motion dynamically. These tools are crucial for refining UI animations, motion graphics, and even character movement, offering a precise way to control timing and easing.

*Next Up: Length, Distance Functions, and Time-Based Animation!*
