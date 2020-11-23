---
title: "Mouse Brain MRI Image Classification with Data Parallelism"
tagline: "Source code to acquire and auto-stitch brain MRI images distributed across the servers and classify using pretrained models"
website: "https://github.com/nikunjlad/Broad-Institute-Mouse-Brain-Mapping"
skills: ["Tensorflow", "Python", "NumPy", "OpenCV"]
---

Mouse Brain MRI scans are used in medical research to understand brain activity as a result of testing a new drug before
public release. The brain scans are done after slicing the mouse brain along 3 planes - horizontal, sagittal and coronal.
Given a set of mouse brain MRI scans after cut along the 3 planes, we want to identify the class of an MRI scan given an 
image. This project acquires high resolution (5000x5000) histopathology images chunked into smaller bits across the servers
and auto-stitches them to form an image with a specified magnification level. These images are then scaled to 227x227 to be
further used for inference using pretrained ResNet-50, Inception-ResNet and ResNext-50 models and the models are trained using
transfer learning with IMAGENET weights as initializers. 

