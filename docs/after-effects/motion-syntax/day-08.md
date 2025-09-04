---
title: "Motion Syntax - Day 8: Noise Functions and Procedural Randomness"
description: "Explore how noise functions like random(), wiggle(), and seedRandom() add organic movement and procedural randomness in After Effects."
---

# Motion Syntax - Day 8: Noise Functions and Procedural Randomness

## Introduction

Noise functions are essential in procedural animation, adding natural variation, organic movement, and controlled randomness. They are commonly used in motion graphics, VFX, and UI animations to create wind movement in particles, procedural camera shake, or natural character motion. In After Effects, expressions like `wiggle()`, `random()`, and `seedRandom()` allow for procedural motion that mimics physics-based behaviors.

Today, we will explore how to:

✅ Use `random()`, `wiggle()`, and `seedRandom()` to create natural variation.  
✅ Control procedural randomness with `seedRandom()`.  
✅ Generate organic motion using noise functions.  

## Creating Random Motion with `random()`

The `random()` function generates random values within a specified range. It is useful for adding unpredictable motion to animations.

### Example 1: Randomizing Position

```javascript
[random(-100, 100), random(-100, 100)];
```

📌 *Tip:* This sets the position randomly between -100 and 100 on both axes when applied to the Position property.

### Example 2: Randomizing Opacity

```javascript
random(50, 100);
```

📌 *Tip:* Generates a random opacity value between 50% and 100%. Since `random()` generates a new value every frame, this may cause flickering. To maintain a consistent random value, use `seedRandom()` as shown in the next example.

## Controlling Randomness with `seedRandom()`

By default, `random()` generates a new value every time it is evaluated. To maintain consistency while keeping randomness, we use `seedRandom()`.

### Example 3: Locking Random Values for Consistency

```javascript
seedRandom(index, true);
random(50, 100);
```

📌 *Tip:* The `true` parameter ensures the random value remains constant for each layer.

## Using `wiggle()` for Organic Motion

The `wiggle(frequency, amplitude)` function creates continuous, smooth randomness, ideal for natural movement and physics-based effects.

### Example 4: Adding a Floating Effect

```javascript
wiggle(2, 30);
```

📌 *Tip:* This makes the object move randomly by 30 pixels, 2 times per second. You can combine `wiggle()` with `seedRandom()` to ensure different layers have unique but consistent motion patterns:

```javascript
seedRandom(index, true);
wiggle(2, random(20, 40));
```

📌 *Tip:* Using `seedRandom()` ensures each layer has its own distinct but stable variation.

### Example 5: Animating Scale with Wiggle

```javascript
wiggle(1, 20);
```

📌 *Tip:* Creates a subtle pulsing effect, great for UI animations.

## Understanding Frequency and Amplitude in `wiggle()`

- **Frequency:** Controls how often the value changes per second.  
- **Amplitude:** Determines the intensity of the movement.  

For example:

```javascript
wiggle(0.5, 10); // Smooth, slow movement
wiggle(10, 100); // Erratic, fast movement
```

📌 *Tip:* Lower frequency values create subtle drifting motion, while higher values produce intense, jittery movement.

## Combining Noise Functions for Advanced Effects

By combining different noise functions, we can create more complex and organic motion.

### Example 6: Layered Wiggle for Natural Chaos

```javascript
x = wiggle(2, 50)[0];
y = wiggle(3, 30)[1];
[x, y];
```

📌 *Tip:* This applies different `wiggle` values to each axis, mimicking more chaotic motion.

### Example 7: Randomizing Wiggle Intensity

```javascript
wiggle(random(1, 5), random(10, 50));
```

📌 *Tip:* This makes the intensity of the wiggle vary randomly, useful for organic effects.

## Practical Exercises

✅ Use `seedRandom()` to generate unique values for multiple layers.  
✅ Apply `wiggle()` to create a floating motion for UI elements.  
✅ Experiment with `random()` to create controlled variations.  
✅ Combine `wiggle()` and `random()` to simulate chaotic motion.  
✅ Use `seedRandom()` with `wiggle()` to create a delayed, yet organic animation effect.  

### Final Challenge: 
Build a system where layers wiggle dynamically but retain unique motion paths using `seedRandom()`.

## Conclusion

Noise functions bring natural movement and procedural control to After Effects animations. By understanding how to combine randomness and structured variation, you can create effects that feel more organic and dynamic.

🚀 **Next Up:** Dot and Cross Product – Vector Math for Motion!
