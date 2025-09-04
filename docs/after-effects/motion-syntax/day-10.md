---
title: "Motion Syntax - Day 10: Dot and Cross Product"
description: "Exploring the dot product and cross product in vector math for motion design and After Effects expressions."
---

# Motion Syntax - Day 10: Dot and Cross Product

## Introduction

Understanding vector math is essential for motion design, as it allows us to control movement, orientation, and interactions dynamically. Two fundamental operations in vector mathematics are the **dot product** and **cross product**. These tools help us measure alignment between vectors and determine perpendicular directions, respectively. In this lesson, we will explore their applications in motion design and After Effects expressions.

---

## Dot Product

### 🔹 What is the Dot Product?

The **dot product** is a scalar value that measures how much two vectors point in the same direction. It is calculated as:

\[ A \cdot B = |A| |B| \cos(\theta) \]

The dot product provides information about the angle between two vectors:

- If **dot(A, B) = 1**, they are perfectly aligned.
- If **dot(A, B) = 0**, they are perpendicular.
- If **dot(A, B) = -1**, they point in opposite directions.

### 🏗 Example in After Effects

A common use of the dot product is checking whether a layer is facing a target.

```javascript
vecA = normalize(thisLayer.toWorldVec([1, 0, 0]));
vecB = normalize(target.toWorldVec([1, 0, 0]));
dotProduct = dot(vecA, vecB);
dotProduct;
```

This returns a value between **-1 and 1**, indicating how much the vectors align. If close to **1**, the object is pointing towards the target.

### 🔹 Applications in Motion Design

- **Determining visibility**: Used in lighting calculations and shading.
- **Interpolating animations**: Smooth falloff based on angle.
- **Detecting alignment**: Checking if objects are facing the same direction.

---

## Cross Product

### 🔹 What is the Cross Product?

The **cross product** produces a new vector that is perpendicular to two given vectors. It is defined as:

\[ A \times B = |A| |B| \sin(\theta) \mathbf{n} \]

This is useful when calculating rotation directions or surface normals.

### 🏗 Example in After Effects

If you need to find a perpendicular vector, the cross product can help:

```javascript
vecA = normalize(thisLayer.toWorldVec([1, 0, 0]));
vecB = normalize(target.toWorldVec([0, 1, 0]));
crossProduct = cross(vecA, vecB);
crossProduct;
```

This results in a new vector that is perpendicular to both **vecA** and **vecB**.

### 🔹 Applications in Motion Design

- **Determining rotation direction**: Useful in physics-based animations.
- **Generating perpendicular vectors**: Important for local coordinate systems.
- **Calculating normals**: Helps define shading in 3D environments.

---

## 🏆 Challenge: Face the Target

Write an expression that makes a layer **rotate to always face a target**, using the dot product to determine the correct angle.

---

## Summary

- **Dot Product** measures alignment between vectors *(used for visibility, alignment checks, and falloff calculations).*
- **Cross Product** finds a perpendicular vector *(used for rotation, normals, and 3D transformations).*
- Both are essential for **procedural motion, physics, and 3D vector math**.

Understanding these vector operations will improve your ability to **automate and enhance motion graphics**. Experiment with these concepts in **After Effects** to see them in action!
