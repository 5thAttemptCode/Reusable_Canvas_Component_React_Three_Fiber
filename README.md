LIVE DEMO: https://reusable-canvas.netlify.app/  

In this project, the React Three Fiber (R3F) Canvas component has been efficiently reused across various pages of the application. Each page features a different 3D scene, encapsulated as children props within the Canvas component.    

# Benefits of a Reusable Canvas Component
1. Reduced Overhead: By reusing the Canvas component, we avoid the overhead of creating and tearing down multiple WebGL contexts. WebGL contexts can be expensive to create and maintain, so reducing the number of them can improve performance.

2. Consistency: A single Canvas component can ensure that our 3D scene remains consistent across different parts of your application - easier for debugging and maintaining.

3. Resource Management: WebGL resources like textures, geometries, and shaders can be reused more effectively when there's a single Canvas component managing them.

4. We can avoid unnecessary re-renders by using fx useMemo.
