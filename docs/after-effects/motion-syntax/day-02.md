---
title: "Motion Syntax - Day 2: Clamp, Fit, and Waves"
description: "Exploring clamp(), linear(), and fit() functions in After Effects expressions to control animation dynamically."
---

# Motion Syntax - Day 2: Clamp, Fit, and Waves

::: tip 💡 **Want to follow along?**
Download the free project file with all the examples used in this guide.  
:::

Functions like `clamp()`, `linear()`, and `fit()` help shape values by restricting ranges, remapping inputs, and generating wave-like effects, offering greater procedural control. For instance, `clamp()` ensures elements stay within UI boundaries, while `linear()` and `fit()` allow for smooth transitions, such as fading objects in and out based on distance. Today, we will explore these functions and their practical applications in motion design.

## Understanding `clamp()`, `linear()`, and `fit()`

### 1. Restricting Values with `clamp()`

The `clamp()` function restricts a value within a given range. If the value is below `min`, it is set to `min`; if it exceeds `max`, it is capped at `max`.

#### Example: Clamping Position Values

```javascript
x = transform.position[0];
y = transform.position[1];
clampedX = clamp(x, 200, 800);
[clampedX, y];
```

**Note:** Prevents a layer from moving outside a `200-800` pixel range in the X direction, useful for UI design constraints.

#### Example: Clamping a Wiggle Effect on Scale

```javascript
wiggleValue = wiggle(2, 50)[0];
clampedScale = clamp(wiggleValue, 100, 150);
[clampedScale, clampedScale];
```

**Note:** Ensures that a layer’s scale, even when animated using `wiggle()`, stays between `100%` and `150%`, maintaining controlled variation.

### 2. Remapping Values with `linear()` and `ease()`

The `linear()` function remaps a value from one range to another, making it ideal for gradient effects and automated transitions. (`ease()` works similarly but applies easing to the interpolation.)

#### Example: Remapping Time to Opacity

```javascript
linear(time, 0, 5, 0, 100);
```

**Note:** This smoothly fades an object in from `0%` to `100%` opacity over `5` seconds.

However, this approach is tied to the global timeline. If we want the fade-in effect to start whenever the layer appears, we need to reference its `inPoint`.

#### Example: Procedural Fade-In Using `inPoint`

```javascript
t = time - thisLayer.inPoint;
fadeIn = linear(t, 0, 5, 0, 100);
```

**Note:** Ensures the fade-in starts at the layer's beginning, no matter where it is in the timeline.

#### Example: Adding a Procedural Fade-Out Using `outPoint`

```javascript
t = time - thisLayer.inPoint;
fadeIn = linear(t, 0, 5, 0, 100);
fadeOut = linear(time, thisLayer.outPoint - 5, thisLayer.outPoint, 100, 0);
Math.min(fadeIn, fadeOut);
```

**Note:** Ensures that the layer fades in during its first 5 seconds and fades out during its last 5 seconds, making it fully procedural.

### 3. Scaling Values with `fit()`

The `fit()` function works similarly to `linear()`, but ensures values remain within the new range, avoiding extrapolation.

#### Key Difference Between `linear()` and `fit()`
- `linear()` allows values to **extrapolate** beyond the defined range.
- `fit()` **restricts** values within the target range.

#### Example: Mapping Time to Scale (`linear()` vs `fit()`)

```javascript
linear(time, 0, 5, 50, 200); // Can go beyond 200 if time > 5
fit(time, 0, 5, 50, 200); // Stays within 50-200 range
```

**Note:** Use `fit()` when you want to **limit** the output range, and `linear()` when extrapolation is acceptable.

#### Example: Keeping a Dynamic Value Inside a Range

```javascript
value = wiggle(2, 300)[0];
clampedValue = fit(value, -500, 500, 100, 400);
[clampedValue, clampedValue];
```

**Note:** Ensures that even when `wiggle()` generates extreme values, the result is always constrained between `100` and `400`.

## Creating Waves with `sin()` and `cos()`

Oscillating functions like `Math.sin()` and `Math.cos()` generate smooth, wave-like motion. These are commonly used for bobbing effects, breathing animations, and organic movement in UI elements.

#### Example: Sinusoidal Motion for Floating Effect

```javascript
x = time * 100;
y = Math.sin(time * 2) * 50 + 200;
[x, y];
```

**Note:** Simulates a floating movement, like a buoy on water.

#### Example: Clamped Sin Wave for Controlled Motion

```javascript
wave = Math.sin(time * 2) * 50;
clampedWave = clamp(wave, -30, 30);
transform.position = [value[0], value[1] + clampedWave];
```

**Note:** Ensures that the wave remains within a defined range, preventing extreme motion.

#### Example: Adjusting Wave Height Dynamically

```javascript
d = length(position, thisComp.layer("Control").position);
w = Math.sin(time + d * 0.05);
scaledWave = fit(w, -1, 1, 20, 80);
transform.position = [value[0], value[1] + scaledWave];
```

**Note:** The height of the wave dynamically adjusts based on the distance from another layer.

## Practical Exercises

- Create a looping motion using `sin()` and `time`.
- Modify an object’s opacity based on its X position using `linear()`.
- Clamp an animation so that a layer never moves below `y=200`.
- Use `fit()` to scale a bouncing motion within a custom range.

## Final Challenge

Combine `clamp()`, `linear()`, and `sin()` to create a **procedural wave animation** that reacts to user input (like a slider control).

## Conclusion

The `clamp()`, `linear()`, and `fit()` functions are fundamental for shaping animation behavior in After Effects. These expressions allow for natural movement, remapped values, and controlled motion dynamics. Experimenting with these tools will open up new creative possibilities for procedural animation.

Next Up: [**Channel Ramps and Procedural Waveforms!**](/after-effects/motion-syntax/day-03)