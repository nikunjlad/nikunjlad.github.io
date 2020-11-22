---
title: "Avazu Click-Through Rate (CTR) Prediction"
tagline: "Source code to predict whether a mobile ad will be clicked given a online advertising dataset by Avazu"
website: "https://github.com/nikunjlad/Avazu-Ad-Click-Through-Rate--CTR--Prediction"
skills: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Plotly"]
---

In online advertising, click-through rate (CTR) is a very important metric for evaluating ad performance. As a result, 
click prediction systems are essential and widely used for sponsored search and real-time bidding. This project is an
effort to predict CTR given data from Avazu. First EDA is performed on the data, followed by preprocessing pipeline of -
standardizing features, automatic outlier detection, Variance-Inflation factor (VIF) analysis, automatic feature
selection and balancing imbalanced data usign SMOTE analysis. This is followed by developing models using XGBoost, Multi
-Layer Perceptrons and Logistic Regression. Finally a 95% confidence interval is developed for predicting how likely is
it for an ad to be clicked.