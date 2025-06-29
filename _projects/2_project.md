---
layout: page
title: HaptiDrum
description: A wearable air-drumming system that brings realistic haptic feedback and motion tracking to virtual drumming.
img: assets/img/projects/HaptiDrum/PCB.jpg
importance: 1
category: work
---

#### Introduction
HaptiDrum is a revolutionary wearable air-drumming system that transforms the virtual drumming experience through advanced haptic feedback technology. It leverages XIAO ESP32-S3 and XIAO nRF52840 microcontrollers, along with BNO085 IMUs, to achieve high-frequency, accurate motion tracking and deliver precise 3D localization of hand and foot movements. The core innovation lies in its dual-mode haptic feedback system, combining Linear Resonant Actuator (LRA) motors and Electrical Muscle Stimulation (EMS) to create a realistic drumming sensation. The system includes four wireless peripheral units—two for simulating hand-held drumsticks and two for foot-based hi-hat and kick drum control. The hand modules are mounted on the forearms and deliver tactile feedback that aligns with hand impact motions, while the foot modules are worn near the ankles or shoes to provide vibration feedback during foot gestures. This design ensures that feedback feels both natural and anatomically intuitive. All peripherals communicate via Bluetooth Low Energy with a mobile application that handles visualization and device configuration. The system architecture is fully scalable, supporting the addition of new peripherals and instruments without altering the core logic. By removing the need for physical drums or sticks, HaptiDrum offers musicians a portable, expressive, and immersive drumming experience that seamlessly connects air gestures with musical expression.
<br>

#### Demo Video
<video controls width="100%">
  <source src="/assets/video/HaptiDrum.mp4" type="video/mp4">
</video>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<br>

#### PCB Design
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/HaptiDrum/PCB.jpg" title="PCB" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    PCB
</div>
A custom dual-layer PCB measuring 30 mm by 42 mm integrates the ESP32-S3 microcontroller, BNO085 IMU, DRV2605L haptic driver, EMS switching components, and power management circuitry (Fig. 2). The board features a double-sided layout to optimize space utilization and minimize the device footprint. Integrated low-dropout (LDO) voltage regulators ensure stable operation of sensitive components, while surface-mount LEDs and status indicators provide visual feedback during operation. The entire board is housed within a lightweight, 3D-printed ABS enclosure. Each unit is powered by a 3.7v 820 mAh Li-Po battery, supporting at least 3 hours of continuous operation. Safety features include over-discharge protection, short-circuit prevention, and charge-balancing. Charging is achieved via a USB-C connector, and battery voltage is monitored by a voltage monitor circuit to report real-time status to the mobile app.
<br>
<br>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/HaptiDrum/appPairing.jpg" title="Pairing Page" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Pairing Page
</div>
<br>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/HaptiDrum/appDrum.jpg" title="Drum Page" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Drum Page
</div>

<br>
<br>
<br>
