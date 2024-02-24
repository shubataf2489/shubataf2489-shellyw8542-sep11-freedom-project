<!DOCTYPE html>
<html>
  <head>
    <title>Basic Scene with Environment - A-Frame</title>
    <meta name="description" content="Basic Scene with Environment - A-Frame" />
    <script src="https://aframe.io/releases/0.9.0/aframe.min.js"></script>
    <script src="https://unpkg.com/aframe-environment-component@1.1.0/dist/aframe-environment-component.min.js"></script>
  </head>
  <body>
    <!-- Try changing the preset to one of default, contact, egypt, checkerboard, forest, goaland, yavapai, goldmine,
         threetowers, poison, arches, tron, japan, dream, volcano, starry, osiris. -->
    <!-- See more environment options: https://github.com/feiss/aframe-environment-component#parameters -->
    <a-scene environment="preset: forest">
      <a-assets>
        <img id="boxTexture" src="https://i.imgur.com/mYmmbrp.jpg" />
      </a-assets>

      <a-box
        src="#boxTexture"
        position="0 2 -5"
        rotation="0 45 45"
        scale="2 2 2"
        animation__position="property: object3D.position.y; to: 2.2; dir: alternate; dur: 2000; loop: true"
        animation__mouseenter="property: scale; to: 2.3 2.3 2.3; dur: 300; startEvents: mouseenter"
        animation__mouseleave="property: scale; to: 2 2 2; dur: 300; startEvents: mouseleave"
      ></a-box>

      <a-entity
        text="value: Hello, A-Frame; color: #FAFAFA; width: 5; anchor: align"
        position="-0.9 0.2 -3"
        scale="1.5 1.5 1.5"
      ></a-entity>
      <a-camera>
        <a-cursor color="#FAFAFA"></a-cursor>
      </a-camera>
    </a-scene>
  </body>
</html>