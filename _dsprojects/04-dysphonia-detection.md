---
title: "Dysphonia Detection Using Gaussian Mixture Models"
tagline: "Source code to detect if a speech signal has dysphonia or not"
website: "https://github.com/nikunjlad/Dysphonia-Detection-Using-Gaussian-Mixture-Models"
skills: ["MATLAB"]
---

Dysphonia is a voice disorder which usually occurs in people who speak or use their vocals frequently - singers, teachers,
etc. This causes the Lrynx (organ forming an air passage to the lungs, the voice box) to introduce hoarseness in the voice.
Subjective methods exist and often rely on human sense of hearing. This work is an effort to create an objective solution 
to the problem on of Dysphonia Detection. The speech signals are preprocessed an we achieve approx 25 speech features which
include but are not limited to Mel Frequency Cepstral Co-efficients (MFCC), Jitter and Shimmer, Short-Time Energy, etc. 
This low dimensional feature space is projected to a higher dimension using I-Vectors (a processing technique) which uses 
Universal Background Model (UBM) based on Gaussian Mixture Model (GMM). This high-dimensional feature space is then used
for speaker recognition prior following which the transformed speech signals are classified using Support-Vector Machines
(SVMs), K-Nearest Neighbors (KNN) and Naive Bayes.