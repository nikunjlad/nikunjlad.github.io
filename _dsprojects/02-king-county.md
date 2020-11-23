---
title: "King County Housing Price Prediction"
tagline: "Source code to predict housing prices given historical housing data of King County, USA"
website: "https://github.com/nikunjlad/King-County-Housing-Price-Prediction"
skills: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Plotly"]
---

Real estate is a booming business and using AI we can better understand the housing price trend and get an estimate of a
house given various parameters like # of bedrooms, geographic location, sq ft area, etc. This project models the housing
price data of King County, USA using Generalized Linear Models (GLMs), Gradient Boosting Machines (GBMs) and Random 
Forests (RF) with L2 Regularization (Ridge Regression). The data was subjected to normality tests using Q-Q plots and 
the homocedastic nature was observed and maintained. K-Best features were selected using ANOVA and Variance Thresholding
methods and the final models were evaluated using R-Squared and Adjusted R-Squared metrics.