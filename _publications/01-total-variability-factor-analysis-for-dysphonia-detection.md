---
title: "Total Variability Factor Analysis for Dysphonia Detection"
tagline: "Lad N.R., Nirmal J.H. & Naikare K.D., 2018 International Journal of Information Technology (IJIT) 11, 67-74, Springer"
website: "https://doi.org/10.1007/s41870-018-0112-5"
skills: ["MATLAB", "Speech Processing"]
---

This paper proposes the use of a new feature extraction technique named I-Vectors to detect 
and classify Dysphonic voice data. After initial pre-processing and framing, a total of 52 
important acoustic features are extracted from the speech. Gaussian Mixture Model (GMM) 
algorithm makes use of an Expectation–Maximization (EM) algorithm to compute the zeroth, 
first and second order statistics pertaining to the UBM model for final extraction of 
I-Vectors. This high dimensional supervector is transformed into a low dimensional subspace 
called the Total Variability space (TV subspace) following which a new vector set 
(called I-Vectors) in extracted using the UBM model and Baum-Welch statistics. 
A total of 110 I-Vectors are extracted for the given input data after undergoing Cholesky 
whitening. This newly created data is now used for classifying normal and dysphonia samples. 
The application of Support Vector Machines (SVM) along with the extracted I-Vectors gives 
98% accuracy on the unknown data set, which is a significant improvement in accuracy, 
as compared to 92% obtained without using I-Vectors.