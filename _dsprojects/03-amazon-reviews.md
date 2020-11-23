---
title: "Amazon Product Reviews Sentiment Prediction"
tagline: "Source code to scrape Amazon reviews for a product and predict review sentiment on scale of 0-5"
website: "https://github.com/nikunjlad/Amazon-Review-Rating-Prediction-using-Naive-Bayes"
skills: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Plotly", "NLTK"]
---

Understanding user sentiment for a product is one of the key metrics in the E-commerce space to judge the success of a 
product and drive future decisions related to it. In this project, we used Selenium to scrape ~5000 reviews of Amazon
Kindle Paperwhite product. For every review given by user there was a rating given too. The textual reviews were analyzed 
and encoded using 4 techniques - Word Level TF-IDF (Term Frequency Inverse Document Frequency), Character Level TF-IDF,
N-Gram Level TF-IDF and Count Vectorizers and this transformed data was modeled using Naive Bayes for predicting user 
rating on scale the of 0 (Bad) - 5 (Great) given a textual review of the product