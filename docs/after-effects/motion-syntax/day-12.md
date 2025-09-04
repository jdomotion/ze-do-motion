---
title: "Motion Syntax - Day 12: Procedural Animation in After Effects – Dynamic Expressions Guide"
description: "Discover how to use dynamic expressions in After Effects to create procedural animations and automate movement efficiently."
---


# Motion Syntax - Day 12: Using Expressions for Procedural Animation in After Effects

::: tip 💡 **Want to follow along?**
Download the free project file with all the examples used in this guide.  
:::

## Introduction

Expressions in After Effects go beyond simple automation. They enable advanced visual effects like image sampling, object obscuration, and intricate interactions between layers. Unlike traditional keyframing, these expressions provide procedural control, making animations more flexible, adaptable, and efficient. This guide explores powerful expressions that enhance motion design and expand creative possibilities.

## 1. Sampling Pixel Color from an Image

The `sampleImage()` function extracts color data from a specific pixel, making it useful for dynamic effects such as color-driven animation or adaptive lighting.

### Example - Linking a Shape’s Color to an Image Pixel:
```javascript
src = thisComp.layer("Image");
pos = [100, 200]; // X, Y coordinates of the sample point
sampledColor = src.sampleImage(pos, [1, 1], true, time);
[sampledColor[0], sampledColor[1], sampledColor[2], value[3]];
```
This expression sets a layer’s color based on a sampled pixel from another image.

## 2. Detecting Object Obscuration

Using `toComp()` and `sampleImage()`, you can determine if an object is obscured, which is useful for automated visibility adjustments. The `toComp()` function converts a layer’s position from its local coordinate space to the composition’s coordinate space, essential when sampling image data across different layers.

### Example - Fading Out When Obscured:
```javascript
src = thisComp.layer("Background");
obj = thisLayer.toComp(anchorPoint);
sampled = src.sampleImage(obj, [2, 2]);
visibility = length(sampled.rgb) < 0.1 ? 0 : 100;
visibility;
```
This expression reduces a layer’s opacity when obscured by another layer.

## 3. Using `sampleImage()` for Dynamic Animations

Expressions can drive motion dynamically based on sampled image data, allowing objects to react to colors, textures, and brightness variations in an automated manner.

### Example - Controlling Time Remap with Pixel Values:
```javascript
// Define the target layer
target = thisComp.layer("Footage");

// Position for sampling the value
samplePoint = [transform.position[0], transform.position[1]];

// Sampling size
sampleSize = [1, 1];

// Get the value from the target layer
sample = target.sampleImage(samplePoint, sampleSize);

// Convert the value for use in time remap
// Assuming we're using the red channel (sample[0])
timeRemapValue = sample[0] * thisComp.frameDuration * 100;

// Return the value for time remap
timeRemapValue;
```
This technique remaps time based on sampled pixel values, allowing animations to respond dynamically to image brightness. This is useful for creating audio-reactive visuals where brightness data from an audio waveform preview controls time remapping, or for glitch effects that vary playback speed based on pixel intensity.

### Example - Driving Position from a Grayscale Map:
```javascript
src = thisComp.layer("Gradient Map");
pos = transform.position;
sampled = src.sampleImage(pos, [1,1]);
newPos = [pos[0], linear(sampled[0], 0, 1, 200, 800)];
newPos;
```
This expression alters an object's position dynamically based on the brightness of an underlying grayscale image.

### Example - Linking Scale to Image Data:
```javascript
src = thisComp.layer("Control Layer");
pos = transform.position;
sampled = src.sampleImage(pos, [2,2]);
scaleFactor = linear(sampled[0], 0, 1, 50, 150);
[scaleFactor, scaleFactor];
```
This dynamically adjusts scale based on sampled image data, making the object react to its environment for an adaptive effect.

## Conclusion

Advanced expressions unlock dynamic interactions between layers, allowing motion that adapts in real-time. Experiment with `sampleImage()` in different contexts, such as linking motion to textures, creating procedural effects, or integrating image-driven animation techniques. These techniques open up new creative possibilities in After Effects, enhancing efficiency and artistic expression!
