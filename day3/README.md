# Day 3 of [100 Days of CSS](https://100dayscss.com/days/3)

## Notes

### **Polygon()**

The `polygon()` function in CSS is used to create a shape by defining its vertices. The vertices are the points in space where the lines of the shape meet. These points are specified as pairs of x and y coordinates.

For example, consider the following CSS code:

```css
polygon(50% 0%, 0% 100%, 100% 100%);
```

This creates a triangle. The vertices are specified in percentages relative to the width and height of the element.

- `50% 0%`: The first point is at the horizontal center (50%) and the top (0%).
- `0% 100%`: The second point is at the left (0%) and the bottom (100%).
- `100% 100%`: The third point is at the right (100%) and the bottom (100%).

Understanding the arrangement of these points depends on the shape you want to create. For polygons, the order of the vertices determines the order in which the lines are drawn to connect them.

Experiment with different coordinates and shapes to get a better understanding. Online tools or visual editors can be helpful for visualizing the shapes created by different sets of vertices.

- **Visual Representation of the polygon**
Let's visualize the triangle from the previous example:  

Imagine a square element, and the triangle is drawn within it. Here's a rough representation: 
- width 100px
- height 100px

```
    100px
+------------+
|            |
|            | 100px
|            |
|            |
+------------+
```

```css
polygon(50% 0%, 0% 100%, 100% 100%);
```

```
        (50px, 0px)
      +---50% 0%--+
      |     *     |
      |   /   \   |
      |  /     \  |
      | /       \ |
      +*---------*+
   0% 100%       100% 100% 
   (0px 100px)   (100px 100px)
```

- For vertex 1: 50% 0% (x y) cordinates
    - the width of the element is 100px (x)
    - the height of the element is 100px (y)
    - 50% of 100px = 50px
    - 0% of 100px = 0
    - so the real coordinates end up as (50, 0)
    - that is, 50px for the width, 0px for the height. that is why the vertex 1 is where it is
- The same calculations go for vertex 2 and 3
- Resulting in the triangle below

```
     50% 0%
        *
       / \
      /   \
     /     \
0%  *-------*  100%

```

In this representation:
- The top vertex is at `50% 0%`.
- The bottom-left vertex is at `0% 100%`.
- The bottom-right vertex is at `100% 100%`.

Each pair of coordinates defines a vertex, and the lines connect these vertices to form the triangle within the square. The percentage values are relative to the width and height of the element.


### box-shadow

`box-shadow` is a CSS property that allows you to add a shadow effect to an element. It can be applied to most HTML elements. The syntax for `box-shadow` is as follows:

```css
box-shadow: [horizontal offset] [vertical offset] [blur radius] [spread radius] [color];
```

Here's a breakdown of the components:

1. **Horizontal Offset:** The horizontal distance the shadow will be offset. A positive value will push the shadow to the right, and a negative value will push it to the left.

2. **Vertical Offset:** The vertical distance the shadow will be offset. A positive value will push the shadow down, and a negative value will push it up.

3. **Blur Radius:** Optional. The blur radius determines how blurry the shadow will be. A value of 0 means no blur, and higher values create a more blurred effect.

4. **Spread Radius:** Optional. It determines the size of the shadow. A positive value increases the size of the shadow, and a negative value decreases it. If not specified, it is 0.

5. **Color:** The color of the shadow. This can be a named color, a hex value, an RGB value, or any valid CSS color representation.

Here's an example:

```css
.shadow-example {
  box-shadow: 10px 10px 5px 0px #888888;
}
```

This rule would create a box with a shadow that is 10 pixels to the right, 10 pixels down, has a blur radius of 5 pixels, no spread, and is a shade of gray (#888888).

You can also use `inset` to create an inner shadow:

```css
.shadow-example {
  box-shadow: inset 5px 5px 5px 0px #888888;
}
```

This would create an inner shadow with the same parameters as before.

### Trying to shadow a clipped element (polygon)

The `clip-path` property with the `polygon()` function is used to define a clipping region that will be applied to an element. It doesn't cut out part of the element; instead, it determines which part of the element is visible.

In your case, the `clip-path: polygon(50% 45%, 0% 100%, 70% 100%);` in the `.left` class defines a polygonal clipping path. The polygon consists of three points (50% 45%, 0% 100%, 70% 100%) that create a shape, and anything outside this shape is hidden.

The `box-shadow` property, however, is applied to the entire box, including the clipped area. If you want the shadow to be applied only to the visible part of the element (inside the clipping path), you might need a workaround. One possible approach is to use a pseudo-element to create a shadow. Here's an example:

```css
.left, .right {
    position: absolute;
    left: 25px;
    bottom: 29%;
    height: 100px;
    width: 100px;
    background: #EBEBEB;
}

.left {
    z-index: 1;
    clip-path: polygon(50% 45%, 0% 100%, 70% 100%);
}

.left::before {
    content: "";
    position: absolute;
    left: 100%; /* Adjust as needed */
    bottom: 0;
    width: 16px;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Shadow color */
}
```

In this example, the shadow is created using the `::before` pseudo-element, and its position is adjusted to create the desired effect. You may need to fine-tune the values based on your specific layout and styling preferences.
