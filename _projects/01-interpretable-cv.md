---
title: "Interpretability in Image Segmentation Techniques via Inverse Correlation"
tagline: "This is my independent research trying to answer the question how does image segmentation models work and how can we interpret them."
website: "https://github.com/nikunjlad/Interpretability-in-Image-Segmentation-Techniques"
skills: ["PyTorch", "Python", "NumPy"]
---

<img src="/img/interpretable.png" alt="Interpretation" width="85%">

How do computer vision algorithms work internally? How can we interpret their inner workings? These are some of the questions 
which many researchers are trying to answer lately. While, there are various algorithms introduced to interpret Image Classification
and Object Detection algorithms, not many exist to interpret Image Segmentation models. This work is an independent study I pursued
under the guidance of Professor [Nik Brown](https://www.linkedin.com/in/nikbearbrown/){:target="_blank"}, where I tried to interpret these models. Since we know **Semantic Segmentation = Classification + Localization**
and **Instance Segmentation = Semantic Segmentation + Object Detection**, my hypothesis was - we can interpret Image Segmentation
algorithms via inverse correlation where using the same model as backbone, applying interpretable algorithms on classification models
will carry forward the effects to the segmentation maps too. While this argument may not be fully true, keeping the nature on research in mind, 
I decided to explore to see if this really holds true. I also developed an ebook for helping beginner-to-intermediate level individuals to understand
the importance and need of Interpretability in computer vision. Check it out [here](https://interpretability-in-image-segmentation-techniques.readthedocs.io/en/latest/){:target="_blank"}!